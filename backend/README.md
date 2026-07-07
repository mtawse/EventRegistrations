# Backend for HDR UK Events List

## Installation

```
composer install
composer run dev
```

## Features:

* Seeds to populate Events
* CORS rule on `/api` routes

## Routes

List events
```
GET /api/events
```

Fetch event
```
GET /api/events/:id
```

Register user
```
POST /api/events/:id/register
```

Unregister user
```
POST /api/events/:id/register
```