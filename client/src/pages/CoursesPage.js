import React, { useState, useEffect } from 'react';
import CourseTable from '../components/CourseTable';
import FilterPanel from '../components/FilterPanel';
import SortPanel from '../components/SortPanel';
import Pagination from '../components/Pagination';
import './styles.css'

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(10);
  const [filterType, setFilterType] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState('');
  const [selectedMinPrice, setSelectedMinPrice] = useState('');
  const [selectedMaxPrice, setSelectedMaxPrice] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [topics, setTopics] = useState([]);
  const [priceRanges] = useState([
    { min: 0, max: 20 },
    { min: 21, max: 40 },
    { min: 41, max: 60 },
    { min: 61, max: 80 },
    { min: 81, max: 100 },
  ]);

  useEffect(() => {
    // Fetch courses and topics from the backend
    const fetchCoursesAndTopics = async () => {
      try {
        // Fetch courses
        const coursesResponse = await fetch('http://localhost:5000/courses');
        const coursesData = await coursesResponse.json();
        setCourses(coursesData);
        setFilteredCourses(coursesData);

        // Fetch topics
        const topicsResponse = await fetch('http://localhost:5000/topics');
        const topicsData = await topicsResponse.json();
        setTopics(topicsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCoursesAndTopics();
  }, []);
  

  // Apply filters and update filteredCourses
  useEffect(() => {
    applyFilters();
  }, [selectedTopicId, selectedMinPrice, selectedMaxPrice, searchQuery]);

  const applyFilters = () => {
    let filteredData = [...courses];

    // Filter by topic
    if (selectedTopicId) {
      filteredData = filteredData.filter((course) => course.topicID === selectedTopicId);
    }

    // Filter by price range
    if (selectedMinPrice && selectedMaxPrice) {
      filteredData = filteredData.filter(
        (course) => course.price >= selectedMinPrice && course.price <= selectedMaxPrice
      );
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      filteredData = filteredData.filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCourses(filteredData);
    setCurrentPage(1); // Reset pagination to the first page after filtering
  };

  // Handle sorting change
  const handleSortChange = (order) => {
    setSortOrder(order);
    const sortedCourses = [...filteredCourses].sort((a, b) => {
      if (order === 'latest') {
        return new Date(b.createdOn) - new Date(a.createdOn);
      } else {
        return new Date(a.createdOn) - new Date(b.createdOn);
      }
    });
    setFilteredCourses(sortedCourses);
  };
  

  // Handle pagination change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate courses to be displayed on the current page
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  return (
    <div>
      <h1>Courses</h1>
      <FilterPanel
        handleFilterChange={setFilterType}
        handleSearchChange={setSearchQuery}
        handleTopicChange={setSelectedTopicId}
        setSelectedMinPrice={setSelectedMinPrice}
        setSelectedMaxPrice={setSelectedMaxPrice}
        topics={topics}
        priceRanges={priceRanges}
      />
      <SortPanel handleSortChange={handleSortChange} />
      <CourseTable courses={currentCourses} topics={topics} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCourses.length / coursesPerPage)}
        handlePageChange={handlePageChange}
      />
      <div>
        <p>Current Filter Type: {filterType}</p>
        <p>Current Sort Order: {sortOrder}</p>
      </div>
    </div>
  );
};

export default CoursesPage;
