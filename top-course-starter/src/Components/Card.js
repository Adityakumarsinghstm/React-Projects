import React from 'react';
import { FcLike } from 'react-icons/fc';

function Card({ course ,likedCourse, setLikedCourse }) {
  function clickHandler()
  {

  }
  return (
    <div>
      <div>
        <img src={course.image.url} alt={course.title} />
      </div>
      <div>
        <button onClick={clickHandler}>
          <FcLike fontSize="1.75rem" />
        </button>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
}

export default Card;
