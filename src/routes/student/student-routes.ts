import express from "express";
import { addStudent } from "../../controllers/students/add-student";
import { listStudent } from "../../controllers/students/get-student";
import { listStudents } from "../../controllers/students/get-students";
import { deleteStudent } from "../../controllers/students/delete-student";
import { updateStudent } from "../../controllers/students/update-student";
import verifyToken from "../../validation/users/compare-token";

const router = express.Router();

router.get("/listStudents", listStudents);
router.get("/listStudent/:id", listStudent);
router.post("/addStudent", addStudent);
router.delete("/removeStudent/:id",[verifyToken], deleteStudent);//admin only or student it self
router.patch("/updateStudent/:id", [verifyToken],updateStudent);//admin or student itself

export default router;
