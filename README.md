
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

Login Page
<img width="1470" alt="Screenshot 2568-05-07 at 19 34 28" src="https://github.com/user-attachments/assets/1d61f704-8c9f-4c22-a51d-5f5f64a16449" />

Dashboard Page
<img width="1470" alt="Screenshot 2568-05-07 at 19 34 57" src="https://github.com/user-attachments/assets/9a198208-f4fb-43fd-8299-26970f41cb60" />

Book List Page
<img width="1470" alt="Screenshot 2568-05-07 at 19 35 27" src="https://github.com/user-attachments/assets/b93f7022-1a52-4d32-951b-1a223eff450c" />

Book Detail Page
<img width="1470" alt="Screenshot 2568-05-07 at 19 35 49" src="https://github.com/user-attachments/assets/2035fd97-d86a-4bdc-8670-4cff61a48685" />

Add Book Page
<img width="1470" alt="Screenshot 2568-05-07 at 19 36 18" src="https://github.com/user-attachments/assets/8d8a4f3c-014a-466a-afae-976594e81ea2" />

Read Ranking Page
<img width="1470" alt="Screenshot 2568-05-07 at 19 36 34" src="https://github.com/user-attachments/assets/99a24305-ad10-428f-bf6d-3e7f6ac61846" />
