# Backend API Documentation

---

## User Endpoints

### Register User
- **URL:** `/api/user/register`
- **Method:** `POST`

#### Description
Registers a new user. Validates input, hashes the password, creates the user, and returns a JWT token with user details.

#### Request Body
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

#### Success Response
- **Status:** `201 Created`
- **Body:**
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

#### Error Responses
- **400 Bad Request** (Validation errors)
- **500 Internal Server Error**

---

### Login User
- **URL:** `/api/user/login`
- **Method:** `POST`

#### Description
Logs in an existing user. Validates credentials and returns a JWT token with user details.

#### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

#### Success Response
- **Status:** `200 OK`
- **Body:**
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

#### Error Responses
- **400 Bad Request** (Validation or credential errors)
- **401 Unauthorized** (Invalid email or password)
- **500 Internal Server Error**

---

### Get User Profile
- **URL:** `/api/user/profile`
- **Method:** `GET`
- **Auth:** Bearer JWT token (in cookie or `Authorization` header)

#### Description
Retrieves the authenticated user's profile.

#### Success Response
- **Status:** `200 OK`
- **Body:**
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

#### Error Responses
- **401 Unauthorized** (Missing/invalid/blacklisted token)
- **404 Not Found** (User not found)

---

### Logout User
- **URL:** `/api/user/logout`
- **Method:** `POST`
- **Auth:** Bearer JWT token (in cookie or `Authorization` header)

#### Description
Logs out the user by blacklisting the JWT token and clearing the cookie.

#### Success Response
- **Status:** `200 OK`
- **Body:**
```json
{
  "message": "Logged out successfully"
}
```

#### Error Responses
- **400 Bad Request** (No token provided)
- **401 Unauthorized** (Invalid or blacklisted token)

---

## Captain Endpoints

### Register Captain
- **URL:** `/api/captain/register`
- **Method:** `POST`

#### Description
Registers a new captain. Validates input, hashes the password, creates the captain, and returns a JWT token with captain details.

#### Request Body
```json
{
  "fullName": {
    "firstName": "Jane",
    "lastName": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "securepass",
  "vehicale": {
    "color": "Red",
    "numberPlate": "XYZ123",
    "capacity": 4,
    "vehicaleType": "car"
  }
}
```

#### Success Response
- **Status:** `201 Created`
- **Body:**
```json
{
  "message": "Captain registered successfully",
  "captain": {
    "_id": "618f1f1f1f...",
    "fullName": {
      "firstName": "Jane",
      "lastName": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicale": {
      "color": "Red",
      "numberPlate": "XYZ123",
      "capacity": 4,
      "vehicaleType": "car"
    },
    "status": "inactive",
    "socketId": null
  },
  "token": "eyJhbGciOi..."
}
```

#### Error Responses
- **400 Bad Request** (Validation errors or captain already exists)
- **500 Internal Server Error**

---

### Login Captain
- **URL:** `/api/captain/login`
- **Method:** `POST`

#### Description
Logs in an existing captain. Validates credentials and returns a JWT token with captain details.

#### Request Body
```json
{
  "email": "jane.smith@example.com",
  "password": "securepass"
}
```

#### Success Response
- **Status:** `200 OK`
- **Body:**
```json
{
  "message": "Captain logged in successfully",
  "captain": {
    "_id": "618f1f1f1f...",
    "fullName": {
      "firstName": "Jane",
      "lastName": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicale": {
      "color": "Red",
      "numberPlate": "XYZ123",
      "capacity": 4,
      "vehicaleType": "car"
    },
    "status": "inactive",
    "socketId": null
  },
  "token": "eyJhbGciOi..."
}
```

#### Error Responses
- **400 Bad Request** (Validation or credential errors)
- **401 Unauthorized** (Invalid email or password)
- **500 Internal Server Error**

---

### Get Captain Profile
- **URL:** `/api/captain/profile`
- **Method:** `GET`
- **Auth:** Bearer JWT token (in cookie or `Authorization` header)

#### Description
Retrieves the authenticated captain's profile.

#### Success Response
- **Status:** `200 OK`
- **Body:**
```json
{
  "captain": {
    "_id": "618f1f1f1f...",
    "fullName": {
      "firstName": "Jane",
      "lastName": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicale": {
      "color": "Red",
      "numberPlate": "XYZ123",
      "capacity": 4,
      "vehicaleType": "car"
    },
    "status": "inactive",
    "socketId": null
  }
}
```

#### Error Responses
- **401 Unauthorized** (Missing/invalid/blacklisted token)
- **404 Not Found** (Captain not found)

---

### Logout Captain
- **URL:** `/api/captain/logout`
- **Method:** `POST`
- **Auth:** Bearer JWT token (in cookie or `Authorization` header)

#### Description
Logs out the captain by blacklisting the JWT token and clearing the cookie.

#### Success Response
- **Status:** `200 OK`
- **Body:**
```json
{
  "message": "Captain logged out successfully"
}
```

#### Error Responses
- **401 Unauthorized** (No token provided, invalid, or blacklisted token)

---

## Notes

- All endpoints that require authentication expect the JWT token in the `Authorization` header as `Bearer <token>` or in the `token` cookie.
- Validation errors are returned as an array in the `errors` field.
- Blacklisted tokens are stored in the `BlanklistToken` collection and checked on each authenticated request.
