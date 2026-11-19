---
title: Notes  Web Data Handling
layout: post
permalink: /notes__web_data_handling/
---

---
title: Web data handling
layout: post
categories:
  - Notes
tags:
  - web
date: 2024-11-20 21:38:30
---

## Get text from DOM by specific locator via DevTools

1. **Task**: Retrieve text from DOM for elements that have locator ".gfg-similar-read-item-heading" using devtools
Solution:
   ```js
   // Retrieve all elements matching the locator
   const elements = document.querySelectorAll(".gfg-similar-read-item-heading");

   // Extract text content from each element
   const texts = Array.from(elements).map(element => element.textContent.trim());

   // Output the text content as an array
   console.log(texts);

   // Optional: Display the texts in format {order_number}{text}
   texts.forEach((text, index) => console.log(`${index + 1}: ${text}`));

   // Optional: Display the texts in format {text}
   texts.forEach((text, index) => console.log(`${text}`));
   ```
