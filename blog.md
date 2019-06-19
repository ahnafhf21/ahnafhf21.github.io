---
layout: default
title: Blog
permalink: /blog/
---


  <ul>
    {% for post in site.posts %}
      {% if post.category == 'blog' %}
      <li>
        <h3 style="display:inline;"><a href="{{ post.url }}">{{ post.title }}</a></h3> - {{ post.date | date_to_long_string }}
      </li>
      {% endif %}
    {% endfor %}
  </ul>
