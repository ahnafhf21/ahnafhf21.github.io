---
layout: default
title: Sajak
permalink: /sajak/
---
  <ul>
    {% for post in site.posts %}
      {% if post.category == 'sajak' %}
      <li>
        <h3 style="display:inline;"><a href="{{ post.url }}">{{ post.title }}</a></h3>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
