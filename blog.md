---
layout: default
title: Blog
permalink: /blog/
---


  {% assign posts = site.posts | where: "category", "blog" %}
  <ul>
    {% for post in posts %}
      <li>
        <h2 class="post-link"><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2> - <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date_to_long_string }}</time>
      </li>
    {% endfor %}
  </ul>
