import express from "express";
import { authFunction } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/auth/:role", authFunction);

export default router;
