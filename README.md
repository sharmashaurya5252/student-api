# Lab Assignment 2 - Student Management REST API

## Technology
- Node.js
- Express.js
- Postman

## Restrictions
- No database
- No MongoDB/MySQL
- No Mongoose
- Array and JSON data only

## Project Structure

student-management-rest-api/
├── app.js
├── package.json
├── README.md
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
└── data/
    └── students.js

## How to Run

1. Open the project folder in VS Code.
2. Open Terminal.
3. Run:

```bash
npm install
npm start
```

4. Server will run on:

http://localhost:3000

## APIs

### Get all students
GET http://localhost:3000/students

### Get student by ID
GET http://localhost:3000/students/1

### Add student
POST http://localhost:3000/students

Body → raw → JSON:

{
  "name": "Shaurya Sharma",
  "age": 19,
  "course": "BCA AI & Data Science"
}

### Update student
PUT http://localhost:3000/students/1

Body → raw → JSON:

{
  "name": "Shaurya Sharma",
  "age": 20,
  "course": "BCA AI & Data Science"
}

### Delete student
DELETE http://localhost:3000/students/1

## Status Codes

200 - Success
201 - Created
400 - Bad Request
404 - Not Found

## Middleware

A custom logger middleware is included in:

middleware/logger.js

It logs the HTTP method and requested URL in the terminal.
