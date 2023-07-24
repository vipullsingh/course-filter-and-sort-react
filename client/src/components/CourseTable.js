import React from 'react';

const CourseTable = ({ courses, topics }) => {
  if (courses.length === 0) {
    return <p>No courses found.</p>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Topic</th>
            <th>Price Range</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td>{course._id}</td>
              <td>{course.name}</td>
              <td>{topics.find((topic) => topic._id === course.topicID)?.name}</td>
              <td>{`$${course.price}`}</td>
              <td>{course.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
