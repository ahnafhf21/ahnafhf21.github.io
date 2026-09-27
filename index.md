---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div class="profile" markdown="1">
  <div class="profile-photo">
    <img class="avatar" src="{{ '/assets/images/foto_square.png' | relative_url }}" alt="Ahnaf Hadi Fathulloh" width="150" height="150" />
  </div>
  <div class="description" markdown="1">
# Halo, saya Ahnaf Hadi Fathulloh.
## Bukan seorang programmer, tapi suka belajar dan membuat sesuatu dengan pemrograman. Halaman ini adalah ruang bagi saya untuk berekspresi.
  </div>
</div>
<hr>


<div class="content">
<div class="blog-list" markdown="1">

## Blog

  {% comment %}Filter once instead of rescanning every post inside each loop.{% endcomment %}
  {% assign blog_posts = site.posts | where: "category", "blog" %}
  <ul>
    {% for post in blog_posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a> - <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date_to_long_string }}</time>
      </li>
    {% endfor %}
  </ul>

## Saya juga pernah terlibat dalam beberapa project lho ..
  {% assign project_posts = site.posts | where: "category", "project" %}
  <ul>
      {% for post in project_posts %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </li>
      {% endfor %}
    </ul>
</div>

<div class="sidebar" markdown="1">
## Sajak
  {% assign poem_posts = site.posts | where: "category", "sajak" %}
  <ul>
    {% for post in poem_posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </li>
    {% endfor %}
  </ul>
<!--## Buku
  <ul>
    {% for post in site.posts %}
      {% if post.category == 'buku' %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
-->
</div>
</div>
