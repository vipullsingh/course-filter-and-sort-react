const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Routes
const coursesRouter = require('./routes/courses');
const speakersRouter = require('./routes/speakers');
const topicsRouter = require('./routes/topics');

app.use('/courses', coursesRouter);
app.use('/speakers', speakersRouter);
app.use('/topics', topicsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
