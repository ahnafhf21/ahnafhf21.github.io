---
layout: default
description: Halo, saya Ahnaf Hadi Fathulloh. Catatan, karya, dan hal-hal yang sedang saya pelajari.
---

<section class="mb-20 grid items-center gap-10 sm:grid-cols-[1fr_auto] sm:gap-16">
  <div class="max-w-3xl">
    <p class="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-ember-600 dark:text-ember-400">Catatan personal & ruang berkarya</p>
    <h1 class="font-serif text-4xl leading-[1.12] tracking-tight text-ink-950 dark:text-white sm:text-6xl">Halo, saya Ahnaf Hadi Fathulloh.</h1>
    <p class="mt-6 max-w-2xl text-lg leading-8 text-ink-700 dark:text-paper-200">Seorang <i>tech enthusiast</i> yang saat ini sedang mendalami dunia ServiceNow, DevOps Engineering, dan AI Engineering. Halaman ini adalah ruang bagi saya untuk belajar, berbagi, bereksperimen, dan menuangkan hal-hal yang menarik perhatian saya.</p>
    <div class="mt-8 flex flex-wrap gap-3">
      <a href="{{ '/project/' | relative_url }}" class="rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-ember-600 dark:bg-paper-100 dark:text-ink-950 dark:hover:bg-ember-400">Lihat project <span aria-hidden="true">↗</span></a>
      <a href="{{ '/about/' | relative_url }}" class="rounded-full border border-paper-200 px-5 py-3 text-sm font-medium text-ink-800 transition hover:border-ember-500 dark:border-ink-800 dark:text-paper-100">Tentang saya</a>
    </div>
  </div>
  <img class="mx-auto h-36 w-36 rounded-full object-cover ring-8 ring-paper-100 shadow-soft dark:ring-ink-900 sm:h-48 sm:w-48" src="{{ '/assets/images/foto_square.png' | relative_url }}" alt="Ahnaf Hadi Fathulloh" width="192" height="192" fetchpriority="high">
</section>

{% assign blog_posts = site.posts | where: 'category', 'blog' %}
{% assign project_posts = site.posts | where: 'category', 'project' %}
{% assign poem_posts = site.posts | where: 'category', 'sajak' %}
<div class="grid gap-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(15rem,0.75fr)]">
  <section aria-labelledby="latest-writing">
    <div class="mb-6 flex items-end justify-between gap-4">
      <div><p class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ember-600 dark:text-ember-400">Tulisan terbaru</p><h2 id="latest-writing" class="font-serif text-3xl text-ink-950 dark:text-white">Dari blog</h2></div>
      <a class="text-sm font-medium text-ink-700 hover:text-ember-600 dark:text-paper-200 dark:hover:text-ember-400" href="{{ '/blog/' | relative_url }}">Semua tulisan ↗</a>
    </div>
    <div class="divide-y divide-paper-200 dark:divide-ink-800">
      {% for post in blog_posts limit: 4 %}
        <article class="py-5 first:pt-0">
          <p class="mb-2 text-xs text-ink-500 dark:text-paper-200/60"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%-d %B %Y' }}</time></p>
          <h3 class="font-serif text-xl leading-snug text-ink-950 dark:text-white"><a class="transition hover:text-ember-600 dark:hover:text-ember-400" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
          <p class="mt-2 text-sm leading-6 text-ink-600 dark:text-paper-200/70">{{ post.excerpt | strip_html | normalize_whitespace | truncate: 150 }}</p>
        </article>
      {% endfor %}
    </div>
  </section>
  <aside class="space-y-12">
    <section aria-labelledby="selected-projects">
      <div class="mb-5 flex items-end justify-between gap-3"><h2 id="selected-projects" class="font-serif text-2xl text-ink-950 dark:text-white">Project</h2><a class="text-xs font-medium text-ember-600 dark:text-ember-400" href="{{ '/project/' | relative_url }}">Semua ↗</a></div>
      {% for post in project_posts limit: 3 %}
        <a href="{{ post.url | relative_url }}" class="group mb-3 block rounded-2xl border border-paper-200 bg-white/60 p-5 transition hover:-translate-y-0.5 hover:border-ember-500/50 hover:shadow-soft dark:border-ink-800 dark:bg-ink-900/60">
          <h3 class="font-semibold text-ink-950 group-hover:text-ember-600 dark:text-white dark:group-hover:text-ember-400">{{ post.title | escape }}</h3>
          <p class="mt-2 text-sm leading-6 text-ink-600 dark:text-paper-200/70">{{ post.excerpt | strip_html | normalize_whitespace | truncate: 105 }}</p>
          <span class="mt-3 inline-block text-xs text-ember-600 dark:text-ember-400">Jelajahi project ↗</span>
        </a>
      {% endfor %}
    </section>
    <section aria-labelledby="poems">
      <div class="mb-4 flex items-end justify-between gap-3"><h2 id="poems" class="font-serif text-2xl text-ink-950 dark:text-white">Sajak</h2><a class="text-xs font-medium text-ember-600 dark:text-ember-400" href="{{ '/sajak/' | relative_url }}">Semua ↗</a></div>
      {% for post in poem_posts limit: 4 %}<a class="group block border-t border-paper-200 py-3 font-serif text-lg text-ink-800 transition hover:text-ember-600 dark:border-ink-800 dark:text-paper-100 dark:hover:text-ember-400" href="{{ post.url | relative_url }}">{{ post.title | escape }} <span class="float-right font-sans text-sm">↗</span></a>{% endfor %}
    </section>
  </aside>
</div>
