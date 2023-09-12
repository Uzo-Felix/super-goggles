
# Express.js API Documentation

This documentation provides an overview of the Express.js API for managing "Person" documents in a MongoDB database. The API includes endpoints for creating, retrieving, updating, and deleting person records.

## Table of Contents

1. [Endpoint Overview](#endpoint-overview)
2. [Standard Request and Response Formats](#standard-request-and-response-formats)
3. [Sample Usage](#sample-usage)
4. [Known Limitations and Assumptions](#known-limitations-and-assumptions)
5. [Setting Up and Deploying the API](#setting-up-and-deploying-the-api)

## Endpoint Overview

### 1. Create a New Person

- **Endpoint:** `POST /api`
- **Description:** Create a new person record.
- **Request Format:**
  - Content-Type: `application/json`
  - Body:
    ```json
    {
      "name": "John Doe"
    }
    ```
- **Response Format (Success):**
  - Status Code: `201 Created`
  - Body:
    ```json
    {
      "_id": "5f8b3de1e6b29b54a873f1c7",
      "name": "John Doe"
    }
    ```

### 2. Fetch Details of a Person

- **Endpoint:** `GET /api/:userId`
- **Description:** Retrieve details of a person by their ID.
- **Request Format:**
  - URL Parameter: `userId` (MongoDB ObjectId)
- **Response Format (Success):**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "_id": "5f8b3de1e6b29b54a873f1c7",
      "name": "John Doe"
    }
    ```

### 3. Modify Details of an Existing Person

- **Endpoint:** `PUT /api/:userId`
- **Description:** Update details of an existing person by their ID.
- **Request Format:**
  - URL Parameter: `userId` (MongoDB ObjectId)
  - Content-Type: `application/json`
  - Body:
    ```json
    {
      "name": "Jane Doe"
    }
    ```
- **Response Format (Success):**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "_id": "5f8b3de1e6b29b54a873f1c7",
      "name": "Jane Doe"
    }
    ```

### 4. Remove a Person

- **Endpoint:** `DELETE /api/:userId`
- **Description:** Delete a person by their ID.
- **Request Format:**
  - URL Parameter: `userId` (MongoDB ObjectId)
- **Response Format (Success):**
  - Status Code: `204 No Content`

## Standard Request and Response Formats

- **Request Format:**
  - Content-Type: `application/json`
  - All request bodies should be in JSON format.

- **Response Format (Success):**
  - Status Codes:
    - `200 OK` - Successful GET and PUT requests.
    - `201 Created` - Successful POST request.
    - `204 No Content` - Successful DELETE request.
  - Content-Type: `application/json`
  - Response body will contain relevant data.

- **Response Format (Error):**
  - Status Code: `4xx` or `5xx` as appropriate.
  - Content-Type: `application/json`
  - Response body will contain an error message.

## Sample Usage

Here are some sample usage scenarios for the API:

### Creating a New Person

**Request:**

```http
POST /api
Content-Type: application/json

{
  "name": "Alice Johnson"
}
```

**Response (Success):**

```json
{
  "_id": "5f8b3de1e6b29b54a873f1c8",
  "name": "Alice Johnson"
}
```

### Fetching Details of a Person

**Request:**

```http
GET /api/5f8b3de1e6b29b54a873f1c8
```

**Response (Success):**

```json
{
  "_id": "5f8b3de1e6b29b54a873f1c8",
  "name": "Alice Johnson"
}
```

### Modifying Details of an Existing Person

**Request:**

```http
PUT /api/5f8b3de1e6b29b54a873f1c8
Content-Type: application/json

{
  "name": "Alice Smith"
}
```

**Response (Success):**

```json
{
  "_id": "5f8b3de1e6b29b54a873f1c8",
  "name": "Alice Smith"
}
```

### Removing a Person

**Request:**

```http
DELETE /api/5f8b3de1e6b29b54a873f1c8
```

**Response (Success):**

```http
204 No Content
```

## Known Limitations and Assumptions

- The API assumes that the MongoDB database is already set up and running, and the connection URI is provided in the `.env` file.

## Setting Up and Deploying the API

To set up and deploy the API locally or on a server, please follow the instructions in the [README.md](README.md) file provided with the project.

For any further assistance or questions, please contact the API maintainers.
```