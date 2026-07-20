/**
 * Student Controller Handlers for REST API Endpoints
 */

const Student = require('../models/Student');

// 1. Get All Students with Filtering & Pagination
// GET /api/students?department=CS&page=1&limit=5
exports.getAllStudents = async (req, res) => {
  try {
    const { department, status, page = 1, limit = 10 } = req.query;
    
    // Build filter object
    const filter = {};
    if (department) filter.department = department;
    if (status) filter.status = status;

    // Execute query with skip and limit pagination formula
    const skip = (page - 1) * limit;
    const students = await Student.find(filter)
      .sort({ surname: 1 })
      .skip(skip)
      .limit(Number(limit));

    const totalCount = await Student.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: students.length,
      totalCount,
      page: Number(page),
      totalPages: Math.ceil(totalCount / limit),
      data: students
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 2. Get Single Student by ID
// GET /api/students/:id
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.status(200).json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 3. Create New Student
// POST /api/students
exports.createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json({ success: true, data: newStudent });
  } catch (error) {
    // Mongoose Validation Error handling
    res.status(400).json({ success: false, error: error.message });
  }
};

// 4. Batch Insert Multiple Students
// POST /api/students/batch
exports.createMultipleStudents = async (req, res) => {
  try {
    // insertMany inserts array of documents in a single round-trip
    const students = await Student.insertMany(req.body);
    res.status(201).json({ success: true, count: students.length, data: students });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// 5. Update Student by ID
// PUT /api/students/:id
exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Return updated document and run Schema validators
    );
    if (!updatedStudent) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.status(200).json({ success: true, data: updatedStudent });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// 6. Delete Student by ID (findByIdAndDelete)
// DELETE /api/students/:id
exports.deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Student record deleted successfully',
      data: deletedStudent
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
