# Express.js API with MongoDB

This is a simple Express.js API that interacts with a MongoDB database using the Mongoose ODM. It allows you to create, retrieve, update, and delete "Person" documents in the database.


## UML Class Diagram

Here's a simplified UML class diagram representing the core components of the API:

![UML diagram](https://yuml.me/57e1074c.jpg)

```yuml
// Define Person class with attributes and methods
[Person|
  - _id: ObjectId
  - name: String
  + findById(userId)
  + create(data)
  + update(userId, data)
  + remove(userId)
]

// Define Validation class with methods
[Validation|
  + nameIsValid(name)
  + checkName(name)
]

// Person uses Validation
[Person]uses-.->[Validation]

```



## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
- [Usage Examples](#usage-examples)

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (with npm)
- [MongoDB](https://www.mongodb.com/) (running locally or accessible via a URI)
- A code editor of your choice

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Uzo-Felix/super-goggles.git
   ```

2. Change into the project directory:

   ```bash
   cd supper-goggles.git
   ```

3. Install the required npm packages:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```env
   PORT=3000  # The port on which the server will run
   MONGO_URI=mongodb://localhost:27017/your-database  # The MongoDB connection URI
   ```

   Make sure to replace `your-database` with the name of your MongoDB database.

## Running the API

To start the API server, run the following command:

```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 3000). You should see a message in the console indicating that the server is running.

## API Endpoints

The API provides the following endpoints:

- `POST /api` - Create a new person
- `GET /api/:userId` - Fetch details of a person by ID
- `PUT /api/:userId` - Modify details of an existing person by ID
- `DELETE /api/:userId` - Remove a person by ID

## Usage Examples

### Creating a New Person

To create a new person, send a POST request to `/api` with a JSON body containing the person's name:

```http
POST /api
Content-Type: application/json

{
  "name": "John Doe"
}
```

### Fetching Details of a Person

To retrieve details of a person by their ID, send a GET request to `/api/:userId`, where `:userId` is the ID of the person:

```http
GET /api/5f8b3de1e6b29b54a873f1c7
```

### Modifying Details of an Existing Person

To update the name of an existing person by their ID, send a PUT request to `/api/:userId`, where `:userId` is the ID of the person, with a JSON body containing the new name:

```http
PUT /api/5f8b3de1e6b29b54a873f1c7
Content-Type: application/json

{
  "name": "Jane Doe"
}
```

### Removing a Person

To delete a person by their ID, send a DELETE request to `/api/:userId`, where `:userId` is the ID of the person:

```http
DELETE /api/5f8b3de1e6b29b54a873f1c7
```

Ensure proper error handling and validation when using these endpoints.

Feel free to customize and expand upon this API for your specific needs.
```

Make sure to replace placeholders like `yourusername`, `your-database`, and `5f8b3de1e6b29b54a873f1c7` with appropriate values specific to your project. This `README.md` provides clear instructions on how to set up, configure, run, and use this Express.js API with MongoDB.