# ahnafhf21.github.io

Personal website built with Jekyll and Tailwind CSS.

## Build locally

Install the versions from `.ruby-version` and `package.json`, then run:

```sh
bundle install
npm install
npm run build
```

The generated site is written to `_site/`.

## Deploy with Cloudflare Pages

Connect this repository in **Workers & Pages > Create application > Pages > Import an existing Git repository**. Configure:

- Build command: `npm run build`
- Build output directory: `_site`
- Environment variable `RUBY_VERSION`: `4.0.7` (for both production and preview builds)

Cloudflare Pages will build the site for each commit and create preview deployments for pull requests.

## Deploy as a Cloudflare Worker

The included `wrangler.jsonc` serves the generated Jekyll site as Worker static assets, including the custom `404.html`. Authenticate Wrangler once with `npx wrangler login`, then run:

```sh
npm run deploy:worker
```

When deploying through **Workers Builds**, configure the Worker under **Settings > Build** with:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

The build command must run before Wrangler deploys, because it creates the `_site/` directory configured as the Worker’s assets directory. Alternatively, use `npm run deploy:worker` as the deploy command and leave the build command empty; that script builds the site before deploying it.

To preview the built site locally with the Workers runtime, run `npm run dev:worker`. The Worker name is set in `wrangler.jsonc`; change it there if you want a different `workers.dev` hostname.
