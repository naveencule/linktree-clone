# Linktree Clone

## Overview

This project is a Linktree clone that allows users to create a personalized landing page with links to their various social media profiles and other online content. The project includes a full-stack implementation with a frontend in React and a backend in Node.js, utilizing MongoDB for data storage.

## Features

- **User Registration and Login**: Users can sign up and log in to manage their personal linktree page.
- **Personalized Linktree Page**: Each user has a unique page displaying their custom links.
- **Responsive Design**: The application is designed to be mobile-friendly and visually appealing.

## Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Heroku (if applicable)

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or cloud instance)

### Setup

1. **Clone the Repository**

    ```sh
    git clone https://github.com/naveencule/linktree-clone.git
    cd linktree-clone
    ```

2. **Install Backend Dependencies**

    Navigate to the backend directory and install the required packages:

    ```sh
    cd server
    npm install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the `server` directory and add your MongoDB connection string and other necessary environment variables:

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the Backend Server**

    Start the backend server:

    ```sh
    npm start
    ```

5. **Install Frontend Dependencies**

    Navigate to the frontend directory and install the required packages:

    ```sh
    cd ../client
    npm install
    ```

6. **Run the Frontend Development Server**

    Start the frontend development server:

    ```sh
    npm start
    ```

7. **Access the Application**

    Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

1. **Register an Account**

    Go to the registration page and fill out the form to create a new account.

2. **Log In**

    Use your email and password to log in to your account.

3. **Customize Your Linktree Page**

    After logging in, you can add, edit, and manage your links on your personal linktree page.

4. **Log Out**

    Use the log-out option to securely end your session.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to follow the coding standards and include relevant tests for your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/) for the frontend framework.
- [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/) for the backend server.
- [MongoDB](https://www.mongodb.com/) for the database.

## Contact

For any questions or issues, please contact:

- **Email**: naveesanthosh200@gmail.com
- **GitHub**: [naveencule](https://github.com/naveencule)

