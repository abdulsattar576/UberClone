# Backend API Documentation

---

## Endpoints

### Register User
- **URL:** `/api/user/register`
- **Method:** `POST`

#### Description
This endpoint registers a new user. It validates the provided data, hashes the password, creates the user record in the database, and returns a JSON Web Token (JWT) along with the user details.

#### Request Data
The request body must be in JSON format and include the following fields:

- **fullName** (object):  
  - `firstName` (string, required): Must be at least 3 characters long.
  - `lastName` (string, optional): Must be at least 3 characters long if provided.
- **email** (string, required): Must be a valid email format.
- **password** (string, required): Must be at least 6 characters long.

Example:
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

#### Response

##### Success
- **HTTP Status Code:** `201 Created`
- **Body:** Returns a JSON object containing:
  - `token`: A JWT token for authentication.
  - `user`: The created user data.

Example:
```json
{
  "token": "eyJhbGciOi...",
  "user": {
    "_id": "617f1f1f1f...",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

##### Errors

- **Validation Failure:**
  - **HTTP Status Code:** `400 Bad Request`
  - **Body:** An object with an `errors` array detailing the validation issues.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullName.firstName",
      "location": "body"
    }
  ]
}
```

- **Server Errors:**
  - **HTTP Status Code:** `500 Internal Server Error`
  - **Description:** An unexpected error occurred during user registration.

---

### Login User
- **URL:** `/api/user/login`
- **Method:** `POST`

#### Description
This endpoint logs in an existing user. It validates the provided email and password, checks if the user exists, verifies the password, and returns a JSON Web Token (JWT) for authentication.

#### Request Data
The request body must be in JSON format and include the following fields:

- **email** (string, required): Must be a valid email format.
- **password** (string, required): Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

#### Response

##### Success
- **HTTP Status Code:** `200 OK`
- **Body:** Returns a JSON object containing:
  - `token`: A JWT token for authentication.
  - `user`: The logged-in user data.

Example:
```json
{
  "token": "eyJhbGciOi...",
  "user": {
    "_id": "617f1f1f1f...",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

##### Errors

- **Validation Failure:**
  - **HTTP Status Code:** `400 Bad Request`
  - **Body:** An object with an `errors` array detailing the validation issues.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

- **Authentication Failure:**
  - **HTTP Status Code:** `401 Unauthorized`
  - **Description:** Invalid email or password.

Example:
```json
{
  "error": "Invalid email or password"
}
```

- **Server Errors:**
  - **HTTP Status Code:** `500 Internal Server Error`
  - **Description:** An unexpected error occurred during login.

---

### Get User Profile
- **URL:** `/api/user/profile`
- **Method:** `GET`

#### Description
This endpoint retrieves the profile information of the authenticated user. The user must be logged in and provide a valid JWT token.

#### Request Headers
- **Authorization**: Bearer `<token>`  
  The JWT token must be included in the `Authorization` header.

#### Response

##### Success
- **HTTP Status Code:** `200 OK`
- **Body:** Returns a JSON object containing the user's profile information.

Example:
```json
{
  "user": {
    "_id": "617f1f1f1f...",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

##### Errors

- **Unauthorized:**
  - **HTTP Status Code:** `401 Unauthorized`
  - **Description:** The user is not authenticated or the token is invalid.

Example:
```json
{
  "message": "Unauthorized"
}
```

- **User Not Found:**
  - **HTTP Status Code:** `404 Not Found`
  - **Description:** The user does not exist in the database.

Example:
```json
{
  "message": "User not found"
}
```

---

### Logout User
- **URL:** `/api/user/logout`
- **Method:** `POST`

#### Description
This endpoint logs out the authenticated user by blacklisting their JWT token and clearing the authentication cookie.

#### Request Headers
- **Authorization**: Bearer `<token>`  
  The JWT token must be included in the `Authorization` header.

#### Response

##### Success
- **HTTP Status Code:** `200 OK`
- **Body:** Returns a success message indicating the user has been logged out.

Example:
```json
{
  "message": "Logged out successfully"
}
```

##### Errors

- **No Token Provided:**
  - **HTTP Status Code:** `400 Bad Request`
  - **Description:** No token was provided in the request.

Example:
```json
{
  "message": "No token provided"
}
```

- **Unauthorized:**
  - **HTTP Status Code:** `401 Unauthorized`
  - **Description:** The token is invalid or blacklisted.

Example:
```json
{
  "message": "Unauthorized"
}
```

---

This is the complete `README.md` file. Add this content to your `README.md` file in the `Backend` folder. Let me know if you need further assistance!# Backend API Documentation

---

## Endpoints

### Register User
- **URL:** `/api/user/register`
- **Method:** `POST`

#### Description
This endpoint registers a new user. It validates the provided data, hashes the password, creates the user record in the database, and returns a JSON Web Token (JWT) along with the user details.

#### Request Data
The request body must be in JSON format and include the following fields:

- **fullName** (object):  
  - `firstName` (string, required): Must be at least 3 characters long.
  - `lastName` (string, optional): Must be at least 3 characters long if provided.
- **email** (string, required): Must be a valid email format.
- **password** (string, required): Must be at least 6 characters long.

Example:
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

#### Response

##### Success
- **HTTP Status Code:** `201 Created`
- **Body:** Returns a JSON object containing:
  - `token`: A JWT token for authentication.
  - `user`: The created user data.

Example:
```json
{
  "token": "eyJhbGciOi...",
  "user": {
    "_id": "617f1f1f1f...",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

##### Errors

- **Validation Failure:**
  - **HTTP Status Code:** `400 Bad Request`
  - **Body:** An object with an `errors` array detailing the validation issues.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullName.firstName",
      "location": "body"
    }
  ]
}
```

- **Server Errors:**
  - **HTTP Status Code:** `500 Internal Server Error`
  - **Description:** An unexpected error occurred during user registration.

---

### Login User
- **URL:** `/api/user/login`
- **Method:** `POST`

#### Description
This endpoint logs in an existing user. It validates the provided email and password, checks if the user exists, verifies the password, and returns a JSON Web Token (JWT) for authentication.

#### Request Data
The request body must be in JSON format and include the following fields:

- **email** (string, required): Must be a valid email format.
- **password** (string, required): Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

#### Response

#####
- **HTTP Status Code:** `200 OK`
- **Body:** Returns a JSON object containing:
  - `token`: A JWT token for authentication.
  - `user`: The logged-in user data.

Example:
```json
{
  "token": "eyJhbGciOi...",
  "user": {
    "_id": "617f1f1f1f...",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

##### Errors

- **Validation Failure:**
  - **HTTP Status Code:** `400 Bad Request`
  - **Body:** An object with an `errors` array detailing the validation issues.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

- **Authentication Failure:**
  - **HTTP Status Code:** `401 Unauthorized`
  - **Description:** Invalid email or password.

Example:
```json
{
  "error": "Invalid email or password"
}
```

- **Server Errors:**
  - **HTTP Status Code:** `500 Internal Server Error`
  - **Description:** An unexpected error occurred during login.

---

### Get User Profile
- **URL:** `/api/user/profile`
- **Method:** `GET`

#### Description
This endpoint retrieves the profile information of the authenticated user. The user must be logged in and provide a valid JWT token.

#### Request Headers
- **Authorization**: Bearer `<token>`  
  The JWT token must be included in the `Authorization` header.

#### Response

##### Success
- **HTTP Status Code:** `200 OK`
- **Body:** Returns a JSON object containing the user's profile information.

Example:
```json
{
  "user": {
    "_id": "617f1f1f1f...",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

##### Errors

- **Unauthorized:**
  - **HTTP Status Code:** `401 Unauthorized`
  - **Description:** The user is not authenticated or the token is invalid.

Example:
```json
{
  "message": "Unauthorized"
}
```

- **User Not Found:**
  - **HTTP Status Code:** `404 Not Found`
  - **Description:** The user does not exist in the database.

Example:
```json
{
  "message": "User not found"
}
```

---

### Logout User
- **URL:** `/api/user/logout`
- **Method:** `POST`

#### Description
This endpoint logs out the authenticated user by blacklisting their JWT token and clearing the authentication cookie.

#### Request Headers
- **Authorization**: Bearer `<token>`  
  The JWT token must be included in the `Authorization` header.

#### Response

##### Success
- **HTTP Status Code:** `200 OK`
- **Body:** Returns a success message indicating the user has been logged out.

Example:
```json
{
  "message": "Logged out successfully"
}
```

##### Errors

- **No Token Provided:**
  - **HTTP Status Code:** `400 Bad Request`
  - **Description:** No token was provided in the request.

Example:
```json
{
  "message": "No token provided"
}
```

- **Unauthorized:**
  - **HTTP Status Code:** `401 Unauthorized`
  - **Description:** The token is invalid or blacklisted.

Example:
```json
{
  "message": "Unauthorized"
}
```

---

 