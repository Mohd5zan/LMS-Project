import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

function CourseDetail() {

  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    api.get(`/courses/${id}`)
      .then(res => setCourse(res.data))
      .catch(() => alert("Error loading course"));
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>{course.instructor}</p>
      <p>{course.duration}</p>
    </div>
  );
}

export default CourseDetail;
