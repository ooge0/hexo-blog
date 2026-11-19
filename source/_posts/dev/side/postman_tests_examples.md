---
title: Postman tests examples
layout: post
permalink: /dev_side/postman_tests_examples
categories:
  - Posts
tags:
  - dev_side
  - postman
  - api_testing
  - qa
  - API
date: 2023-05-11 17:32:05
---
*Below are examples of Postman tests written with Chai BDD/TDD assertion library.*

**Table of content**
[#1 Validate that the response body contains a specific](#1-Validate-that-the-response-body-contains-a-specific-email)
[#2 Check if the response status is 200](#21-Check-if-a-date-field-in-the-response-body-is-in-the-past)
[#3 Ensure the response time is less than 500ms](#3-Ensure-the-response-time-is-less-than-500ms)
[#4 Verify the user's first name in the JSON response](#4-Verify-the-users-first-name-in-the-json-response)
[#5 Validate that the Content-Type header is application/json](#5-Validate-that-the-Content-Type-header-is-application-Json)
[#6 Ensure that the JSON array is not empty](#6-Ensure-that-the-JSON-array-is-not-empty)
[#7 Verify that a specific key exists in the response body](#7-Verify-that-a-specific-key-exists-in-the-response-body)
[#8 Validate the response body includes the string 'success'](#8-Validate-the-response-body-includes-the-string-‘success’)
[#9 Check if a specific field is of a certain data type](#9-Check-if-a-specific-field-is-of-a-certain-data-type)
[#10. Validate that a specific field has a value greater than zero](#10-Validate-that-a-specific-field-has-a-value-greater-than-zero)
[#11. Ensure that a specific header exists (X-Request-ID)](#11-Ensure-that-a-specific-header-exists-x-request-id)
[#12. Verify that the response body does not contain a specific string](#12-Verify-that-the-response-body-does-not-contain-a-specific-string)
[#13. Check if the response body contains a specific key-value pair()(email)](#13-Check-if-the-response-body-contains-a-specific-key-value-pair)
[#14. Ensure the response contains multiple keys](#14-Ensure-the-response-contains-multiple-keys)
[#15. Verify that a field's value is within a specific range](#15-Verify-that-a-fields-value-is-within-a-specific-range)
[#16. Validate that the response body contains a specific substring](#16-Validate-that-the-response-body-contains-a-specific-substring)
[#17. Check if a numeric field in the response body is even](#17-Check-if-a-numeric-field-in-the-response-body-is-even)
[#18. Ensure that the response body has a non-empty string field](#18-Ensure-that-the-response-body-has-a-non-empty-string-field)
[#19. Verify that a boolean field in the response body is true](#19-Verify-that-a-boolean-field-in-the-response-body-is-true)
[#20. Validate that an array field has a specific length](#20-Validate-that-an-array-field-has-a-specific-length)
[#21. Check if a date field in the response body is in the past](#21-Check-if-a-date-field-in-the-response-body-is-in-the-past)
[#22. Ensure that a response header does not exist](#22-Ensure-that-a-response-header-does-not-exist)
[#23. Verify that a specific field contains a valid email address](#23-Verify-that-a-specific-field-contains-a-valid-email-address)
[#24. Validate that a field's value matches a specific pattern](#24-Validate-that-a-fields-value-matches-a-specific-pattern)
[#25. Check if the response body has no null values in an array](#25-Check-if-the-response-body-has-no-null-values-in-an-array)
[#26. Ensure the response includes a specific nested object](#26-Ensure-the-response-includes-a-specific-nested-object)
[#27. Verify that a list of IDs in the response body is unique](#27-Verify-that-a-list-of-ids-in-the-response-body-is-unique)
[#28. Validate that a numeric field falls within a certain percentile ](#28-Validate-that-a-numeric-field-falls-within-a-certain-percentile)
[#29. Check if a timestamp in the response body is in ISO 8601 format](#29-Check-if-a-timestamp-in-the-response-body-is-in-iso-8601-format)
[#31. Verify that a specific URL in the response body is reachable](#30-Ensure-that-a-specific-fields-value-does-not-contain-special-characters)
[#32. Validate that a key's value is within a specific set of allowed()values](#32-Validate-that-a-keys-value-is-within-a-specific-set-of-allowed-values)
[#33. Check if the response contains a nested array with at least one()object](#33-Check-if-the-response-contains-a-nested-array-with-at-least-one-object)
[#34. Ensure that the sum of a numeric array field equals a specific()value](#34-Ensure-that-the-sum-of-a-numeric-array-field-equals-a-specific-value)
[#35. Verify that the response body does not contain any undefined()fields](#35-Verify-that-the-response-body-does-not-contain-any-undefined-fields)
[#36. Validate that all objects in an array have a specific key](#36-Validate-that-all-objects-in-an-array-have-a-specific-key)
[#37. Check if a field's value is a valid JSON object](#37-Check-if-a-fields-value-is-a-valid-json-object)
[#38. Ensure the response body does not exceed a certain length](#38-Ensure-the-response-body-does-not-exceed-a-certain-length)
[#39. Verify that the response body does not contain a specific key](#39-Verify-that-the-response-body-does-not-contain-a-specific-key)
[#40. Validate that an array field in the response body is sorted](#40-Validate-that-an-array-field-in-the-response-body-is-sorted)

--- 

# 1. Validate that the response body contains a specific email

``` javascript
pm.test("validating responsebody contains specific email", function () {
    pm.expect(pm.response.text()).to.include("george.bluth@magic.com");
});
```

## 2. Check if the response status is 200

``` javascript
pm.test("validating response status is 200", function () {
    pm.response.to.have.status(200);
});
```

## 3. Ensure the response time is less than 500ms

``` javascript
pm.test("validating response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});
```


## 4. Verify the user's first name in the JSON response

``` javascript
pm.test("validating user's first name in JSON response", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.first_name).to.eql("George");
});
```


## 5. Validate that the Content-Type header is application/Json

``` javascript
pm.test("validating content-type header is application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.eql("application/json");
});
```


## 6. Ensure that the JSON array is not empty

``` javascript
pm.test("validating JSON array is not empty", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data).to.be.an('array').that.is.not.empty;
});
```


## 7. Verify that a specific key exists in the response body

``` javascript
pm.test("validating key existence in response body", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("data");
});
```


## 8.Validate the response body includes the string 'success'

``` javascript
pm.test("validating response body includes the string 'success'", function () {
    pm.expect(pm.response.text()).to.include("success");
});
```


## 9. Check if a specific field is of a certain data type

``` javascript
pm.test("validating field data type", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.id).to.be.a('number');
});
```


## 10. Validate that a specific field has a value greater than zero


``` javascript
pm.test("validating field value is greater than zero", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.age).to.be.above(0);
});
```


## 11. Ensure that a specific header exists (X-Request-ID)

``` javascript
pm.test("validating header existence X-Request-ID", function () {
    pm.expect(pm.response.headers.has("X-Request-ID")).to.be.true;
});
```


## 12. Verify that the response body does not contain a specific string

``` javascript
pm.test("validating absence of string 'error' in response body", function () {
    pm.expect(pm.response.text()).to.not.include("error");
});
```


## 13. Check if the response body contains a specific key-value pair

``` javascript
pm.test("validating key-value pair (email)", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.email).to.eql("george.bluth@magic.com");
});
```


## 14. Ensure the response contains multiple keys
``` javascript
pm.test("validating multiple keys existence (data, support)", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.keys(["data", "support"]);
});
```


## 15. Verify that a field's value is within a specific range

``` javascript
pm.test("validating field value is within range 1-10", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.page).to.be.within(1, 10);
});
```


## 16. Validate that the response body contains a specific substring

``` javascript
pm.test("validating response body contains substring 'welcome'", function () {
    pm.expect(pm.response.text()).to.include("welcome");
});
```


## 17. Check if a numeric field in the response body is even

``` javascript
pm.test("validating numeric field is even", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.id % 2).to.eql(0);
});
```


## 18. Ensure that the response body has a non-empty string field

``` javascript
pm.test("validating non-empty string field", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.name).to.have.length.above(0);
});
```


## 19. Verify that a boolean field in the response body is true

``` javascript
pm.test("validating boolean field is true", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.isActive).to.be.true;
});
```


## 20. Validate that an array field has a specific length

``` javascript
pm.test("validating array length is 5", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.items).to.have.lengthOf(5);
});
```


## 21. Check if a date field in the response body is in the past

```javascript
pm.test("validating date field is in the past", function () {
    var jsonData = pm.response.json();
    pm.expect(new Date(jsonData.data.date)).to.be.below(new Date());
});
```


## 22. Ensure that a response header does not exist

```javascript
pm.test("validating header does not exist X-Deprecated", function () {
    pm.expect(pm.response.headers.has("X-Deprecated")).to.be.false;
});
```


## 23. Verify that a specific field contains a valid email address

```javascript
pm.test("validating valid email address", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.email).to.match(/\S+@\S+\.\S+/);
});
```


## 24. Validate that a field's value matches a specific pattern

```javascript
pm.test("validating field matches phone number pattern", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.phone).to.match(/^\d{3}-\d{3}-\d{4}$/);
});
```


## 25. Check if the response body has no null values in an array

```javascript
pm.test("validating no null values in array", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data).to.not.deep.include.members([null]);
});
```


## 26. Ensure the response includes a specific nested object

```javascript
pm.test("validating nested object existence (address)", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.address).to.have.property("city");
});
```


## 27. Verify that a list of IDs in the response body is unique

```javascript
pm.test("validating unique IDs in list", function () {
    var jsonData = pm.response.json();
    var ids = jsonData.data.map(item => item.id);
    pm.expect(new Set(ids).size).to.eql(ids.length);
});
```


## 28. Validate that a numeric field falls within a certain percentile

```javascript
pm.test("validating field is in top 10 percentile", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.score).to.be.above(90);
});
```


## 29. Check if a timestamp in the response body is in ISO 8601 format:

```javascript
pm.test("validating timestamp format is ISO 8601", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.timestamp).to.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/);
});
```


## 30. Ensure that a specific field's value does not contain special characters:

```javascript
pm.test("validating no special characters in field", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.username).to.match(/^[a-zA-Z0-9]+$/);
});
```


## 31. Verify that a specific URL in the response body is reachable:
```javascript
pm.test("validating URL reachability", function () {
    pm.expect(pm.response.text()).to.match(/(http|https):\/\/\S+/g);
});
```

## 32. Validate that a key's value is within a specific set of allowed values:
```javascript
pm.test("validating key value in allowed set", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.status).to.be.oneOf(["Pending", "Completed", "Canceled"]);
});
```


## 33. Check if the response contains a nested array with at least one object:
```javascript
pm.test("validating nested array contains at least one object", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.orders).to.have.length.above(0);
});
```


## 34. Ensure that the sum of a numeric array field equals a specific value:
```javascript
pm.test("validating sum of array values equals 100", function () {
    var jsonData = pm.response.json();
    var sum = jsonData.data.prices.reduce((acc, price) => acc + price, 0);
    pm.expect(sum).to.eql(100);
});
```


## 35. Verify that the response body does not contain any undefined fields:
```javascript
pm.test("validating no undefined fields", function () {
    var jsonData = pm.response.json();
    var hasUndefined = Object.values(jsonData.data).includes(undefined);
    pm.expect(hasUndefined).to.be.false;
});
```


## 36. Validate that all objects in an array have a specific key:

```javascript
pm.test("validating key 'id' in all array objects", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data).to.satisfy(items => items.every(item => item.hasOwnProperty("id")));
});
```


## 37. Check if a field's value is a valid JSON object:

```javascript
pm.test("validating field is a valid JSON object", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.config).to.be.an('object');
});
```


## 38. Ensure the response body does not exceed a certain length:
```javascript
pm.test("validating response body length is at most 500", function () {
    pm.expect(pm.response.text().length).to.be.at.most(500);
});
```

## 39. Verify that the response body does not contain a specific key:
```javascript
pm.test("validating absence of key 'password'", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.not.have.property("password");
});
```


## 40. Validate that an array field in the response body is sorted:
```javascript
pm.test("validating array is sorted", function () {
    var jsonData = pm.response.json();
    var sortedArray = [...jsonData.data].sort((a, b) => a - b);
    pm.expect(sortedArray).to.eql(jsonData.data);
});
```