const Student = require("../models/students");
const Grade = require("../models/grade");


//add a grade
exports.createGrade = async (req, res) => {
  try {
    const { id : studentId } = req.params;
    const { week, punctuality, assignment, classwork, personal_defence, attendance } = req.body;
    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const grade = await Grade.create({
      week,
      punctuality,
      assignment,
      classwork,
      personal_defence,
      attendance,
      studentId
    });

    res.status(201).json({
      message: `Student grade created successfully`,
      data: grade
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get all grades for a student
exports.getAllGrades = async (req, res) => {
  try {
    const { id: studentId } = req.params;
    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const grades = await Grade.findAll({
      where: { studentId }
    });
    res.status(200).json({
      message: `Student grades retrieved successfully`,
      data: grades
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get a specific grade for a student
exports.getGrade = async (req, res) => {
  try {
    const { id: studentId } = req.params;
    const { id: gradeId } = req.params;
    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const grade = await Grade.findOne({
      where: { id: gradeId, studentId }
    });
    if (!grade) {
      return res.status(404).json({ message: "Grade not found" });
    }
    res.status(200).json({
      message: `Student grade retrieved successfully`,
      data: grade
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//update a specific grade for a student
exports.updateGrade = async (req, res) => {
  try {
    const { id: studentId } = req.params;
    const { id: gradeId } = req.params;
    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const grade = await Grade.findOne({
      where: { id: gradeId, studentId }
    });
    if (!grade) {
      return res.status(404).json({ message: "Grade not found" });
    }
    const { week, punctuality, assignment, classwork, personal_defence, attendance } = req.body;
    await grade.update({
      week,
      punctuality,
      assignment,
      classwork,
      personal_defence,
      attendance
    });
    res.status(200).json({
      message: `Student grade updated successfully`,
      data: grade
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete a specific grade for a student
exports.deleteGrade = async (req, res) => {
  try {
    const { id: studentId } = req.params;
    const { id: gradeId } = req.params;
    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const grade = await Grade.findOne({
      where: { id: gradeId, studentId }
    });
    if (!grade) {
      return res.status(404).json({ message: "Grade not found" });
    }
    await grade.destroy();
    res.status(200).json({
      message: `Student grade deleted successfully`
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//get total grades for a student
exports.getTotalGrades = async (req, res) => {
  try {
    const { id: studentId } = req.params;
    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const grades = await Grade.findAll({
      where: { studentId }
    });
    const totalGrades = grades.reduce((acc, grade) => {
      return acc + (grade.punctuality + grade.assignment + grade.classwork + grade.personal_defence + grade.attendance);
    }, 0);
    res.status(200).json({
      message: `Total grades retrieved successfully`,
      data: { totalGrades }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};