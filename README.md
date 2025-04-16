# CRUD Application with Sequelize & Express 🌟

Welcome to a modern, well-structured CRUD (Create, Read, Update, Delete) application powered by Node.js, Express, Sequelize ORM, and MySQL. This project delivers a robust and secure RESTful API for managing user data, designed for developers seeking a scalable foundation for learning or production use. Let's dive in! 🚀


## Project Overview ✨ 
This project is a lightweight yet powerful CRUD application that allows seamless management of user records via a RESTful API. Built with modern JavaScript practices, it emphasizes clean code, security, and scalability. Whether you're exploring Sequelize or building a backend, this project is a perfect starting point! 🎉

## Features 🎯

- **Create Users**: Add new users with name and email.
-  **Read Users**: Fetch all users or a specific user by ID.
-  **Update Users**: Modify user details effortlessly.
- ️ **Delete Users**: Remove users with a single request.
- **Consistent Responses**: Standardized JSON responses for all endpoints.
-  **Secure Configuration**: Environment variables for sensitive data.
- ️ **Input Validation**: Robust validation using `express-validator`.
-  **Security**: HTTP headers secured with `helmet`.

## ️ Technologie  🛠

- **Node.js**: Scalable JavaScript runtime for backend development.
- **Express**: Minimalist framework for building RESTful APIs.
- **Sequelize**: Feature-rich ORM for MySQL database operations.
- **MySQL**: Reliable relational database for persistent storage.
- **express-validator**: Ensures valid and safe API inputs.
- **helmet**: Enhances API security with HTTP headers.
- **dotenv**: Securely manages environment variables.
- **cors**: Enables Cross-Origin Resource Sharing.

## Getting Started ⚙️ 

Follow these steps to set up the project locally in minutes! 

1. **Clone the Repository** 

   ```bash
   git clone https://github.com/rashid-mamun/crud_with_sequelize.git
   cd crud_with_sequelize
   ```

2. **Install Dependencies** 

   ```bash
   npm install
   ```

3. **Set Up MySQL Database** 

   - Ensure MySQL is installed and running.
   - Create a database (e.g., `crud_sequelize`).
   - Configure database credentials in the `.env` file (see Environment Variables).

4. **Configure** `.env` **File** : Create a `.env` file in the root directory with the following:

   ```
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=crud_sequelize
   DB_PORT=3306
   PORT=3000
   ```

5. **Database Sync** : Sequelize automatically synchronizes models with the database on startup.

##  Running the Application  🏃

1. Launch the server 

   ```bash
   npm start
   ```

2. Access the API at `http://localhost:3000` (or the port defined in `.env`) 

3. For development with auto-restart:

   ```bash
   npm run dev
   ```

##  API Endpoints 🌐

The API provides intuitive endpoints for user management. All responses follow a consistent `{ status, data }` or `{ status, errors }` format.

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/users` | Create a new user  |
| GET | `/api/users` | Retrieve all users  |
| GET | `/api/users/:id` | Fetch a user by ID  |
| PUT | `/api/users/:id` | Update a user  |
| DELETE | `/api/users/:id` | Delete a user ️ |

###  Example Request 📨

**Create a User**:

```bash
curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d '{"name": "Jane Doe", "email": "jane@example.com"}'
```

###  Response 📬

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "Jane Doe",
    "email": "jane@example.com",
    "createdAt": "2025-04-15T12:00:00.000Z",
    "updatedAt": "2025-04-15T12:00:00.000Z"
  }
}
```

##  Environment Variables 🔐

Securely configure the application using the following environment variables:

| Variable | Description | Default |
| --- | --- | --- |
| `DB_HOST` | Database host | `localhost` |
| `DB_USER` | Database username | \- |
| `DB_PASSWORD` | Database password | \- |
| `DB_NAME` | Database name | `crud_sequelize` |
| `DB_PORT` | Database port | `3306` |
| `PORT` | Application port | `3000` |


##  Future Enhancements 🚀

-  **Testing**: Add unit and integration tests with `jest` and `supertest`.
- **Rate Limiting**: Implement `express-rate-limit` to prevent abuse.
-  **Logging**: Integrate `winston` for comprehensive logging.
-  **CI/CD**: Set up GitHub Actions for automated testing and deployment.
-  **API Docs**: Generate interactive documentation with Swagger.
-  **Pagination**: Add pagination for large user datasets.
