FROM php:8.5-fpm-alpine

WORKDIR /var/www

RUN apk add --no-cache \
    curl \
    libpng-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    oniguruma-dev

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY . /var/www

RUN composer install --no-interaction --optimize-autoloader --no-dev

COPY docker-entrypoint.sh /usr/local/bin/run-app
RUN chmod +x /usr/local/bin/run-app

EXPOSE 9000

ENTRYPOINT ["run-app"]
CMD ["php-fpm"]
