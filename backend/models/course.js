const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  topicID: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true },
  priceRange: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
