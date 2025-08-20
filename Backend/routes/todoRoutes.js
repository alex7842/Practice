const express = require("express")
const router = express.Router();
const { getData,createData,updateData} =require("../controller/toDoController")
const TODO = require("../models/todoModal")

router.get("/get",getData)
router.post("/create", createData)
router.patch("/update/:id",updateData)

module.exports=router;