import express from "express";
import showMentorsReviews from "../../controllers/reviews/show-mentor-reviews";
import showReview from "../../controllers/reviews/show-review";
import addReview from "../../controllers/reviews/add-review";
import deleteReview from "../../controllers/reviews/delete-review";
import updateReview from "../../controllers/reviews/update-review";
import verifyToken from "../../validation/users/compare-token";
import verifyAdminOrStudent from "../../validation/admin/verify-admin-or-user-reviews";
import studentReview from "../../validation/student/studentReview";
const router = express.Router();

router.get("/reviews/:mentorId", showMentorsReviews);
router.get("/review/:reviewId", showReview);
router.post("/review/:mentorId", [verifyToken], addReview);
router.delete("/review/:reviewId",[ verifyToken,verifyAdminOrStudent], deleteReview);
router.put("/updateReview/:reviewId", [verifyToken,studentReview], updateReview);

export default router;
