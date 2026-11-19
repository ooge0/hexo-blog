---
title: Software QA - Naming convention
layout: post
date: 2025-01-26
categories:
  - QA
tags:
  - qa
  - qa_docs
permalink: /qa/naming-convention/
---

## Загальні правила варіантів:  

### **Обов’язкові частини:**  
- **`[Department]:`** Назва департаменту (Support_department, Business_department, Finance_department).  
- **`[Layer/Component]:`** Шар (API, DB, UI, Business_department Logic) або функціональна частина додатку.  
- **`[Type]:`** Тип задачі (Bug, User Story, Task).  
- **Short Description:** Короткий опис проблеми чи функціоналу (до 10 слів).  

### **Додаткові частини (за потребою):**  
- **`[Feature/Component]:`** Конкретний функціонал (Payment System, Dashboard, Notifications).  
- **`[Priority]:`** Пріоритет задачі (High, Medium, Low).  

### **Розділення:**  
- Використовувати квадратні дужки `[]` для кожної частини.  
- Опис має бути лаконічним та інформативним.  

### **Пріоритет для бізнес-логіки:**  
У заголовках слід явно виділяти, що проблема стосується складної бізнес-логіки, щоб забезпечити кращу видимість критичних завдань.
---

## Варіант 1: [Department] [Layer/Component] [Type] - [Short Description]  
**Приклад:**  
- `[Support_department] [API] [Bug] - Incorrect response for invalid tokens`  
- `[Business_department] [DB] [User Story] - Add indexes for transaction history`  
- `[Finance_department] [UI] [Task] - Fix alignment issues on the dashboard`  
- `[Support_department] [Business_department Logic] [Bug] - Incorrect tax calculation for EU countries`  

---

## Варіант 2: [Type] [Department] [Layer/Component] - [Short Description]  
**Приклад:**  
- `[Bug] [Support_department] [Business_department Logic] - Overbooking issue in payment system`  
- `[User Story] [Business_department] [API] - Add endpoint for user account deactivation`  
- `[Task] [Finance_department] [UI] - Update error message for login failure`  
- `[Bug] [Support_department] [DB] - Deadlock issue during batch updates`  

---

## Варіант 3: [Department] [Type] [Feature/Component] [Layer] - [Short Description]  
**Приклад:**  
- `[Support_department] [Bug] [Order Processing] [Business_department Logic] - Invalid discount application`  
- `[Business_department] [User Story] [Authentication] [API] - Support_department OAuth 2.0 for third-party apps`  
- `[Finance_department] [Task] [Reports] [DB] - Optimize query performance for large datasets`  
- `[Support_department] [Bug] [Dashboard] [UI] - Charts not loading in Safari browser`  

---

## Варіант 4: [Department] [Feature/Component] [Layer] [Priority] [Type] - [Short Description]  
**Приклад:**  
- `[Support_department] [Payments] [Business_department Logic] [High] [Bug] - Refunds not processed correctly`  
- `[Business_department] [User Profiles] [API] [Medium] [User Story] - Add Support_department for profile merging`  
- `[Finance_department] [Transaction History] [DB] [Low] [Task] - Add logs for failed transactions`  
- `[Support_department] [Dashboard] [UI] [High] [Bug] - Missing tooltip on hover`  

---

## Варіант 5: [Layer] [Department] [Type] [Feature/Component] - [Short Description]  
**Приклад:**  
- `[API] [Business_department] [Bug] [Authentication] - Token expiration not handled correctly`  
- `[DB] [Support_department] [Task] [Order Processing] - Add foreign key constraints`  
- `[Business_department Logic] [Finance_department] [User Story] [Notifications] - Send weekly summary emails`  
- `[UI] [Business_department] [Bug] [Forms] - Dropdowns not working in mobile view`  

