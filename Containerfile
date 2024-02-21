FROM ruby:3.2.3-bookworm

COPY . /app
WORKDIR /app

RUN bash -c '/app/assets/sh/convert.sh'

RUN bundle install

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
