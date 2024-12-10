


# Password-Reset

The "Password Reset" project is a web application built using the MERN (MongoDB, Express.js, React, Node.js) stack that facilitates user authentication functionalities such as signup, login, and a password reset mechanism.
## Table of Contents

1.Overview

2.Features

3.Installation

4.Usage

5.Technologies Used

6.Contributing

7.License
## OverView:

The project focuses on providing a secure and user-friendly system for managing user accounts and passwords. It includes the following key functionalities:

1. Signup Page: Allows users to create new accounts by providing necessary details like username, email, and password.

2. Login Page: Provides authentication for registered users to access their accounts securely.

3. Forgot Password Request via Email: Allows users who have forgotten their passwords to request a password reset. An email with a unique reset link is sent to their registered email address for verification.

4. Password Reset: Once the user clicks on the reset link received via email, they're directed to a page where they can securely reset their password.
## Features:

* User-friendly interface for signup and login functionalities.

* Security measures implemented for storing passwords (hashing, salting) in the database.

* Utilization of Node Mailer for sending password reset emails securely.

* A secure and straightforward process for users to reset their passwords.
## Technologies Used:

* Frontend: React
* Backend: Node.js, Express.js
* Database: MongoDB
* Additional Libraries/Tools: Node Mailer (for sending emails), bcrypt (for password hashing), etc.
## Installation:

To run the project locally:

1. Clone the repository: git clone https://github.com/Vijayarajvijay/Password-Reset-FE
Back End code :
https://github.com/Vijayarajvijay/Password-Reset-BE

2. Navigate to the project directory and install 
dependencies: npm install

3. Set up environment variables (such as database connection strings, email configurations, etc.).

4. Start the development server: `npm start`
## Usage:

Users can navigate through the signup and login pages to create an account or access their existing account. In case of a forgotten password, they can request a password reset via the provided email functionality and securely set a new password.

## Contributing:

Contributions to the project are welcome! Users can contribute by reporting issues, suggesting new features, or submitting pull requests. Please follow the guidelines mentioned in the project repository for contributing.
## License:

Include the license information for the project (e.g., MIT License, GNU General Public License, etc.).



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
