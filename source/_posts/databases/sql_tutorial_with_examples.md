---
title: SQL tutorial with examples
permalink: /databases/sql_tutorial_with_examples/
layout: post
categories:
  - Posts
tags:
  - databases
  - sql
  - tutorial
date: 2024-07-10 19:42:05
---    

This post contains a list of SQL methods, functions, and operators with examples.
* If you want to test it, by default, you need to create a new SQLite database, and all actions are executed using the created database.
* The name of the default (created) database for this example is dummy_SQLite_DB_for_tests.

## CREATE TABLE()
Create a new table.

```sql
CREATE TABLE food (id INTEGER PRIMARY KEY, name TEXT, price INTEGER CHECK (price <= 30), food_category TEXT , exp_date DATE);
CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, product_id INTEGER, price INT, customer_id INT);
CREATE TABLE IF NOT EXISTS customer (id INTEGER PRIMARY KEY, name TEXT, customer_id INTEGER);
```

## ALTER TABLE()
Modifies an existing table.

```sql
ALTER TABLE products ADD COLUMN food_id INT;
ALTER TABLE food ADD COLUMN customer_id INT;
```
Result of execution script will add additional columns.

## DROP TABLE()
Deletes an existing table.

```sql
DROP TABLE IF EXISTS food;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS customer;
```
Result of execution script will provide deletion of created tables.

## INSERT INTO()
Inserts a new row into a table.
Insert 12 records into the 'products' table

```sql
INSERT INTO products (id, name, product_id, food_id, price, customer_id)
VALUES
    (1, 'Flour', 101, 1, 3.99, 1),
    (2, 'Tomato Sauce', 102, 1, 2.99, 1),
    (3, 'Cheese', 103, 1, 4.99, 1),
    (4, 'Pepperoni', 104, 1, 2.49, 1),
    (5, 'Bun', 105, 2, 1.99, 2),
    (6, 'Beef Patty', 106, 2, 3.49, 2),
    (7, 'Lettuce', 107, 2, 0.99, 2),
    (8, 'Tomato', 108, 2, 1.49, 2),
    (9, 'Croutons', 109, 3, 0.49, 3),
    (10, 'Chicken', 110, 3, 3.99, 3),
    (11, 'Pasta Noodles', 111, 4, 2.99, 4),
    (12, 'Alfredo Sauce', 112, 4, 4.99, 4);
```
Content of updated `products` table is posible to verify using [result of execution command 'SELECT' ](#select-content-from-product-table)

Insert 12 records into the `food` table with categories and prices

```sql

INSERT INTO food (id, name, food_category, price, exp_date, customer_id)
VALUES
    (1, 'Pizza', 'Expensive', 15.99, '2001-01-01',1),
    (2, 'Burger', 'Moderate', 8.99, '2002-02-02',2),
    (3, 'Salad', 'Moderate', 7.49, '2003-03-03',3),
    (4, 'Pasta', 'Expensive', 18.99, '2004-04-04',4),
    (5, 'Sandwich', 'Moderate', 6.99, '2005-05-05',5),
    (6, 'Steak', 'Expensive', 25.99, '2006-06-06',6),
    (7, 'Sushi', 'Expensive', 22.99, '2007-07-07',7),
    (8, 'Soup', 'Cheap', 4.99, '2008-08-08',8),
    (9, 'Taco', 'Moderate', 9.99, '2009-09-09',9),
    (10, 'Cake', 'Moderate', 12.99, '2010-10-10',10),
    (11, 'Ice Cream', 'Cheap', 3.99, '2011-11-11',11),
    (12, 'Coffee', 'Cheap', 1.99, '2012-12-12',12);
```
Content of updated `food` table is posible to verify using [result of execution command 'SELECT' ](#select-content-from-food-table)


Insert 12 records into the `customer` table

```sql
INSERT INTO customer (id, name, customer_id)
VALUES
    (1, 'John Doe', 1),
    (2, 'Alice Smith', 2),
    (3, 'Bob Johnson', 3),
    (4, 'Carol Williams', 4),
    (5, 'David Brown', 5),
    (6, 'Emma Jones', 6),
    (7, 'Frank Miller', 7),
    (8, 'Grace Davis', 8),
    (9, 'Henry Martinez', 9),
    (10, 'Ivy Wilson', 10),
    (11, 'Jack Taylor', 11),
    (12, 'Karen Anderson', 12);
```
Content of updated table is posible to verify using [result of execution command 'SELECT' ](#select-content-from-customer-table)



## UPDATE()
Updates the values of one or more rows in a table.

```sql
UPDATE food SET name = 'Burger' WHERE id = 1;
```

or other example

```sql
UPDATE products SET name = 'Butter' WHERE id = 1;
```
Result of execution updates the record with specific `id`

## DELETE FROM()
Deletes one or more rows from a table.

```sql
DELETE FROM food WHERE id = 1;
```
Result of execution deletes the record with specific `id`

## SELECT()
Selects rows from a table.

```sql
SELECT * FROM food;
```
### select content from `food` table
Result of execution produce new records for the `food` table. It should be like below in the table
|id|name|price|food_category|exp_date|customer_id|
|--|----|-----|-------------|--------|-----------|
|1|Pizza|15.99|Expensive|2001-01-01|1|
|2|Burger|8.99|Moderate|2002-02-02|2|
|3|Salad|7.49|Moderate|2003-03-03|3|
|4|Pasta|18.99|Expensive|2004-04-04|4|
|5|Sandwich|6.99|Moderate|2005-05-05|5|
|6|Steak|25.99|Expensive|2006-06-06|6|
|7|Sushi|22.99|Expensive|2007-07-07|7|
|8|Soup|4.99|Cheap|2008-08-08|8|
|9|Taco|9.99|Moderate|2009-09-09|9|
|10|Cake|12.99|Moderate|2010-10-10|10|
|11|Ice Cream|3.99|Cheap|2011-11-11|11|
|12|Coffee|1.99|Cheap|2012-12-12|12|

```sql
SELECT * FROM products;
```
Result of execution produce new records for the `product` table. It should be like below in the table
### select content from `product` table
|id|name|product_id|price|customer_id|food_id|
|--|----|----------|-----|-----------|-------|
|1|Flour|101|3.99|1|1|
|2|Tomato Sauce|102|2.99|1|1|
|3|Cheese|103|4.99|1|1|
|4|Pepperoni|104|2.49|1|1|
|5|Bun|105|1.99|2|2|
|6|Beef Patty|106|3.49|2|2|
|7|Lettuce|107|0.99|2|2|
|8|Tomato|108|1.49|2|2|
|9|Croutons|109|0.49|3|3|
|10|Chicken|110|3.99|3|3|
|11|Pasta Noodles|111|2.99|4|4|
|12|Alfredo Sauce|112|4.99|4|4|

```sql
SELECT * FROM customer;
```
Result of execution produce new records for the `customer` table. It should be like below in the table

### select content from `customer` table
|id|name|customer_id|
|--|----|-----------|
|1|John Doe|1|
|2|Alice Smith|2|
|3|Bob Johnson|3|
|4|Carol Williams|4|
|5|David Brown|5|
|6|Emma Jones|6|
|7|Frank Miller|7|
|8|Grace Davis|8|
|9|Henry Martinez|9|
|10|Ivy Wilson|10|
|11|Jack Taylor|11|
|12|Karen Anderson|12|

```sql
SELECT id, name  FROM food;
```
Result of execution produce  records for the `food` tabl in the table below

|id|name|
|--|----|
|2|Burger|
|3|Salad|
|4|Pasta|
|5|Sandwich|
|6|Steak|
|7|Sushi|
|8|Soup|
|9|Taco|
|10|Cake|
|11|Ice Cream|
|12|Coffee|


```sql
SELECT id, name, product_id , food_id FROM products;
```
Result of execution produce  records for the `products` tabl in the table below

|id|name|product_id|food_id|
|--|----|----------|-------|
|1|Butter|101|1|
|2|Tomato Sauce|102|1|
|3|Cheese|103|1|
|4|Pepperoni|104|1|
|5|Bun|105|2|
|6|Beef Patty|106|2|
|7|Lettuce|107|2|
|8|Tomato|108|2|
|9|Croutons|109|3|
|10|Chicken|110|3|
|11|Pasta Noodles|111|4|
|12|Alfredo Sauce|112|4|


## JOIN()
Combines the rows from two or more tables.

```sql
SELECT
	f.id,
	f.name,
	p.product_id
FROM
	food AS f
JOIN products AS p ON
	f.id = p.food_id;
```
produce 
|id|name|product_id|
|--|----|----------|
|2|Burger|105|
|2|Burger|106|
|2|Burger|107|
|2|Burger|108|
|3|Salad|109|
|3|Salad|110|
|4|Pasta|111|
|4|Pasta|112|


## LEFT JOIN
Returns all rows from the left table (food) and the matching rows from the right table (products)

```sql
SELECT
	f.id AS food_id,
	f.name AS food_name,
	p.name AS product_name,
	c.name AS customer_name
FROM
	food f
LEFT JOIN products p ON
	f.id = p.food_id
LEFT JOIN customer c ON
	f.customer_id = c.id;
```
produce 
|food_id|food_name|product_name|customer_name|
|-------|---------|------------|-------------|
|2|Burger|Beef Patty|Alice Smith|
|2|Burger|Bun|Alice Smith|
|2|Burger|Lettuce|Alice Smith|
|2|Burger|Tomato|Alice Smith|
|3|Salad|Chicken|Bob Johnson|
|3|Salad|Croutons|Bob Johnson|
|4|Pasta|Alfredo Sauce|Carol Williams|
|4|Pasta|Pasta Noodles|Carol Williams|
|5|Sandwich||David Brown|
|6|Steak||Emma Jones|
|7|Sushi||Frank Miller|
|8|Soup||Grace Davis|
|9|Taco||Henry Martinez|
|10|Cake||Ivy Wilson|
|11|Ice Cream||Jack Taylor|
|12|Coffee||Karen Anderson|


## RIGHT JOIN
 Returns all rows from the right table (products) and the matching rows from the left table (food)

```sql
SELECT
	f.id AS food_id,
	f.name AS food_name,
	p.name AS product_name,
	c.name AS customer_name
FROM
	products p
RIGHT JOIN food f ON
	f.id = p.food_id
LEFT JOIN customer c ON
	f.customer_id = c.id;
```

produce
|food_id|food_name|product_name|customer_name|
|-------|---------|------------|-------------|
|2|Burger|Bun|Alice Smith|
|2|Burger|Beef Patty|Alice Smith|
|2|Burger|Lettuce|Alice Smith|
|2|Burger|Tomato|Alice Smith|
|3|Salad|Croutons|Bob Johnson|
|3|Salad|Chicken|Bob Johnson|
|4|Pasta|Pasta Noodles|Carol Williams|
|4|Pasta|Alfredo Sauce|Carol Williams|
|5|Sandwich||David Brown|
|6|Steak||Emma Jones|
|7|Sushi||Frank Miller|
|8|Soup||Grace Davis|
|9|Taco||Henry Martinez|
|10|Cake||Ivy Wilson|
|11|Ice Cream||Jack Taylor|
|12|Coffee||Karen Anderson|



## INNER JOIN
Returns only the rows where there is a match in both tables

```sql
SELECT
	f.id AS food_id,
	f.name AS food_name,
	p.name AS product_name,
	c.name AS customer_name
FROM
	food f
INNER JOIN products p ON
	f.id = p.food_id
INNER JOIN customer c ON
	f.customer_id = c.id;
```

produce
|food_id|food_name|product_name|customer_name|
|-------|---------|------------|-------------|
|2|Burger|Bun|Alice Smith|
|2|Burger|Beef Patty|Alice Smith|
|2|Burger|Lettuce|Alice Smith|
|2|Burger|Tomato|Alice Smith|
|3|Salad|Croutons|Bob Johnson|
|3|Salad|Chicken|Bob Johnson|
|4|Pasta|Pasta Noodles|Carol Williams|
|4|Pasta|Alfredo Sauce|Carol Williams|

## GROUP BY()
Groups rows together based on the values in a column.

```sql
SELECT name, COUNT(*) AS total_orders FROM food GROUP BY name;
```

produce total number of orders for each food name from the `food` table. Result should be like in the table below
|name|total_orders|
|----|------------|
|Burger|1|
|Cake|1|
|Coffee|1|
|Ice Cream|1|
|Pasta|1|
|Salad|1|
|Sandwich|1|
|Soup|1|
|Steak|1|
|Sushi|1|
|Taco|1|


## ORDER BY()
Orders the rows in a result set by the values in a column.

```sql
SELECT COUNT(*) AS total_orders FROM food ORDER BY total_orders DESC;
```
produce total amount of items and associate it with an arbitrary name.
|name|total_orders|
|----|------------|
|Burger|11|


## DISTINCT()
Removes duplicate rows from a result set.

```sql
SELECT DISTINCT name FROM food;
```
produce

|name|
|----|
|Burger|
|Salad|
|Pasta|
|Sandwich|
|Steak|
|Sushi|
|Soup|
|Taco|
|Cake|
|Ice Cream|
|Coffee|

Created `food` table has no duplicates

## LIMIT()
Limits the number of rows returned by a query.

```sql
SELECT id, name FROM food LIMIT 5;
```
produce output of `food `table that will be limitied by 5 records.
|id|name|
|--|----|
|2|Burger|
|3|Salad|
|4|Pasta|
|5|Sandwich|
|6|Steak|


## OFFSET()
Skips the first n rows returned by a query.

```sql
SELECT id, name FROM food OFFSET 10; -- MySQL
SELECT id, name FROM food LIMIT -1 OFFSET 9; -- SQLite
```

*OFFSET 9:*
This skips the first 9 rows in the result set. The rows returned will start from the 10th row onward (0-based index).

*LIMIT -1:*
The LIMIT clause specifies the maximum number of rows to return. A value of -1 is not valid in many SQL databases (e.g., SQLite, PostgreSQL). It typically results in an error because LIMIT expects a non-negative integer.

script produce result 
|id|name|
|--|----|
|11|Ice Cream|
|12|Coffee|


## LIKE()
 Performs a pattern match on a string.

```sql
SELECT name, id FROM food WHERE name LIKE '%ta%';
```
produce 
|name|id|
|----|--|
|Pasta|4|
|Taco|9|

## IN()
Checks if a value is in a list of values.

```sql
SELECT name, id FROM food WHERE id IN (1, 2, 3);
```
produce 
|name|id|
|----|--|
|Burger|2|
|Salad|3|

## EXISTS()
Checks if a row exists in a table.

```sql
SELECT name, id FROM food WHERE EXISTS (SELECT 1 FROM customer WHERE customer.id = food.customer_id); 
```
produce 
|name|id|
|----|--|
|Burger|2|
|Salad|3|
|Pasta|4|
|Sandwich|5|
|Steak|6|
|Sushi|7|
|Soup|8|
|Taco|9|
|Cake|10|
|Ice Cream|11|
|Coffee|12|


## CASE()
Performs a multi-way conditional operation. 
EXAMPLE-1
```sql
SELECT
	id,
	name,
	CASE
		WHEN price > 100 THEN 'Expensive'
		WHEN price > 50 THEN 'Moderate'
		ELSE 'Cheap'
	END
FROM
	food; 
```
produce 

|id|name|CASE WHEN price > 100 THEN 'Expensive' WHEN price > 50 THEN 'Moderate'ELSE 'Cheap'END|
|--|----|--------------------------------------------------------------------------------------------------|
|2|Burger|Cheap|
|3|Salad|Cheap|
|4|Pasta|Cheap|
|5|Sandwich|Cheap|
|6|Steak|Cheap|
|7|Sushi|Cheap|
|8|Soup|Cheap|
|9|Taco|Cheap|
|10|Cake|Cheap|
|11|Ice Cream|Cheap|
|12|Coffee|Cheap|




EXAMPLE-2

```sql
SELECT
    f.id,
    f.name,
    f.price,
    f.food_category,
    f.exp_date,
    CASE
        WHEN JULIANDAY(f.exp_date) - JULIANDAY('now') < 0 THEN 'Expired'
        ELSE 'Valid'
    END AS expiration_status
FROM
    food f;
```

**CASE Clause:**
Adds a calculated column, expiration_status, based on the expiration date (f.exp_date) compared to the current date (now).

**JULIANDAY()**: Converts a date into the Julian Day format (a continuous count of days and fractions since noon on January 1, 4713 BCE).

**JULIANDAY(f.exp_date) - JULIANDAY('now')**: Calculates the difference between the expiration date and the current date.
If the result is negative (< 0), the item is considered expired.
Otherwise, the item is valid.
AS expiration_status: Assigns the name expiration_status to this calculated column.

produce 

|id|name|price|food_category|exp_date|expiration_status|
|--|----|-----|-------------|--------|-----------------|
|2|Burger|8.99|Moderate|2002-02-02|Expired|
|3|Salad|7.49|Moderate|2003-03-03|Expired|
|4|Pasta|18.99|Expensive|2004-04-04|Expired|
|5|Sandwich|6.99|Moderate|2005-05-05|Expired|
|6|Steak|25.99|Expensive|2006-06-06|Expired|
|7|Sushi|22.99|Expensive|2007-07-07|Expired|
|8|Soup|4.99|Cheap|2008-08-08|Expired|
|9|Taco|9.99|Moderate|2009-09-09|Expired|
|10|Cake|12.99|Moderate|2010-10-10|Expired|
|11|Ice Cream|3.99|Cheap|2011-11-11|Expired|
|12|Coffee|1.99|Cheap|2012-12-12|Expired|



## COUNT()
Returns the number of rows in a table or the number of rows that satisfy a condition.

```sql
SELECT COUNT(*) FROM food;
```
produce
|COUNT(*)|
|--------|
|11|


## SUM()
Returns the sum of the values in a column.

```sql
SELECT SUM(price) FROM food;
```
produce

|SUM(price)|
|----------|
|125.38999999999997|

### ROUND()
Round to round a numeric value to a specified number of decimal places.
```sql
SELECT ROUND(SUM(price), 2) AS rounded_total_price FROM food;
```
produce
|SUM(price)|
|----------|
|125.39|

## AVG()
Returns the average of the values in a column.

```sql
SELECT AVG(price) FROM food;
```
produce
|AVG(price)|
|----------|
|11.399090909090907|

## MIN()
Returns the minimum value in a column.

```sql
SELECT name, MIN(price) FROM food;
```
produce
|name|MIN(price)|
|----|----------|
|Coffee|1.99|


## MAX()
Returns the maximum value in a column.

```sql
SELECT name, MAX(price) FROM food;
```
produce
|name|MAX(price)|
|----|----------|
|Steak|25.99|


## UPPER()
Converts a string to uppercase.

```sql
SELECT name as original_name, UPPER(name) FROM food;
```
produce
|original_name|UPPER(name)|
|-------------|-----------|
|Burger|BURGER|
|Salad|SALAD|
|Pasta|PASTA|
|Sandwich|SANDWICH|
|Steak|STEAK|
|Sushi|SUSHI|
|Soup|SOUP|
|Taco|TACO|
|Cake|CAKE|
|Ice Cream|ICE CREAM|
|Coffee|COFFEE|


## LOWER()
Converts a string to lowercase.

```sql
SELECT name as original_nam, LOWER(name) FROM food;
```
produce
|original_nam|LOWER(name)|
|------------|-----------|
|Burger|burger|
|Salad|salad|
|Pasta|pasta|
|Sandwich|sandwich|
|Steak|steak|
|Sushi|sushi|
|Soup|soup|
|Taco|taco|
|Cake|cake|
|Ice Cream|ice cream|
|Coffee|coffee|

## LENGTH()
Returns the length of a string.

```sql
SELECT name, LENGTH(name) FROM food;
```
produce
|name|LENGTH(name)|
|----|------------|
|Burger|6|
|Salad|5|
|Pasta|5|
|Sandwich|8|
|Steak|5|
|Sushi|5|
|Soup|4|
|Taco|4|
|Cake|4|
|Ice Cream|9|
|Coffee|6|

## TRIM()
Removes leading and trailing spaces from a string.

```sql
SELECT name ,TRIM(name) FROM food;
```
produce
|name|TRIM(name)|
|----|----------|
|Burger|Burger|
|Salad|Salad|
|Pasta|Pasta|
|Sandwich|Sandwich|
|Steak|Steak|
|Sushi|Sushi|
|Soup|Soup|
|Taco|Taco|
|Cake|Cake|
|Ice Cream|Ice Cream|
|Coffee|Coffee|


## CONCAT()
Concatenates two strings using '||' characters.

```sql
SELECT name || ' with Cheese' FROM food;
```
produce
|name &#124;&#124; ' with Cheese'|
|----------------------|
|Burger with Cheese|
|Salad with Cheese|
|Pasta with Cheese|
|Sandwich with Cheese|
|Steak with Cheese|
|Sushi with Cheese|
|Soup with Cheese|
|Taco with Cheese|
|Cake with Cheese|
|Ice Cream with Cheese|
|Coffee with Cheese|


## SUBSTR()
Extracts a substring from a string.

```sql
SELECT SUBSTR(name, 1, 3) FROM food;
```
produce
|SUBSTR(name, 1, 3)|
|------------------|
|Bur|
|Sal|
|Pas|
|San|
|Ste|
|Sus|
|Sou|
|Tac|
|Cak|
|Ice|
|Cof|


## INSTR()
Returns the position of a substring in a string.

```sql
SELECT name, INSTR(name, 'a') FROM food;
```
produce
|name|INSTR(name, 'a')|
|----|----------------|
|Burger|0|
|Salad|2|
|Pasta|2|
|Sandwich|2|
|Steak|4|
|Sushi|0|
|Soup|0|
|Taco|2|
|Cake|2|
|Ice Cream|8|
|Coffee|0|


## IFNULL()
Returns a substitute value if a value is NULL.

```sql
SELECT name, IFNULL(price, 0) FROM food;f
```
produce

|name|IFNULL(price, 0)|
|----|----------------|
|Burger|8.99|
|Salad|7.49|
|Pasta|18.99|
|Sandwich|6.99|
|Steak|25.99|
|Sushi|22.99|
|Soup|4.99|
|Taco|9.99|
|Cake|12.99|
|Ice Cream|3.99|
|Coffee|1.99|

There are no `NULL` values for the price in the `food` column, otherwise output will contains `0` instead of `NULL` for discovered prices.