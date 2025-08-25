const express = require('express')
const { createStudent, getAStudent, getAllStudent } = require("../controller/studentController");


const router = express.Router();

router.post('/student',createStudent);
router.get("/student/:id", getAStudent)
router.get("/student", getAllStudent)

module.exports = router;
