import express from "express";
import login from "../../controllers/logIn/login";
import forget from "../../controllers/logIn/forget";
import reset from "../../controllers/logIn/reset";
const router = express.Router();

router.post("/login", login);
router.post("/users/forget", forget);
router.post("/users/reset", reset);

export default router;
