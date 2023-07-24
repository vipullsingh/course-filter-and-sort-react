import React from 'react';

const CourseTable = ({ courses }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Topic ID</th>
            <th>Price Range</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.ID}>
              <td>{course.ID}</td>
              <td>{course.Name}</td>
              <td>{course.TopicID}</td>
              <td>{course.PriceRange}</td>
              <td>{course.CreatedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
