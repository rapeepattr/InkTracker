
# InkTrack : Reading Tracker

This is a full-featured web application for tracking personal reading progress. It includes complete CRUD functionality, user registration and login with JWT-based authentication, and real-time integration with a MySQL database via API.


## API Reference

#### Get all books

```http
  GET /api/books
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token (JWT) for auth |

#### Get book by id

```http
  GET /api/books/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get book by id

```http
  GET /api/books/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Add new book

```http
  POST /api/books/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | Title of the book |
| `author`      | `string` | Author of the book |
| `description`      | `string` | Description of the book |
| `pages_total`      | `number` | Total pages in the book |
| `category`      | `string` | Book genre (e.g. sci-fi, romance) |

#### Delete a book

```http
  DELETE /api/books/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |

#### Update a book

```http
  PUT /api/books/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |

#### User Login

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | User's email |
| `password`      | `string` | User's password |

#### User Registration

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | 	Email address to register |
| `password`      | `string` | 	Password to register |
