import express from "express";
import { getProduit, getProduits } from "../controllers/produitsController.js";

const router = express.Router();

router.get("/", getProduits);
router.get("/:id", getProduit);

export default router;
