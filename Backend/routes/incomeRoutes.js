const express = require("express");

const {
    addIncome,
    getAllincome,
    deleteIncome,
    downloadIncomeExcel,
} = require("../controllers/incomeControllers");

const {protect} = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/add",protect, addIncome);
router.get("/get",protect, getAllincome);
router.delete("/:id",protect, deleteIncome);
router.get("/downloadexcel",protect, downloadIncomeExcel);


module.exports = router;