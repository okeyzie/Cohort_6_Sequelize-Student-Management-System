const express = require('express')
const { createStudent, getAStudent, getAllStudent, updateStudent, deleteAStudent } = require("../controller/studentController");


const router = express.Router();

router.post("/student",createStudent);
router.get("/student/:id", getAStudent);
router.get("/student", getAllStudent);
router.patch("/student/:id", updateStudent);
router.delete("/student/:id", deleteAStudent);

module.exports = router;
