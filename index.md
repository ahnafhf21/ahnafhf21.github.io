---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div class="profile" markdown="1">
  <div class="profile-photo">
    <img class="avatar" src="assets/images/foto_square.png" alt="Ahnaf Hadi Fathulloh" />  
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

  <ul>
    {% for post in site.posts %}
      {% if post.category == 'blog' %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date_to_long_string }}
      </li>
      {% endif %}
    {% endfor %}
  </ul>

## Saya juga pernah terlibat dalam beberapa project lho ..
  <ul>
      {% for post in site.posts %}
        {% if post.category == 'project' %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
        {% endif %}
      {% endfor %}
    </ul>
</div>

<div class="sidebar" markdown="1">
## Sajak
  <ul>
    {% for post in site.posts %}
      {% if post.category == 'sajak' %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
      {% endif %}
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
