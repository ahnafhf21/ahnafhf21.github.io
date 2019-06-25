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
## Bukan seorang programmer, tapi suka belajar dan membuat sesuatu dengan pemrograman.
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
        <h3 style="display:inline;"><a href="{{ post.url }}">{{ post.title }}</a></h3> - {{ post.date | date_to_long_string }}
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>

<div class="sidebar" markdown="1">
## Buku

  <ul>
    {% for post in site.posts %}
      {% if post.category == 'buku' %}
      <li>
        <h3 style="display:inline;"><a href="{{ post.url }}">{{ post.title }}</a></h3>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>
</div>
