FROM node:22-alpine AS css
WORKDIR /site
COPY package.json ./
RUN npm install
COPY tailwind.config.js ./
COPY _tailwind ./_tailwind
COPY _layouts ./_layouts
COPY _includes ./_includes
COPY _posts ./_posts
COPY *.md ./
COPY assets ./assets
RUN npm run css:build

FROM ruby:4.0.7-slim

RUN apt-get update \
    && apt-get install --no-install-recommends -y build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /site
COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .
COPY --from=css /site/assets/css/tailwind.css ./assets/css/tailwind.css
EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--force_polling"]
