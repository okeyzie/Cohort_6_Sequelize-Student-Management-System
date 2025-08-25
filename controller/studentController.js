const student = require("../models/students");
const Student = require("../models/students")

exports.createStudent = async (req,res) => {
    try {
        const {fullName,stack,gender,centre,email}= req.body;
         const student = await Student.create({fullName,stack,gender,centre,email});
         res.status(201).json({message:`Student created successfully`, data:student})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.getAStudent = async (req,res)=>{
    try {
        const {id} = req.params
        const student = await Student.findByPk(id)
        res.status(200).json({
            message: "Student below",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.getAllStudent = async(req,res)=>{
    try {
        // const {fullName, email, stack, gender, centre} = req.body
        const student = await Student.findAll()
        res.status(200).json({
            message: "All students found",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}