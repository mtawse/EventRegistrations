#!/bin/sh
set -e

# Wait for MySQL to be ready
echo "Waiting for database connection..."
until nc -z -v -w30 mysql 3306; do
  echo "Database is unavailable - sleeping"
  sleep 2
done

echo "Database is up - executing migrations"

# Run Laravel commands
php artisan migrate --force
php artisan db:seed --force

# Execute the main container command (php-fpm)
exec "$@"
