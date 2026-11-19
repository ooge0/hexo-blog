---
title: Sitemap
date: 2024-11-01 12:00:00
layout: sitemap  # Ensure you're using the correct layout
---

<h1>Sitemap</h1>
<h2>Posts</h2>
<ul>
    <% page.posts.each(function(post){ %>
    <li>
        <a href="<%= post.permalink %>"><%= post.title %></a>
    </li>
    <% }); %>
</ul>

<h2>Categories</h2>
<ul>
    <% page.categories.each(function(category){ %>
    <li>
        <a href="<%= category.permalink %>"><%= category.name %></a>
        <ul>
        <% category.posts.each(function(post){ %>
            <li>
                <a href="<%= post.permalink %>"><%= post.title %></a>
            </li>
        <% }); %>
        </ul>
    </li>
    <% }); %>
</ul>
