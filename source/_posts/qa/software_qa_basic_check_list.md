---
title: Software QA - Basic check list
layout: post
date: 2024-08-28
categories:
  - QA
tags:
  - qa
  - qa_check_list
permalink: /qa/software_qa_basic_check_list/
---

A short checklist I use as a starting point when a new feature lands on my desk. It is not exhaustive: take what fits the feature, drop what doesn't, and add your own cases as you find bugs. Every section follows the same structure: positive, negative and other tests.

## 1 Login form Test Cases

1. **Positive test cases**:
	1. **Valid data**:
		1. Correct login and password.
		2. Various email formats (with dots, hyphens, plus-addressing, etc.).
		3. Different password lengths (minimum, maximum, average).
		4. Combinations of uppercase and lowercase letters, numbers, special characters.
		5. Leading/trailing spaces in login are handled as specified (trimmed or rejected).
	2. **Login after registration**:
		1. Login with a newly created account.
		2. Login after successful password recovery.
	3. **Login after deleting account and registering new one using same credentials**
	4. **Login using social networks**:
		1. Login through various social networks (if this feature is available).
	5. **Session**:
		1. "Remember me" keeps the session after browser restart.
		2. Logout really ends the session.
		3. Redirect to the originally requested page after login.
2. **Negative test cases**:
	1. **Invalid data**:
		1. Empty fields.
		2. Incorrect email format.
		3. Password too short/long.
		4. Incorrect password (including wrong letter case).
		5. Special characters instead of letters and numbers.
		6. SQL injection.
		7. XSS attacks.
	2. **Blocking**:
		1. Account blocking after several failed login attempts.
		2. IP address blocking after several failed login attempts.
	3. **Missing fields**:
		1. Attempting to log in without filling in required fields.
	4. **Non-existent user**:
		1. Attempting to log in with a non-existent login.
	5. **Account state**:
		1. Blocked, deactivated or unverified account.
	6. **Session**:
		1. Expired session or old token is rejected.
		2. "Back" button after logout does not show protected pages.
3. **Other tests**:
	1. **User interface tests**:
		1. Checking the visual design of the form.
		2. Checking the accessibility of form elements using the keyboard.
		3. Checking the operation of prompts and error messages.
		4. Password show/hide toggle, paste from a password manager.
	2. **Performance tests**:
		1. Checking the response time of the form under heavy load.
	3. **Security tests**:
		1. Checking for vulnerabilities to various types of attacks (SQL injection, XSS, CSRF, etc.).
	4. **Backend / API checks**:
		1. Correct status codes (401 vs 403 vs 429).
		2. Same error message for wrong login and wrong password (no user enumeration).
		3. Password is not returned in responses and not written to logs.
		4. Rate limiting on repeated attempts.
		5. Cookie flags (HttpOnly, Secure, SameSite) and token expiry.

## 2 Order creation Test Cases

1. **Positive test cases**:
	1. **Valid data**:
		1. Correct user information (name, address, contact details).
		2. Valid payment information (credit card, PayPal, etc.).
		3. Correct shipping address.
		4. Valid product selection.
		5. Correct quantity.
		6. Successful order placement.
	2. **Price calculation**:
		1. Promo codes and discounts.
		2. Taxes and shipping cost.
		3. Currency and rounding.
	3. **Order modification**:
		1. Changing shipping address.
		2. Modifying product quantity.
		3. Canceling an order.
	4. **Order tracking**:
		1. Tracking order status from placement to delivery.
		2. Confirmation email/notification after placement.
	5. **Order history**:
		1. Viewing previous orders.
2. **Negative test cases**:
	1. **Invalid data**:
		1. Empty fields.
		2. Incorrect email format.
		3. Invalid payment information.
		4. Incorrect shipping address.
		5. Out-of-stock products.
		6. Negative or zero quantity.
		7. Quantity above available stock.
	2. **Payment errors**:
		1. Declined payment.
		2. Insufficient funds.
		3. Invalid payment method.
		4. Payment timeout or page closed right after payment (order and payment stay consistent).
	3. **Order placement errors**:
		1. Server errors.
		2. System failures.
		3. Double