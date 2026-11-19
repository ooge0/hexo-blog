---
title: Software QA - DB testing approach
layout: post
date: 2024-10-21
categories:
  - QA
tags:
  - qa
  - db
permalink: /qa/software_qa_db_testing_approach/
---

***Table of Content***

[**INTRO**](#intro)
[1. **Data Setup for Tests**](#1Data-Setup-for-Tests)
[2. **Data Verification**](#2-Data-Verification)
[3. **Testing Stored Procedures**](#3-Testing-Stored-Procedures)
[4. **Data Cleanup After Tests**](#4-Data-Cleanup-After-Tests)
[5. **Automated Testing and Validation**](#5-Automated-Testing-and-Validation)


### INTRO
Interacting with complex SQL scripts and stored procedures can be an essential part of the testing process. Below, I have outlined common scenarios along with examples of SQL scripts and stored procedures that could be useful in a QA context. These examples cover areas such as data verification, data setup for tests, and automated testing of stored procedures.

### 1. Data Setup for Tests

**Example SQL Script to Prepare Test Data:** This script creates sample data that can be used for testing purposes.

```sql
-- Create a test database
CREATE DATABASE TestDB;

-- Use the test database
USE TestDB;

-- Create Example Tables
CREATE TABLE Users (
    UserId INT PRIMARY KEY IDENTITY,
    UserName NVARCHAR(50),
    Email NVARCHAR(100),
    CreatedAt DATETIME DEFAULT GETDATE()
);

CREATE TABLE Orders (
    OrderId INT PRIMARY KEY IDENTITY,
    UserId INT,
    OrderDate DATETIME DEFAULT GETDATE(),
    Amount DECIMAL(10, 2),
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

-- Insert Test Data into Users
INSERT INTO Users (UserName, Email)
VALUES
('John Doe', 'john@example.com'),
('Jane Smith', 'jane@example.com'),
('Alice Johnson', 'alice@example.com');

-- Insert Test Data into Orders
INSERT INTO Orders (UserId, OrderDate, Amount)
VALUES
(1, '2023-01-01', 150.00),
(1, '2023-02-05', 200.00),
(2, '2023-03-10', 99.99);
```

**QA Approach:**

- Use this script to create a clean database environment before running tests.
- Ensure that the right amount of test data is present for testing various scenarios.

### 2. Data Verification

**Example SQL Script to Verify Data:** This script checks if the data setup is correct.


```sql
-- Check the count of users in Users table
SELECT COUNT(*) AS UserCount FROM Users;

-- Check total order amount for each user
SELECT 
    U.UserName,
    SUM(O.Amount) AS TotalAmount
FROM 
    Users U
JOIN 
    Orders O ON U.UserId = O.UserId
GROUP BY 
    U.UserName;
```

**QA Approach:**

- Write scripts to verify that the setup is complete and correct before running tests.
- Use assertions in automated tests to match expected results with SQL query outputs.

### 3. Testing Stored Procedures

**Example Stored Procedure:** This stored procedure calculates total orders for a user.


```sql
CREATE PROCEDURE GetUserTotalOrders
    @UserId INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        SUM(Amount) AS TotalAmount
    FROM 
        Orders
    WHERE 
        UserId = @UserId;
END;
```

**Testing the Stored Procedure:**

You can write a script to test the stored procedure and verify its results.

```sql
-- Testing the stored procedure
DECLARE @TotalAmount DECIMAL(10, 2);

EXEC @TotalAmount = GetUserTotalOrders @UserId = 1;
PRINT 'Total Amount for User 1: ' + CAST(@TotalAmount AS NVARCHAR(10));

-- Expected output for verification in QA Testing:
-- Should match the expected total amount.
```

**QA Approach:**

- Create unit tests for stored procedures to ensure they work as expected.
- Check edge cases such as invalid user IDs, no orders, and performance.

### 4. Data Cleanup After Tests

**Example SQL Script to Clean Up Test Data:**


```sql
-- Drop Test Data
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Users;

-- Optionally drop the TestDB
DROP DATABASE IF EXISTS TestDB;
```

**QA Approach:**

- Always clean up test databases or data after tests to avoid state dependency in future tests.
- Automate cleanup in the CI/CD pipeline.

### 5. Automated Testing and Validation

**Example of Testing with SQL Queries in Automated Tests:** If using a test framework like Python’s `pytest` or a Java-based framework, you can include SQL verification steps post-execution of application code.

Here’s a pseudo-code example for a test that might be written in Python:


``` python
import pyodbc

def test_user_order_total():
    # Execute the application code that triggers order creation
    create_order(user_id=1, amount=200.00)

    # Connect to the Database
    conn = pyodbc.connect('Driver={SQL Server};'
                          'Server=your_server;'
                          'Database=TestDB;'
                          'UID=user;'
                          'PWD=password;')

    cursor = conn.cursor()

    # Execute verification SQL
    cursor.execute("EXEC GetUserTotalOrders @UserId = 1")
    result = cursor.fetchone()

    # Assert the expected value
```