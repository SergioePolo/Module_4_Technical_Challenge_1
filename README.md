# Module 4 Technical Challenge 1 – MEAN Stack

A full-stack CRUD application for managing employees and departments built with the MEAN stack (MongoDB, Express, Angular, Node.js).

## Challenge Overview

This project implements a technical challenge for a MEAN Stack developer with complete CRUD operations for managing employees (users), departments, and roles.

### Tech Stack
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Frontend**: Angular (v18+)
- **Languages**: TypeScript, JavaScript, HTML, CSS

## Features

### Backend API
- RESTful API endpoints for managing:
  - **Users (Employees)**: Complete CRUD operations
  - **Departments**: Complete CRUD operations
  - **Roles**: Complete CRUD operations
- MongoDB data models with proper schema definitions
- Service-based architecture with controllers and routes

### Frontend Application

#### Pages:
- **Welcome**: Landing page for application introduction
- **User**: Form-based page for creating and updating employee information
- **Departments**: Form-based page for managing departments
- **Roles**: Form-based page for managing roles
- **Admin**: Dashboard page with:
  - Data tables displaying all users and departments
  - Informational cards with key metrics
  - Service integration for real-time data updates
- **NotFound**: 404 error page for invalid routes

#### Components:
- Reusable Angular components with TypeScript
- Services for API communication
- Interfaces for type-safe data handling

## Employee (User) Data Structure

```json
{
  "codigo": "Number",
  "nombre": "String",
  "apellido1": "String",
  "apellido2": "String",
  "codigodepartamento": "Number"
}
```

## Department Data Structure

```json
{
  "name": "String",
  "description": "String"
}
```

## Project Structure

```
Module_4_Technical_Challenge_1/
├── back_end/
│   ├── config/          # Database and server configuration
│   ├── controllers/      # Route controllers
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API route definitions
│   ├── app.js           # Express application setup
│   ├── package.json
│   └── .gitignore
│
└── front_end/
    └── src/
        ├── app/
        │   ├── components/     # Reusable UI components
        │   ├── interfaces/     # TypeScript interfaces for API communication
        │   ├── pages/          # Feature pages
        │   │   ├── admin/      # Dashboard with tables and cards
        │   │   ├── user/       # User CRUD form
        │   │   ├── departments/# Department CRUD form
        │   │   ├── roles/      # Roles CRUD form
        │   │   ├── welcome/    # Landing page
        │   │   └── not-found/  # 404 page
        │   ├── services/       # API communication services
        │   ├── app.component.* # Root component
        │   ├── app.routes.ts   # Angular routing configuration
        │   └── app.config.ts   # Application configuration
        ├── main.ts            # Application entry point
        └── styles.css         # Global styles
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Angular CLI (v18+)
- MongoDB (local instance or MongoDB Atlas)

### Installation

**1. Backend Setup**
```bash
cd back_end
npm install
```

**2. Frontend Setup**
```bash
cd front_end
npm install
```

### Configuration

**Backend Configuration:**
- Update MongoDB connection string in `back_end/config/`
- Ensure MongoDB is running locally or configure Atlas URI

**Frontend Configuration:**
- API endpoints are configured in `services/`
- Update base URL if backend runs on non-standard port

## Running the Application

### Start Backend Server
```bash
cd back_end
npm start
```
Backend runs on `http://localhost:5000` (or configured port)

### Start Frontend Development Server
```bash
cd front_end
ng serve
# or
npm start
```
Frontend runs on `http://localhost:4200`

## API Endpoints

### Users (Employees)
- `GET /api/users` – Retrieve all users
- `GET /api/users/:id` – Retrieve user by ID
- `POST /api/users` – Create new user
- `PUT /api/users/:id` – Update user
- `DELETE /api/users/:id` – Delete user

### Departments
- `GET /api/departments` – Retrieve all departments
- `GET /api/departments/:id` – Retrieve department by ID
- `POST /api/departments` – Create new department
- `PUT /api/departments/:id` – Update department
- `DELETE /api/departments/:id` – Delete department

### Roles
- `GET /api/roles` – Retrieve all roles
- `GET /api/roles/:id` – Retrieve role by ID
- `POST /api/roles` – Create new role
- `PUT /api/roles/:id` – Update role
- `DELETE /api/roles/:id` – Delete role

## Usage

### Creating a User
1. Navigate to the **User** page
2. Fill out the form with employee information
3. Click "Create" or "Save"
4. Redirects to Admin dashboard to view the new entry

### Managing Departments
1. Navigate to the **Departments** page
2. Create, edit, or delete departments using the form interface
3. Changes reflect immediately in the Admin dashboard

### Admin Dashboard
1. Navigate to the **Admin** page
2. View all users and departments in table format
3. Monitor key metrics via informational cards
4. Click on entries for editing/deletion options

## Development

### Adding New Features
1. Create new services in `front_end/src/app/services/`
2. Add interfaces in `front_end/src/app/interfaces/`
3. Create new pages under `front_end/src/app/pages/`
4. Update routing in `app.routes.ts`

### Backend Modifications
1. Update models in `back_end/models/`
2. Add controllers in `back_end/controllers/`
3. Define routes in `back_end/routes/`
4. Update `app.js` to register new routes

## Technologies & Dependencies

### Backend
- Express.js – Web framework
- MongoDB – Database
- Mongoose – ODM for MongoDB
- CORS – Cross-origin resource sharing

### Frontend
- Angular 18+ – Framework
- TypeScript – Type-safe JavaScript
- RxJS – Reactive programming
- Angular Material (optional) – UI components

## Build for Production

**Frontend Build:**
```bash
cd front_end
ng build --configuration production
```
Optimized build output in `dist/`

## License

MIT

## Author

SergioePolo

---

**Last Updated**: November 10, 2025
