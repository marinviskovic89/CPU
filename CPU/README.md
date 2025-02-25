# CPU Management Web Application

## Project Overview

This is a full-stack web application for managing a list of CPUs. The application allows users to view and edit CPU details while ensuring that each CPU is assigned a socket from a predefined list.

## Technologies Used

- **Backend:** Spring Boot
- **Frontend:** React
- **Database:** MariaDB/MySQL

## Project Structure

```
CPU/                    # Root project directory
├── cpu-app/           # React frontend
├── src/               # Spring Boot backend source code
├── build.gradle       # Gradle build file
├── package.json       # Frontend package manager file
└── README.md          # Project documentation
```

## Backend (Spring Boot)

### Setup

1. Install Java (JDK 17+ recommended).
2. Install Gradle.
3. Configure database connection in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
   spring.datasource.username=root
   spring.jpa.hibernate.ddl-auto=update
   ```
4. Run the backend with:
   ```sh
   ./gradlew bootRun
   ```

### API Endpoints

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| GET    | `/api/cpus`      | Get all CPUs              |
| GET    | `/api/cpus/{id}` | Get CPU by ID             |
| PUT    | `/api/cpus/{id}` | Update CPU details        |
| GET    | `/api/sockets`   | Get all available sockets |

## Frontend (React)

### Setup

1. Navigate to the frontend directory:
   ```sh
   cd cpu-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

### Features

- View a list of CPUs.
- Edit CPU details (brand, model, socket, clockspeed, cores, threads, TDP, price).
- Select a socket from a predefined list.
- Responsive UI using React components.

## Database (MariaDB/MySQL)

### Database Schema

#### `cpu` Table

| Column     | Type    | Description                      |
| ---------- | ------- | -------------------------------- |
| id         | BIGINT  | Primary Key                      |
| brand      | VARCHAR | CPU Brand                        |
| model      | VARCHAR | CPU Model                        |
| clockspeed | DOUBLE  | Speed in GHz                     |
| numCores   | INT     | Number of Cores                  |
| numThreads | INT     | Number of Threads                |
| tdp        | DOUBLE  | Thermal Design Power             |
| price      | DOUBLE  | Price in EUR                     |
| socket\_id | BIGINT  | Foreign Key referencing `socket` |

#### `socket` Table

| Column | Type    | Description |
| ------ | ------- | ----------- |
| id     | BIGINT  | Primary Key |
| name   | VARCHAR | Socket Type |

## Running the Application

1. Start the database server.
2. Start the backend using `./gradlew bootRun`.
3. Start the frontend using `npm start` in `cpu-app/`.
4. Open the browser at `http://localhost:3000`.

## Future Enhancements

- Add authentication and authorization.
- Implement sorting and filtering in the CPU list.
- Improve UI design with Material-UI or TailwindCSS.

## Author

Created by Marin Visković.

