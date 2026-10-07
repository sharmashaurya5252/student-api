const express = require('express');
const router = express.Router();
const students = require('../data/students');

// GET /students - Get all students
router.get('/', (req, res) => {
  res.status(200).json(students);
});

// GET /students/:id - Get student by ID
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: 'Invalid student ID' });
  }

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  res.status(200).json(student);
});

// POST /students - Add a new student
router.post('/', (req, res) => {
  const { name, age, course } = req.body;

  if (!name || age === undefined || !course) {
    return res.status(400).json({
      message: 'Name, age and course are required'
    });
  }

  if (typeof name !== 'string' || typeof course !== 'string' || typeof age !== 'number') {
    return res.status(400).json({
      message: 'Invalid data types'
    });
  }

  const newStudent = {
    id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
    name,
    age,
    course
  };

  students.push(newStudent);

  res.status(201).json({
    message: 'Student created successfully',
    student: newStudent
  });
});

// PUT /students/:id - Update a student
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: 'Invalid student ID' });
  }

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  const { name, age, course } = req.body;

  if (!name || age === undefined || !course) {
    return res.status(400).json({
      message: 'Name, age and course are required'
    });
  }

  if (typeof name !== 'string' || typeof course !== 'string' || typeof age !== 'number') {
    return res.status(400).json({
      message: 'Invalid data types'
    });
  }

  student.name = name;
  student.age = age;
  student.course = course;

  res.status(200).json({
    message: 'Student updated successfully',
    student
  });
});

// DELETE /students/:id - Delete a student
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: 'Invalid student ID' });
  }

  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.status(200).json({
    message: 'Student deleted successfully',
    student: deletedStudent
  });
});

module.exports = router;
