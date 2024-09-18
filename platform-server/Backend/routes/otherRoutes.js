import express from "express";

import { authorizeAdmin, isAuthenticated } from "../middlewares/Auth.js";
import { contact, courseRequest, getDashboardStats } from "../controllers/otherControllers.js";

const router = express.Router();

// Contact form
router.route("/contact").post(contact);

// Request form
router.route("/courserequest").post(courseRequest);

// Get Admin Dashboard stats
router.route("/admin/stats").get(isAuthenticated, authorizeAdmin, getDashboardStats);

export default router;