---
layout: page
title: Sajak
permalink: /sajak/
---

<section class="relative isolate overflow-hidden rounded-[2rem] border border-paper-200 bg-paper-100/70 px-6 py-10 dark:border-ink-800 dark:bg-ink-900/50 sm:px-10 sm:py-14" aria-label="Kumpulan sajak">
  <div class="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-ember-500/10 blur-3xl"></div>
  <p class="mb-8 text-center text-xs font-semibold uppercase tracking-[0.24em] text-ember-600 dark:text-ember-400">Ruang sunyi</p>
  <div class="mx-auto grid max-w-3xl gap-x-12 sm:grid-cols-2">
    {% assign poems = site.posts | where: 'category', 'sajak' %}
    {% for poem in poems %}
      <a class="group border-t border-paper-200 py-5 dark:border-ink-800" href="{{ poem.url | relative_url }}">
        <span class="mb-2 block text-xs text-ink-500 dark:text-paper-200/55">{{ poem.date | date: '%Y' }}</span>
        <span class="font-serif text-xl text-ink-900 transition group-hover:text-ember-600 dark:text-paper-100 dark:group-hover:text-ember-400">{{ poem.title | escape }}</span>
        <span class="float-right text-sm text-ember-600 dark:text-ember-400" aria-hidden="true">↗</span>
      </a>
    {% endfor %}
  </div>
</section>
