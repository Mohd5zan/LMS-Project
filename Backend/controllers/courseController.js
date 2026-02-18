const Course = require("../models/Course");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch {
    res.status(500).json({ message: "Error fetching courses" });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course)
      return res.status(404).json({ message: "Course not found" });

    res.json(course);
  } catch {
    res.status(500).json({ message: "Error fetching course" });
  }
};
