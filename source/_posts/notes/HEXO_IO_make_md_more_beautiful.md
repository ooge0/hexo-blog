---
title: Hexo Io Make Md More Beautiful
layout: post
permalink: /hexo_io_make_md_more_beautiful/
---

---
title: Add more beautiful HEXO blog pages
date: 2024-10-21
categories:
  - Notes
tags:
  - hexo_io
  - note
  - blog
  - md_format
---


Here are some HTML and CSS code snippets that you can use in Markdown to style and enhance text areas, add background colors, or create visually distinct sections without JavaScript or complex manipulations.

  **1. Text Block with Background Color and Padding**
   
  Use this snippet to create a colored background for a paragraph or block of text.

  ```html
  <div style="background-color: #f0f8ff; padding: 15px; border-radius: 5px;">
    <p>This is a block of text with a light blue background color, padding, and rounded corners. You can style each paragraph separately by adding new `<p>` tags within this div.</p>
  </div>  
  ```
result below
<div style="background-color: #f0f8ff; padding: 15px; border-radius: 5px;">
    <p>This is a block of text with a light blue background color, padding, and rounded corners. You can style each paragraph separately by adding new `<p>` tags within this div.</p>
  </div> 

---

**2. Highlighted Section with Border and Background**
   
  Create a visually distinct area with a subtle border, background, and some padding.
  ```html
  <div style="background-color: #dff0d8; border: 1px solid #d6e9c6; padding: 20px; border-radius: 8px;">
  <h3 style="color: #3c763d;">Important Notice</h3>
  <p>This section is highlighted with a green background, a border, and some padding to make it stand out.</p>
  </div>
  ```
  result below

<div style="background-color: #dff0d8; border: 1px solid #d6e9c6; padding: 20px; border-radius: 8px;">
  <h3 style="color: #3c763d;">Important Notice</h3>
  <p>This section is highlighted with a green background, a border, and some padding to make it stand out.</p>
  </div>
  
  ---

  **3. Colored Quote Block**
  
  Emphasize quotes or important messages with a block style and colored left borde

  ```html
  <blockquote style="border-left: 4px solid #8e44ad; background-color: #f7f1ff; padding: 15px; margin: 10px 0;">
  <p style="color: #4a235a;">"Here is a highlighted quote or important message with a unique style."</p>
</blockquote>
  ```
  result below

<blockquote style="border-left: 4px solid #8e44ad; background-color: #f7f1ff; padding: 15px; margin: 10px 0;">
  <p style="color: #4a235a;">"Here is a highlighted quote or important message with a unique style."</p>
</blockquote>

---

**4. Centered Text with Decorative Style**

  Center text with a larger font size, bold style, and color.
  
  ```html
  <div style="text-align: center; font-size: 1.5em; font-weight: bold; color: #2980b9;">
  <p>This is centered, larger, and bold text with a custom color for emphasis.</p>
  </div>
  ```
  result below


  <div style="text-align: center; font-size: 1.5em; font-weight: bold; color: #2980b9;">
  <p>This is centered, larger, and bold text with a custom color for emphasis.</p>
  </div>

---

**5. Callout Box with Shadow and Gradient Background**

Create a callout box with a gradient background and shadow to make it "pop."

  ```html
  <div style="background: linear-gradient(to right, #ffecd2, #fcb69f); padding: 15px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
  <h3 style="color: #b03a2e;">Tip of the Day</h3>
  <p>Use gradients and shadows to create eye-catching highlights in your content!</p>
  </div>
  ```
  result below

  <div style="background: linear-gradient(to right, #ffecd2, #fcb69f); padding: 15px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
  <h3 style="color: #b03a2e;">Tip of the Day</h3>
  <p>Use gradients and shadows to create eye-catching highlights in your content!</p>
  </div>

---

**6. Badge or Label for Text**

Use a styled span element to create a badge that you can place inline with text.
  ```html
  <p>Get our latest updates: <span style="background-color: #3498db; color: white; padding: 3px 10px; border-radius: 12px; font-size: 0.9em;">New</span></p>
  ```
  result below

  <p>Get our latest updates: <span style="background-color: #3498db; color: white; padding: 3px 10px; border-radius: 12px; font-size: 0.9em;">New</span></p>

---

**7. Box with Border and Light Shadow for Emphasis**
   
  Create a simple box with a light border and shadow effect.
  ```html
    <div style="border: 1px solid #ccc; padding: 20px; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0,0,0,0.1);">
    <p>This is a separated section with a border and light shadow effect for emphasis.</p>
  </div>
  ```
  result below

  <div style="border: 1px solid #ccc; padding: 20px; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0,0,0,0.1);">
  <p>This is a separated section with a border and light shadow effect for emphasis.</p>
</div>
  
  ---