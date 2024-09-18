import express from "express";
import { addLecture, createCourses, deleteCourses, deleteLecture, getAllCourses, getCourseLectures } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin, isAuthenticated, authorizeSubscribers } from "../middlewares/Auth.js";

const router = express.Router();

// Get All courses without lectures
router.route("/courses").get(getAllCourses);

// create new course only admin
router.route("/createcourses").post( isAuthenticated, authorizeAdmin, singleUpload, createCourses);

//Add Lecture, Delete Course, Get course Details
router.route("/course/:id")
   .get( isAuthenticated, authorizeSubscribers, getCourseLectures)
   .post( isAuthenticated, authorizeAdmin, singleUpload, addLecture)
   .delete(isAuthenticated, authorizeAdmin, deleteCourses);

// Delete Lectures
router.route("/lecture")
      .delete(isAuthenticated, authorizeAdmin, deleteLecture)

export default router;