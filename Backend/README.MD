# Backend  API Documentation

## Endpoint
- **URL:** `/api/user/register`
- **Method:** `POST`

## Description
This endpoint registers a new user. It validates the provided data, hashes the password, creates the user record in the database, and returns a JSON Web Token (JWT) along with the user details.

## Request Data
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