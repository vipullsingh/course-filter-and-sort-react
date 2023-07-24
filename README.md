# Course Management Application

This is a course management application that allows you to view, filter, sort, and paginate courses and speakers.

## Backend Installation

1. Clone the repository to your local machine.
2. Navigate to the `backend` directory using the terminal.
3. Install the required dependencies by running the following command:
   ```
   npm install
   ```
4. Create a `.env` file in the `backend` directory and add the following configuration:
   ```
   PORT=5000
   ```
5. Start the backend server by running the following command:
   ```
   npm start
   ```

The backend server will be running on `http://localhost:5000`.

## Frontend Installation

1. Navigate to the `frontend` directory using the terminal.
2. Install the required dependencies by running the following command:
   ```
   npm install
   ```
3. Start the frontend development server by running the following command:
   ```
   npm start
   ```

The frontend development server will be running on `http://localhost:3000`.

## Backend Routes

### Courses

- GET `/courses`: Get all courses.
- GET `/courses/:id`: Get a single course by ID.
- POST `/courses`: Create a new course. (Example JSON data below)

### Speakers

- GET `/speakers`: Get all speakers.
- GET `/speakers/:id`: Get a single speaker by ID.
- POST `/speakers`: Create a new speaker. (Example JSON data below)

### Topics

- GET `/topics`: Get all topics.
- GET `/topics/:id`: Get a single topic by ID.
- POST `/topics`: Create a new topic. (Example JSON data below)

## Frontend Routes

The frontend has the following routes:

- `/courses`: View and manage courses.
- `/speakers`: View and manage speakers.

## Example JSON Data for POST Routes

### Create a Course

```json
{
  "name": "Introduction to React",
  "topicID": "topic123",
  "price": 49.99
}
```

### Create a Speaker

```json
{
  "name": "Vipul Kumar"
}
```

### Create a Topic

```json
{
  "name": "Web Development"
}
```

Please replace the example JSON data with your desired values when testing the POST routes.

Feel free to explore and use the Course Management Application! If you have any questions or need assistance, please refer to the documentation or reach out to the development team. Happy coding!