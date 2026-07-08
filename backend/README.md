# Backend for HDR UK Events List

Used to track number of user registrations at events

![Events List](./images/events-list.png)

## Installation

```
./install_and_run.sh
```

## Features:

* Local SQLite DB
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
POST /api/events/:id/unregister
```