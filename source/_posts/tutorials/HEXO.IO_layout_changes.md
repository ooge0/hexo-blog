---
title: HEXIO.IO layout improvements
layout: post
permalink: /hexo-layout-improvements/
categories: 
    - Tutorials
tags: 
    - hexo_io
    - blog
    - tutorial
---

**Table of content**
- [Decreasing size of main body area](#decreasing-size-of-main-body-area)
    - [changes-1](#changes-1)
  - [changes-2](#changes-2)
- [sub-nav issue with Search form](#sub-nav-issue-with-search-form)
- [If changes leads to broken portraite view for mobile devices .](#if-changes-leads-to-broken-portraite-view-for-mobile-devices-)
- [Adding footnotes](#adding-footnotes)
  - [Show some number of tags in the 'Tag' section.](#show-some-number-of-tags-in-the-tag-section)

---

## Decreasing size of main body area
header-inner (section that contains elements of navigation menu)

Edited file `\themes\landscape\source\css\_partial\header.styl`

Before changes #header-inner
```css
#header-inner
  position: relative
  overflow: hidden
```

Before changes $nav-link

```css
$nav-link {
  float: left;
  color: #312602;
  opacity: 0.6;
  text-decoration: none;
  text-shadow: 
    -1px -1px 0 #ff7f50,  // Top-left shadow
    1px -1px 0 #ff7f50,   // Top-right shadow
    -1px 1px 0 #ff7f50,   // Bottom-left shadow
    1px 1px 0 #ff7f50,    // Bottom-right shadow
    1px 1px 2px rgba(0, 0, 0, 0.4); // Original shadow for depth

  transition: opacity 0.2s;
  display: block;
  padding: 20px 15px;

  &:hover {
    opacity: 1;
  }
}
```

#### changes-1

After changes-1 #header-inner
```css
#header-inner {
  position: absolute;
  bottom: 0; // Move to the bottom of the parent section
  left: 0; // Align to the left if needed
  width: 80%; // Ensure it spans the width of the parent section
  overflow: hidden;
}
```
Links on the nav bar are not possible to click

### changes-2
After changes-2 #header-inner
```css
#header-inner {
  position: absolute;
  bottom: 0; // Move to the bottom of the parent section
  left: 0;   // Align to the left if needed
  width: 80%; // Ensure it spans the width of the parent section
  z-index: 10; // Ensure it is above other elements
}

```

and 

After changes-2 $nav-link

```css
$nav-link {
  float: left;
  color: #312602;
  opacity: 0.6;
  text-decoration: none;
  text-shadow: 
    -1px -1px 0 #ff7f50,   // Top-left shadow
    1px -1px 0 #ff7f50,    // Top-right shadow
    -1px 1px 0 #ff7f50,    // Bottom-left shadow
    1px 1px 0 #ff7f50,     // Bottom-right shadow
    1px 1px 2px rgba(0, 0, 0, 0.4); // Original shadow for depth

  transition: opacity 0.2s;
  display: block;
  padding: 20px 15px;
  position: relative; // Ensures correct stacking within #header-inner

  &:hover {
    opacity: 1;
    cursor: pointer; // Ensures pointer cursor on hover
  }
}
```

nav-bar fixed and works fine for desktop and mobile view.

## sub-nav issue with Search form

Layout of Search form is shifted for mobile devices.
File `\themes\landscape\source\css\_partial\header.styl`
should be changed

Before changes-1 header.styl 

```css

#sub-nav
  float: right
  margin-right: -15px

#search-form-wrap
  position: absolute
  top: 15px
  width: 150px
  height: 30px
  right: -150px
  opacity: 0
  transition: 0.2s ease-out
  &.on
    opacity: 1
    right: 0
  @media mq-mobile
    width: 100%
    right: -100%

.search-form
  position: absolute
  top: 0
  left: 0
  right: 0
  background: #fff
  padding: 5px 15px
  border-radius: 15px
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)

.search-form-input
  border: none
  background: none
  color: color-default
  width: 100%
  font: 13px font-sans
  outline: none
  &::-webkit-search-results-decoration
  &::-webkit-search-cancel-button
    -webkit-appearance: none

.search-form-submit
  position: absolute
  top: 50%
  right: 10px
  margin-top: -7px
  font: 13px font-icon
  border: none
  background: none
  color: #bbb
  cursor: pointer
  &:hover, &:focus
    color: #777
```

after changes-1

```css
#sub-nav {
  float: right;
  margin-right: -15px;
}

#search-form-wrap {
  position: fixed; // Fixes it to the viewport, not affecting layout
  top: 15px;
  right: -200px; // Initially off-screen
  width: 150px;
  height: 30px;
  opacity: 0;
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;

  &.on {
    opacity: 1;
    transform: translateX(-200px); // Slide into view when activated
  }

  @media (max-width: 600px) { // Adjust for mobile screens
    width: 100vw;
    right: 0;
    transform: none; // Keep it fixed in place for small screens
    opacity: 1; // Keep it visible and responsive
  }
}

.search-form {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 5px 15px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.search-form-input {
  border: none;
  background: none;
  color: #312602;
  width: 100%;
  font: 13px sans-serif;
  outline: none;
}

.search-form-submit {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%); // Center vertically within input
  font: 13px sans-serif;
  border: none;
  background: none;
  color: #bbb;
  cursor: pointer;
  
  &:hover, &:focus {
    color: #777;
  }
}

```

## If changes leads to broken portraite view for mobile devices . 

Input form for the search overlap the menu button.

Changes-3
Before editing `\themes\landscape\source\css\style.styl`

```css
.mobile-nav-on
  overflow: hidden
```

Before editing `\themes\landscape\source\css\_partial\header.styl`
```css
#search-form-wrap {
  position: fixed; // Fixes it to the viewport, not affecting layout
  top: 210px;
  right: -200px; // Initially off-screen
  width: 150px;
  height: 30px;
  opacity: 0;
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;

  &.on {
    opacity: 1;
    transform: translateX(-200px); // Slide into view when activated
  }

  @media (max-width: 600px) { // Adjust for mobile screens
    width: 70vw;
    right: 0;
    transform: none; // Keep it fixed in place for small screens
    opacity: 1; // Keep it visible and responsive
  }
}
```

After editing `\themes\landscape\source\css\style.styl`

```css
.mobile-nav-on #search-form-wrap {
  opacity: 0; // Hide the search form when the mobile nav is open
  transform: translateX(-200px); // Keep it off-screen
  transition: opacity 0.2s ease-out, transform 0.2s ease-out; // Smooth transition
}
```

After editing ``
```css
#search-form-wrap {
  position: fixed; // Fixes it to the viewport, not affecting layout
  top: 210px; // Set the vertical position from the top
  right: -200px; // Initially off-screen
  width: 150px; // Width for desktop view
  height: 30px; // Fixed height
  opacity: 0; // Hidden by default
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;

  &.on {
    opacity: 1; // Fully visible when active
    transform: translateX(-200px); // Slide into view when activated
  }

  @media (max-width: 600px) { // General mobile styles
    width: 70vw; // Adjust width for mobile view
    right: 0; // Align to the right of the viewport
    transform: none; // Keep it fixed in place for small screens
    opacity: 1; // Keep it visible and responsive
  }

  @media (orientation: landscape) and (max-width: 600px) { // Styles for landscape mode on mobile
    width: 210vw; // Adjust width for landscape orientation
    top: 180px; // Adjust top position for landscape view
    right: -50%; // Start off-screen to the left by half the viewport width
    transition: transform 0.2s ease-out, opacity 0.2s ease-out; // Ensure smooth transition

    &.on {
      transform: translateX(50%); // Slide into view from left
    }
  }
}
```

## Adding footnotes

Use hexo-reference Plugin for Enhanced Linking
Install hexo-reference: This plugin improves link handling within Markdown files, including footnotes and internal references.

Run this command to install it:

```bash
npm install hexo-reference --save
```

Update `_config.yml`: Configure hexo-reference in your Hexo `_config.yml` file to enable the plugin.

Add this to your `_config.yml` file:

```yaml
# _config.yml
plugins:
  - hexo-reference
```
Use Links in Markdown: Now, you can use standard anchor links or footnotes, and hexo-reference will convert them to work correctly on the site. Update your Markdown file like this:

```markdown

**Favorite list**

[Takedown](#Favorite-items)

## Favorite items
```

Generate and Deploy: After setting up, rebuild and deploy your project:

```bash
hexo clean
hexo generate
hexo deploy
```
or 

```bash
hexo clean; hexo generate; hexo serve
```

### Show some number of tags in the 'Tag' section.

Before changes of content of `themes\landscape\layout\_widget\tag.ejs` file was

```css
<% if (site.tags.length){ %>
  <div class="widget-wrap">
    <h3 class="widget-title"><%= __('tags') %></h3>
    <div class="widget">
      <%- list_tags({show_count: theme.show_count}) %>
    </div>
  </div>
<% } %>
```
and 
<img src="/hexo-blog/images/hexo.io_changes_editing_tag_section_on_ui__before_changes.png" alt="hexo.editing tag section on UI before changes">

after changes of content of `themes\landscape\layout\_widget\tag.ejs` file 'Tags' section shows 10 tags only

  ```css
    <% if (site.tags.length){ %>
      <div class="widget-wrap">
        <h3 class="widget-title"><%= __('tags') %></h3>
        <div class="widget">
            <% site.tags.sort('name').limit(10).each(function(tag) { %>
        <li>
          <a href="<%= url_for(tag.path) %>"><%= tag.name %> (<%= tag.length %>)</a>
        </li>
      <% }); %>
        </div>
      </div>
    <% } %>
  ```
and 


<img src="/hexo-blog/images/hexo.io_changes_editing_tag_section_on_ui__after_changes.png" alt="hexo.editing tag section on UI after changes">

Turn on/off `Tags` is possible in `_config.yml`, 

  ```
  widgets:
    - tag
  ```
