import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function Courses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses")
      .then(res => setCourses(res.data))
      .catch(() => alert("Error fetching courses"));
  }, []);

  return (
    <div>
      <h2>Courses</h2>

      {courses.map(course => (
        <div key={course._id}>
          <Link to={`/course/${course._id}`}>
            {course.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Courses;
