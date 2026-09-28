---
layout: page
title: Blog
permalink: /blog/
---

{% assign posts = site.posts | where: 'category', 'blog' %}
<section class="max-w-3xl" aria-label="Daftar tulisan blog">
  <p class="mb-10 text-lg leading-8 text-ink-600 dark:text-paper-200/75">Catatan perjalanan, buku, dan hal-hal yang menarik perhatian saya.</p>
  <div class="divide-y divide-paper-200 dark:divide-ink-800">
    {% for post in posts %}
      <article class="py-7 first:pt-0">
        <div class="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-500 dark:text-paper-200/60">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%-d %B %Y' }}</time>
          <span aria-hidden="true">·</span><span>{{ post.content | number_of_words | divided_by: 200 | plus: 1 }} menit baca</span>
          {% for tag in post.tags limit: 2 %}<span class="rounded-full bg-paper-100 px-2.5 py-1 text-ink-700 dark:bg-ink-900 dark:text-paper-200">{{ tag | escape }}</span>{% endfor %}
        </div>
        <h2 class="font-serif text-2xl leading-tight text-ink-950 dark:text-white"><a class="transition hover:text-ember-600 dark:hover:text-ember-400" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
        <p class="mt-3 text-sm leading-7 text-ink-600 dark:text-paper-200/75">{{ post.excerpt | strip_html | normalize_whitespace | truncate: 220 }}</p>
        <a class="mt-4 inline-flex text-sm font-medium text-ember-600 hover:text-ember-500 dark:text-ember-400" href="{{ post.url | relative_url }}">Lanjut membaca <span class="ml-2" aria-hidden="true">→</span></a>
      </article>
    {% endfor %}
  </div>
</section>
