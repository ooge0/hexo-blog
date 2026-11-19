---
title: HEXIO.IO fixes guide
layout: post
categories: 
    - Tutorials
tags: 
    - hexo_io
    - blog
    - tutorial
permalink: /hexo.io_fixes_guide/
---

For making changes in blog design check that:
   - default configuration of HEXO.IO is not changed (You installed everythong from initial command from [Hexo `Setup`](https://hexo.io/docs/setup) page;
   - you made copy of original project;
   - be ready to install some additional plugins that cna be oudiated or required additionla configurations

---
**TOC**
[1. Moving side panel to the left side.](#1-Moving-side-panel-to-the-left-side)
[2. Removing(hide) `Search` form on the header](#2-Removing-hide-Search-form-on-the-header)
[3. Changes project structure. If blog published not iun the root of GitHub](#3-Changes-project-structure-If-blog-published-not-iun-the-root-of-GitHub)
[4. Sitemap for the blog.  ](#4-Sitemap-for-the-blog)
[5. Add HEXO.IO version details to the footer](#5-Add-HEXO-IO-version-details-to-the-footer)
[6. Search option (internal HEXO.IO feature)](#6-Search-option-internal-HEXO-IO-feature)
[7. Managing (publishing) several projects from the same local machine (GitHub access + token issues)](#7-Managing-publishing-several-projects-from-the-same-local-machine-GitHub-access-token-issues)
[8. Pagination issue after deploying on GitHub pages](#8-Pagination-issue-after-deploying-on-GitHub-pages)

Below  is a list of changes and improvements.

## 1. Moving side panel to the left side.
   
   Moving side panel to the left side required editing `\themes\landscape\_config.yml` and add `sidebar: left`

## 2. Removing(hide) `Search` form on the header
   For hiding 'Search' form from the header bar, 
   1. open `\themes\landscape\layout\_partial\header.ejs` (it works if `theme` is `landscape` (It was not chekced on default `theme`!!!)
   2. comment  linesin two places:
      1. 1st
           ```css
          <a class="nav-icon nav-search-btn" title="<%= __('search') %>"><span class="fa fa-search"></span></a>
          ```
      2. and 2nd
          ```css
          <%- search_form({button: '&#xF002;', text: __('search')}) %> 
          ```
---

## 3. Changes project structure. If blog published not iun the root of GitHub
   
 If HEXO.IO project will be publoished not in teh root of GitHub , the _comfig.yaml should be updated. 
 
 Aftrer changes the project structure and making different folders inside the `_post` folder the blog navigation may not work. 
 Issue is related to at least to sides:
    1. When post item has dedicated `permalink`, project ingine for some reason (if post published no wtih `root`) conflict of 

---

## 4. Sitemap for the blog.
   * **Install the Sitemap Plugin**

        In your Hexo project directory, run the following command to install hexo-generator-sitemap:

        ```bash
        npm install hexo-generator-sitemap --save
        ```

        This will add the sitemap generator plugin to your project, which automatically generates a sitemap.xml file each time you build your site.

   * **Configure _config.yml**
    
        Open your Hexo `_config.yml` file (this is the main configuration file in the root directory, not in the theme folder), and add the following configuration under the sitemap settings:

        ```yaml
        sitemap:
            path: sitemap.xml
        ```
        By default, this will create a sitemap.xml file in the root of your site’s output (public/) directory.

   * **(Optional) Add the Sitemap URL to robots.txt**
    
        To help search engines find your sitemap, add its URL to a robots.txt file if you haven’t done so already. Here’s how:

        If you already have a robots.txt file configured, just add this line to it:

        ```plaintext
        Sitemap: https://your-hexo-site.com/sitemap.xml
        ```
        If you don't have a robots.txt file, you can create one in source/robots.txt, and then add the line above with your site URL.

   * **Generate and Deploy**
    
        Run the following commands to generate your site and deploy it:

        ```
        bash
        hexo clean ; hexo generate ;hexo deploy
        ```
        After deploying, your sitemap should be accessible at https://your-hexo-site.com/sitemap.xml.

   * **Verifying the Sitemap**
    
        Visit https://your-hexo-site.com/sitemap.xml in your browser to confirm the sitemap is generated and accessible.
        Submit your sitemap to Google Search Console or other search engine webmaster tools for better indexing.

---

## 5. Add HEXO.IO version details to the footer

1. Create or edit a file in your theme's scripts directory, such as `hexo_info.js`, for getting hexo verion details:
   ```js
     const { execSync } = require('child_process');

     hexo.extend.helper.register('hexoVersion', function () {
     const { version } = require('hexo/package.json');
     return version;
     });

     hexo.extend.helper.register('hexoClient', function () {
     try {
     const output = execSync('hexo --version', { encoding: 'utf8' });
     const match = output.match(/hexo-cli: (\d+\.\d+\.\d+)/);
     return match ? match[1] : 'Unknown';
     } catch (error) {
     return 'Error retrieving CLI version';
     }
     });
   ```
2. Create ejs file where function retrives existing HEXO.IO details like HEXO.IO version and hexo-client version
     ```js
     <div id="footer-info" class="inner">
     &copy; <%= date(new Date(), 'YYYY') %> <%= config.author || config.title %><br>
     <%= __('powered_by') %> <a href="https://hexo.io/" target="_blank">Hexo</a> (v<%= hexoVersion() %>)<br>
     Hexo CLI: <%= hexoClient() %>
     </div>
     ``` 
---

## 6. Search option (internal HEXO.IO feature)

1. Option-1 (Search option was not possible to configure by these steps)
   Use script 
     ```bash
     npm i -S hexo-generator-search hexo-generator-feed hexo-renderer-less hexo-autoprefixer hexo-generator-json-content hexo-recommended-posts
     ```
      * hexo-generator-search
          https://github.com/wzpan/hexo-generator-search
               ```
               $ npm install hexo-generator-search --save
               ```
      hexo-generator-feed 
      hexo-renderer-less 
      hexo-autoprefixer 
      hexo-generator-json-content 
      hexo-recommended-posts
---

## 7. Managing (publishing) several projects from the same local machine (GitHub access + token issues)
To publish a new Hexo blog to a different GitHub account, you need to configure the deployment settings correctly and ensure the required deployer plugin is installed. Follow these steps:

1. Install the Git Deployer Plugin. 
   Hexo uses plugins for deployment. Install the required plugin:
          ```bash
          npm install hexo-deployer-git --save
          ```

1. Update _config.yml for Deployment
Edit the main _config.yml file in your Hexo project directory to include deployment settings for the target GitHub account. Use the following structure:
     ```yaml
     deploy:
     type: git
     repo: https://<username>:<personal_access_token>@github.com/<username>/<repository_name>.git
     branch: main
     ```
   1. Replace <username> with the GitHub username for the new account.
   2. Replace <personal_access_token> with a Personal Access Token (PAT) for authentication.
   3. Replace <repository_name> with the name of the repository where you want to publish the blog.
   4. Replace main with the default branch of your repository, if different.

***Notes:***
You can create a Personal Access Token from the new GitHub account under Settings > Developer settings > Personal Access Tokens.
Use https for authentication to simplify the setup.

3. Initialize the Deployment Repository
If you haven’t already, initialize a repository for the new GitHub account:
   1. Log in to the new GitHub account.
   2. Create a new repository for your blog.
   3. Copy the repository URL and ensure it matches what you've configured in _config.yml.

4. Deploy the Blog
Run the following command to generate the site and deploy it to the new GitHub repository:

     ```bash
     hexo clean
     hexo generate
     hexo deploy
     ```

---

## 8. Pagination issue after deploying on GitHub pages

Pagination of hexo.io blog works fine on localhost but not working after deploy on GitHub pages.
http://localhost:4000/hexo-blog/categories/Posts/_posts/2/ works fine, page opens with content
https://ooge0.github.io/hexo-blog/categories/Posts/_posts/2/ shows that page not found

*Helpful Resources*
1. [Hexo Documentation - Pagination](https://hexo.io/docs/configuration#Pagination)

Solutions:

1. Enable Pretty URLs. Ensure that Hexo generates an index.html file for each page in the pagination. In Hexo, this can be achieved by enabling the proper permalink structure.
In the main `_config.yml`, check or add the following:

     ```yaml
     permalink: :categories/:title/
     pretty_urls:
     trailing_index: false
     trailing_html: false
     ```
This generates URLs like /categories/Posts/_posts/2/ and ensures that an index.html is created in the corresponding folder.

In my case permalink section in `_config.yml` was
     ```yaml
     permalink: :year/:month/:day/:title/
     pretty_urls:
     trailing_index: false
     trailing_html: false
     ```
After changes `_config.yml` became
     ```yaml
     permalink: :categories/:title/
     pretty_urls:
     trailing_index: false
     trailing_html: false
     ```


**Result:**
- On localhost pagination is working 
- On GitHub pages **pagination still not working**

1. Change  pagination_dir from `pagination_dir: _posts` to `pagination_dir: Posts` in `_config.yml`
**Result:**
- On localhost pagination is working 
- On GitHub pages **pagination still not working**

**Resoluiton**
Pagination issue was related to extending of structure of HEXO project. Nested folder inside the `_post` folder brakes pagination only on remote host. In this case created individual folders for posts that are related to different topics produces internal conflict of generated by HEXO.IO engine documents that can possible resolve to add the name of the additionally created folder where messages are stored. For this project was created additionally several individual folders , but HEXO accept to use all posts by adding just one name of folder. In this case `Posts`


HEXO.IO footnotes 
To use footnotes in format 
```
[^1]: footnote #1
[^2]: footnote #2
[^3]: footnote #3
```
You just have to install the package with

```bash
npm install hexo-footnotes --save
```

If Hexo detect automatically all plugins, that's all.

If that is not the case, register the plugin in your _config.yml file :

```bash
plugins:
  - hexo-footnotes
```