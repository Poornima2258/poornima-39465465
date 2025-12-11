const Course = require('../models/course');

// Create
exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all (supports ?semester= and ?page & ?limit optional)
exports.getAllCourses = async (req, res) => {
  try {
    const { semester, page = 1, limit = 0 } = req.query;
    const filter = semester ? { semester } : {};
    const query = Course.find(filter).sort({ credits: 1 }); // sort by credits ascending
    if (limit > 0) query.skip((page - 1) * limit).limit(Number(limit));
    const courses = await query;
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
