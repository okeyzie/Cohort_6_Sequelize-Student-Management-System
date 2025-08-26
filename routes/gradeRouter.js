const express = require('express');
const { createGrade, getAGrade, getAllGrades, updateGrade ,deleteGrade, getTotalGrades} = require("../controller/gradeController");

const router = express.Router();

router.post('/grade/:id', createGrade);
router.get('/grade/:id', getAGrade);
router.get('/grades/:id', getAllGrades);
router.patch('/grade/:id', updateGrade);
router.delete('/grade/:id', deleteGrade);
router.get('/grade-total/:id', getTotalGrades);

module.exports = router;
