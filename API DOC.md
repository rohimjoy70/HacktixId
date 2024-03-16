# API Documentation

This is the API documentation for the AllController class.

## register

POST /api/v1/register

Creates a new user.

### Request Body

```json
{
  "id": "string",
  "email": "string",
  "password": "string"
}
```

### Response Body

```json
{
  "id": "string",
  "email": "string"
}
```

## login

POST /api/v1/login

Logs in an existing user.

### Request Body

```json
{
  "email": "string",
  "password": "string"
}
```

### Response Body

```json
{
  "message": "succes login ",
  "access_token": "string"
}
```

## getAllMovies

GET /api/v1/movies

Gets all movies.

### Response Body

```json
[
  {
    "id": 1,
    "title": "string",
    "description": "string",
    "image": "string",
    "trailer": "string",
    "genre": "string",
    "year": 1
  }
]
```

## addFavoriteMovie

POST /api/v1/movies/:movieId/add

Adds a movie to a user's watchlist.

### Parameters

`:movieId` - The ID of the movie to add.

### Response Body

```json
{
  "message": "Movie added to watchlist successfully"
}
```

## getAllWatchLists

GET /api/v1/watchlists

Gets a user's watchlists.

### Response Body

```json
[
  {
    "id": 1,
    "userId": 1,
    "movieId": 1,
    "title": "string",
    "description": "string",
    "image": "string",
    "trailer": "string",
    "genre": "string",
    "year": 1,
    "status": "watched"
  }
]
```

## updateWatchList

PUT /api/v1/watchlists/:id/update

Updates a user's watchlist status.

### Parameters

`:id` - The ID of the watchlist to update.

### Response Body

```json
{
  "message": "Watchlist updated successfully"
}