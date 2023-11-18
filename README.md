### Bistro Boss - Restaurant Management Website Live Link: https://onebistroboss.web.app/

Bistro Boss is a full-stack restaurant management website developed using Node.js, Express.js, MongoDB, React.js, and other technologies. This web application streamlines restaurant operations, offering an intuitive interface for users to explore menus, place orders, and manage their accounts. Administrators have access to a powerful dashboard for efficient management of products, users, and system settings.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Authentication](#authentication)
- [Payment Gateway](#payment-gateway)
- [Admin Dashboard](#admin-dashboard)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Bistro Boss is a comprehensive restaurant management website designed to simplify the dining experience. It includes features like user authentication, dynamic menu loading, order processing, payment gateway integration, and separate dashboards for users and administrators.

## Features

- User-friendly homepage with banners, featured foods, and customer reviews.
- Contact page with contact details and a contact form.
- Menu page dynamically loaded from the database.
- Order page for users to add items to the cart and place orders.
- User dashboard displaying added products, order history, and payment history.
- Firebase authentication for user login and signup.
- JWT authentication for user and admin verification.
- Payment gateway integration for secure online payments.
- Admin dashboard for managing products, users, and system settings.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- React.js
- Firebase Authentication
- JWT (JSON Web Tokens)
- Tanstack Query
- Other relevant libraries and frameworks

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the MongoDB database.
4. Configure Firebase authentication credentials.
5. Start the server using `npm start`.
6. Start the client using `npm run start-client`.

For detailed installation and setup instructions, refer to the [Getting Started](#) section in the documentation.

## Project Structure

The project is organized into client and server directories, each containing relevant components, controllers, models, routes, and middleware. For a detailed overview, refer to the [Project Structure](#project-structure) section.

## Usage

Explore the various features of the application by navigating through the different pages and dashboards. For detailed usage instructions, refer to the [Usage](#usage) section.

## Authentication

User authentication is handled through Firebase, ensuring secure and seamless login/signup processes. JWT is utilized for user and admin verification.

## Payment Gateway

The integrated payment gateway facilitates secure online payments. Users can confidently make transactions through supported payment methods.

## Admin Dashboard

Administrators can efficiently manage the restaurant's products, users, and system settings through the dedicated admin dashboard.


## Project Structure

```plaintext
BistroBoss/
|-- client/
|   |-- public/
|   |   |-- index.html         # HTML template for the React app
|   |   |-- ...                # Other static assets
|   |-- src/
|   |   |-- assets/
|   |   |   |-- images/        # Image assets
|   |   |   |-- css/           # CSS stylesheets
|   |   |   |-- ...            # Other asset files
|   |   |-- components/
|   |   |   |-- Banner/        # React component for the homepage banner
|   |   |   |-- FeatureFoods/  # React component for featured foods section
|   |   |   |-- Reviews/       # React component for customer reviews
|   |   |   |-- ContactForm/   # React component for the contact form
|   |   |   |-- Menu/          # React component for displaying the menu
|   |   |   |-- Order/         # React component for placing orders
|   |   |   |-- Dashboard/     # React components for user and admin dashboards
|   |   |   |   |-- Home/      # React component for the user/admin home page
|   |   |   |   |-- Products/  # React component for managing products
|   |   |   |   |-- Orders/    # React component for managing orders
|   |   |   |   |-- Payments/  # React component for managing payments
|   |   |-- pages/
|   |   |   |-- Home/          # React component for the homepage
|   |   |   |-- Contact/       # React component for the contact page
|   |   |   |-- Menu/          # React component for the menu page
|   |   |   |-- Order/         # React component for the order page
|   |   |   |-- Dashboard/     # React component for the user/admin dashboard
|   |   |   |   |-- Home/      # React component for the dashboard home page
|   |   |   |   |-- Products/  # React component for the dashboard products page
|   |   |   |   |-- Orders/    # React component for the dashboard orders page
|   |   |   |   |-- Payments/  # React component for the dashboard payments page
|   |   |-- App.js             # Main React application component
|   |   |-- index.js           # JavaScript entry point for React app
|   |   |-- ...                # Other React-related files
|-- server/
|   |-- controllers/
|   |   |-- authController.js  # Controller for authentication-related logic
|   |   |-- menuController.js  # Controller for menu-related logic
|   |   |-- orderController.js # Controller for order-related logic
|   |   |-- userController.js  # Controller for user-related logic
|   |   |-- adminController.js # Controller for admin-related logic
|   |-- models/
|   |   |-- User.js            # Mongoose model for user data
|   |   |-- Product.js         # Mongoose model for product data
|   |   |-- Order.js           # Mongoose model for order data
|   |   |-- ...                # Other Mongoose models
|   |-- routes/
|   |   |-- authRoutes.js      # Express routes for authentication
|   |   |-- menuRoutes.js      # Express routes for menu-related operations
|   |   |-- orderRoutes.js     # Express routes for order-related operations
|   |   |-- userRoutes.js      # Express routes for user-related operations
|   |   |-- adminRoutes.js     # Express routes for admin-related operations
|   |-- middleware/
|   |   |-- authentication.js  # Middleware for user authentication
|   |   |-- authorization.js   # Middleware for user authorization
|   |-- config/
|   |   |-- config.js          # Configuration settings for the server
|   |   |-- ...                # Other configuration files
|   |-- app.js                 # Express application configuration
|   |-- server.js              # Entry point for the Node.js server
|-- config/
|   |-- firebaseConfig.js      # Firebase configuration settings
|   |-- jwtSecret.js           # Secret key for JWT (JSON Web Tokens)
|-- scripts/
|   |-- setupDatabase.js       # Script for setting up the MongoDB database
|-- .gitignore                # Gitignore file to specify ignored files in version control
|-- package.json              # NPM package configuration file
|-- README.md                 # Documentation file for the project
|-- CONTRIBUTING.md           # Guidelines for contributing to the project
|-- LICENSE                   # License information for the project



![sss1](https://github.com/alamnahid/bistro-boss-restaurant-management-client/assets/138557372/acfa73dd-1c0e-4c57-8433-693cb0c0f3fe)

![ss2](https://github.com/alamnahid/bistro-boss-restaurant-management-client/assets/138557372/d76f337b-e779-41a7-87d0-cbaa1cdeb52a)

![sss3](https://github.com/alamnahid/bistro-boss-restaurant-management-client/assets/138557372/9da9c85f-83ad-4b91-818f-fc5dee889959)
