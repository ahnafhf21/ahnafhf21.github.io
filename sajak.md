---
layout: default
title: Sajak
permalink: /sajak/
---
  {% assign posts = site.posts | where: "category", "sajak" %}
  <ul>
    {% for post in posts %}
      <li>
        <h2 class="post-link"><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
      </li>
    {% endfor %}
  </ul>
