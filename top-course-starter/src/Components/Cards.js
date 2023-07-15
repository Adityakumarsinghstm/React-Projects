import React, { useState } from 'react';
import Card from './Card';

function Cards({ courses }) {
  const [likedCourse, setLikedCourse] = useState([])
  const getCourses = () => {
    let allCourses = [];
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };

  return (
    <div>
      {getCourses().map((course) => (
        <Card key={course.id} course={course}
          likedCourse={likedCourse}
          setLikedCourse={setLikedCourse} />
      ))}
    </div>
  );
}

export default Cards;
