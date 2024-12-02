Task Manager Application with Authentication
This project is a Task Manager Application built using Angular for the frontend, .NET Core for the backend, and MySQL for data storage. The application includes user authentication (registration and login) and allows users to manage their tasks (add, edit, mark as complete, and delete). Each user's tasks are securely stored in the database.

Features
User Authentication
Register: Create a new account with email and password.
Login: Authenticate existing users.
Session Management: Securely manages user sessions.
Task Management
Add Tasks: Input task descriptions into a to-do list.
Edit Tasks: Modify tasks directly in the list.
Mark as Completed: Mark tasks as complete/incomplete.
Delete Tasks: Remove tasks from the list.
Backend
.NET Core: Handles API requests for user authentication and task management.
MySQL: Stores user credentials and task data.
Getting Started
Prerequisites
Node.js: For running the Angular frontend.
Angular CLI: To develop and serve the Angular application.
.NET SDK: For building and running the backend.
MySQL Server: For storing user and task data.
Installation
Frontend
Clone the repository:
bash
Copy code
git clone https://github.com/your-repo/task-manager-app.git
cd task-manager-app
Install dependencies:
bash
Copy code
npm install
Start the Angular application:
bash
Copy code
ng serve
Backend
Navigate to the backend folder:
bash
Copy code
cd backend
Build the project:
bash
Copy code
dotnet build
Run the application:
bash
Copy code
dotnet run
MySQL Database Setup
Create a database:
sql
Copy code
CREATE DATABASE TaskManager;
Import the provided SQL schema:
bash
Copy code
mysql -u root -p TaskManager < schema.sql
Update the connection string in appsettings.json:
json
Copy code
{
    "ConnectionStrings": {
        "DefaultConnection": "Server=localhost;Database=TaskManager;User=root;Password=yourpassword;"
    }
}
File Structure
Frontend
src/app/login: Login page components.
src/app/register: Registration page components.
src/app/todolist: Task manager components.
Backend
Controllers/UserController.cs: Manages user authentication API endpoints.
Controllers/TaskController.cs: Manages task-related API endpoints.
Models/User.cs: User data model.
Models/Task.cs: Task data model.
appsettings.json: Configuration file for database connection.
Database
schema.sql: Contains the SQL schema for users and tasks.
API Endpoints
User Authentication
POST /api/user/register: Register a new user.
POST /api/user/login: Authenticate a user.
Task Management
GET /api/tasks: Fetch tasks for the authenticated user.
POST /api/tasks: Add a new task.
PUT /api/tasks/{id}: Update an existing task.
DELETE /api/tasks/{id}: Delete a task.
Styling
The application uses Brutalist CSS for the user interface, featuring bold borders, animated focus effects, and glitch-inspired styling.

Technologies Used
Frontend: Angular, Bootstrap
Backend: .NET Core
Database: MySQL
Authentication: JWT