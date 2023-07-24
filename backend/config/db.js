const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vipulkrvks:vipulkrsingh@cluster0.q6qgros.mongodb.net/CourseFilter?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
