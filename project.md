---
layout: page
title: Project
permalink: /project/
---

{% assign projects = site.posts | where: 'category', 'project' %}
<p class="mb-10 max-w-2xl text-lg leading-8 text-ink-600 dark:text-paper-200/75">Beberapa hal yang pernah saya buat, pelajari, atau ikut kerjakan.</p>
{% assign featured = projects | first %}
{% if featured %}
  <section class="mb-8 overflow-hidden rounded-[2rem] border border-ink-800 bg-ink-900 p-7 text-white shadow-soft dark:border-ink-800 dark:bg-ink-900 sm:p-10" aria-label="Project pilihan">
    <p class="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ember-400">Project pilihan</p>
    <div class="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
      <div><h2 class="font-serif text-3xl sm:text-4xl"><a class="transition hover:text-ember-400" href="{{ featured.url | relative_url }}">{{ featured.title | escape }}</a></h2>
        <p class="mt-4 max-w-2xl leading-7 text-paper-200/75">{{ featured.excerpt | strip_html | normalize_whitespace | truncate: 220 }}</p>
        {% if featured.tags.size > 0 %}<div class="mt-5 flex flex-wrap gap-2">{% for tag in featured.tags %}<span class="rounded-full border border-white/15 px-3 py-1 text-xs text-paper-100">{{ tag | escape }}</span>{% endfor %}</div>{% endif %}
      </div>
      <a class="inline-flex w-fit items-center rounded-full bg-paper-100 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-ember-400" href="{{ featured.url | relative_url }}">Lihat project <span class="ml-2" aria-hidden="true">↗</span></a>
    </div>
  </section>
{% endif %}
<div class="grid gap-4 md:grid-cols-2">
  {% for project in projects offset: 1 %}
    <article class="group flex min-h-56 flex-col rounded-3xl border border-paper-200 bg-white/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-ember-500/50 hover:shadow-soft dark:border-ink-800 dark:bg-ink-900/40">
      <p class="text-xs font-medium uppercase tracking-[0.16em] text-ink-500 dark:text-paper-200/55">{{ project.date | date: '%Y' }}</p>
      <h2 class="mt-3 font-serif text-2xl text-ink-950 dark:text-white"><a class="transition group-hover:text-ember-600 dark:group-hover:text-ember-400" href="{{ project.url | relative_url }}">{{ project.title | escape }}</a></h2>
      <p class="mt-3 flex-1 text-sm leading-7 text-ink-600 dark:text-paper-200/70">{{ project.excerpt | strip_html | normalize_whitespace | truncate: 160 }}</p>
      {% if project.tags.size > 0 %}<div class="mt-5 flex flex-wrap gap-2">{% for tag in project.tags %}<span class="rounded-full bg-paper-100 px-3 py-1 text-xs text-ink-700 dark:bg-ink-800 dark:text-paper-100">{{ tag | escape }}</span>{% endfor %}</div>{% endif %}
      <div class="mt-5 flex gap-4 text-sm">{% if project.demo_url %}<a class="font-medium text-ember-600 hover:underline dark:text-ember-400" href="{{ project.demo_url | escape }}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>{% endif %}{% if project.github_url %}<a class="font-medium text-ink-700 hover:text-ember-600 dark:text-paper-200 dark:hover:text-ember-400" href="{{ project.github_url | escape }}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>{% endif %}<a class="ml-auto text-ink-600 transition group-hover:text-ember-600 dark:text-paper-200/70 dark:group-hover:text-ember-400" href="{{ project.url | relative_url }}">Detail →</a></div>
    </article>
  {% endfor %}
</div>
