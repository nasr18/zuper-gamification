# Gamification System API

This is a simple Express API.

# Installation

To run this project, you need to have Node.js and npm (Node Package Manager) installed on your system. Follow these steps to get started:

1. Clone the project repository or download the source code.

2. Open a terminal and navigate to the project directory.

3. Install the required dependencies by running the following command:

   ```shell
   npm install
   ```

# Script Execution

This project provides several scripts that can be executed using the npm (Node Package Manager) command-line tool. The scripts are defined in the `package.json` file. Below are the available scripts:

To execute a script, open a terminal or command prompt in the project's root directory and run the following command:

```shell
npm run <script-name>
```

Replace `<script-name>` with the name of the script you want to execute. For example, to start the server, run:

```shell
npm run start (or) npm run start:dev
```

# API Endpoints

This API provides the following endpoints for managing gamifications.

## Manage Gamification

- `GET /leaderboard/:month`: Get leaderboard for the month.
- `GET /users/:userId`: Get a specific user details by ID.
- `POST /update-activity/:userId`: Update user's activity for a specific month.

## License

This project is licensed under the MIT License. You can find the license information in the LICENSE file.
