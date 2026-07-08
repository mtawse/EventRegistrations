composer install
npm install && npm run build
touch database/database.sqlite
php artisan migrate
php artisan db:seed
composer run dev
