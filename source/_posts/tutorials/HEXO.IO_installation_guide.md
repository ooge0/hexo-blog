---
title: HEXIO.IO instalation guide
layout: post
categories: 
    - Tutorials
tags: 
    - hexo_io
    - blog
    - tutorial
---

## Make HEXO.IO blog
* https://hexo.io/ -A fast, simple & powerful blog framework
### **Install Hexo**

To get started with Hexo, ensure you have **Node.js** and **Git** installed on your machine. Then follow these steps:

#### **Install Hexo CLI**

```bash
npm install -g hexo-cli
```	

#### **Create a New Hexo Project**

```bash
hexo init blog cd my-blog npm install
```

#### **Start the Local Server**

```bash
hexo server
```

Visit `http://localhost:4000` to see your Hexo blog locally.

---

### **2. Publish the Blog on GitHub Pages**

#### **Set Up a GitHub Repository**

1. Create a new repository on GitHub named `yourusername.github.io`.
2. Clone the repository locally:


```bash
git clone https://github.com/yourusername/yourusername.github.io
```

#### **Configure Deployment in Hexo**

1. Open your Hexo project.
2. Install the deployment tool:
```bash
npm install hexo-deployer-git --save
```

3. Open the `_config.yml` file in the root of your Hexo project.
4. Add the following lines for deployment configuration:

```yaml
deploy:
  type: git
  repo: https://github.com/yourusername/yourusername.github.io.git
  branch: main  # Use 'master' for older repositories
```

#### **Generate Static Files and Deploy**
```bash
hexo generate 
hexo deploy
```

Your blog will now be live at `https://yourusername.github.io`.

---

### **3. Customizing Hexo Layout**

Hexo uses themes to define the layout. You can use an existing theme or customize your own.

#### **Change or Install a Theme**

1. Browse [Hexo Themes](https://hexo.io/themes/).
2. Install the theme:
```bash
git clone https://github.com/theme-name/theme.git themes/theme-name`
```

3. Update the `_config.yml` file to use the new theme:


```yaml
theme: theme-name
```

#### **Customize the Layout**

Hexo themes are built using **EJS**, **Swig**, or **Pug** templating engines. You can modify these template files in the theme's `layout` folder to adjust the HTML structure, styles, and other customizations.

If you want to add a **left side panel** with a **menu**, you’ll need to modify the `layout/_partial/sidebar.ejs` (or similar) file in the theme folder.

---

### **4. Add a Left Side Panel and Menu**

#### **Create the Left Sidebar**

1. Edit the theme’s `layout` file that contains the sidebar (e.g., `layout/_partial/sidebar.ejs`).
2. Add the following menu HTML structure:
```html
<div class="sidebar">
    <ul class="menu">
        <li><a href="/posts">My Posts</a></li>
        <li><a href="/notes">My Notes</a></li>
        <li><a href="/stats">My Stats</a></li>
        <li><a href="/tags">Tags</a></li>
    </ul>
</div>

```
#### **Customize Styles for the Sidebar**

In your theme’s `source/css/style.css` (or similar stylesheet), add custom CSS to style the sidebar:

```css
.sidebar {
    position: fixed;
    width: 250px;
    height: 100%;
    background-color: #f4f4f4;
    overflow-y: auto;
}

.menu {
    list-style-type: none;
    padding: 0;
}

.menu li {
    margin: 15px 0;
}

.menu li a {
    text-decoration: none;
    color: #333;
}
```
---
### **5. Add Pages for Menu Items**

#### **Create Pages for Custom Sections**

For each menu item (e.g., "My Posts", "My Notes"), create corresponding pages:
```bash
hexo new page "posts" hexo new page "notes" hexo new page "stats" hexo new page "tags"
```

Each of these commands will create a new `.md` file in the `source` folder. You can edit them to include content specific to that section.
#### **Add Tag Listing Page**

Hexo automatically supports tag pages, but you can enhance it. Ensure you have a `tags` page by running:

```bash
hexo new page "tags"
```

In `source/tags/index.md`, add:

```yaml
---
title: Tags
layout: tags
---
```

---

### **6. Main Panel with Scroll Bar**

To ensure that your posts have a scrollable main content area, adjust the CSS for the main content area in your theme’s stylesheet (usually `source/css/style.css`).

```css
.main-panel {
    margin-left: 260px;  /* Account for sidebar */
    overflow-y: scroll;
}
```


Ensure that your theme’s HTML structure assigns the `main-panel` class to the main content area.

---

### **7. Main Configuration Options in Hexo**

In Hexo’s `_config.yml` file, you can customize many aspects of your site. Here are some of the most common settings:


```yaml
# Site
title: My Blog
subtitle: My Blog Subtitle
description: A blog about my personal projects.
author: Your Name
language: en

# URL Configuration
url: https://yourusername.github.io
root: /
permalink: :year/:month/:day/:title/

# Deployment
deploy:
  type: git
  repo: https://github.com/yourusername/yourusername.github.io.git
  branch: main

# Plugins
plugins:
  - hexo-generator-tag
  - hexo-generator-archive
  - hexo-deployer-git

```
---
### **8. Table of Hexo Features**

| **Feature**                 | **Description**                                                   |
| --------------------------- | ----------------------------------------------------------------- |
| **Static Site Generator**   | Generates static HTML files for fast performance.                 |
| **Markdown Support**        | Write posts in Markdown for easy formatting.                      |
| **Themes & Customization**  | Use pre-built themes or create your own.                          |
| **Plugins**                 | Extend functionality with various plugins (e.g., tags, archives). |
| **Tag System**              | Organize posts with a powerful tag system.                        |
| **SEO Friendly**            | Built-in SEO optimization features.                               |
| **Deployment**              | One-click deployment to GitHub, GitLab, or custom servers.        |
| **Drafts**                  | Manage drafts and publish them later.                             |
| **Multi-language Support**  | Write blog in multiple languages.                                |
| **Extensible with Plugins** | Add analytics, social media sharing, and more via plugins.        |
## import existing Markdown (.md) and HTML files into Hexo

## HEXO.IO commands

hexo clean + generate + hexo

```bash
hexo clean; hexo generate; hexo serve
```


## TOC
https://github.com/bubkoo/hexo-toc
https://github.com/bennycode/hexo-insert-toc


## HEXO + Markdown
* hexo-renderer-markdown-it
  * This renderer plugin uses Markdown-it as a render engine on Hexo. Adds support for Markdown and CommonMark.
  * [https://github.com/hexojs/hexo-renderer-markdown-it](https://github.com/hexojs/hexo-renderer-markdown-it)


## Other resources
* [xlog.wangyunzi.com | My Blog Building Journey - Hexo](https://xlog.wangyunzi.com/3?locale=en)