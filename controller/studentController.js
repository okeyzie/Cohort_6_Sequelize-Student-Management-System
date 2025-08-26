const Student = require("../models/students");

exports.createStudent = async (req, res) => {
  try {
    const { fullName, stack, gender, centre, email } = req.body;
    const student = await Student.create({
      fullName,
      stack,
      gender,
      centre,
      email,
    });
    res.status(201).json({
      message: `Student created successfully`,
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getAStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    res.status(200).json({
      message: "Student below",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getAllStudent = async (req, res) => {
  try {
    // const {fullName, email, stack, gender, centre} = req.body
    const student = await Student.findAll();
    res.status(200).json({
      message: "All students found",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    console.log(student);
    if (!student) {
      return res.status(404).json({
        message: `Student with the ${id} is not found `,
      });
    }
    const { fullName, stack, gender, centre, email } = req.body;
    const updateStudent = await student.update({
      fullName,
      stack,
      gender,
      centre,
      email,
    });
    console.log(updateStudent);

    res.status(200).json({
      message: `Student with id ${id} updated successfully`,
      data: updateStudent,
    });
  } catch (error) {
    res.status(500).json({
      message: error.messsage,
    });
  }
};

exports.deleteAStudent = async (req, res) => {
  try {
    const { id } = req.params;
    //find the student with the corresponding ID
    const student = await Student.findByPk(id);
    if (!student) {
     return res.status(404).json({
        message: `Student with ID: ${id} is not found`,
      });
    }
    const deleteStudent = await Student.destroy({
      where: { id },
    });
    res.status(200).json({
      message: `Student with id ${id} deleted successfully`,
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteAllStudent = async (req, res) => {
  try {
    const deleteStudents = await Student.destroy({
      where: {},
      truncate: true,
    });
    res.status(200).json({
      message: `All students deleted successfully`,
      data: deleteStudents,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
}
};