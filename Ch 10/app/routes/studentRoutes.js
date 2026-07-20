/**
 * Express Router setup for Student API Endpoints
 */

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Route mapping
router.route('/')
  .get(studentController.getAllStudents)
  .post(studentController.createStudent);

router.post('/batch', studentController.createMultipleStudents);

router.route('/:id')
  .get(studentController.getStudentById)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = router;
