import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleCourseSelection }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="w-full md:w-[75%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Course
            handleCourseSelection={handleCourseSelection}
            course={course}
            key={course.id}
          />
        ))}
      </div>
    </div>
  );
};

Courses.propTypes = {
  handleCourseSelection: PropTypes.func,
};

export default Courses;
