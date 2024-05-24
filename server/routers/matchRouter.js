import { Router } from "express";
import {
  DeleteMatch,
  UpdateMatch,
  createMatch,
  getAllMatch,
  getByIdMatch,
} from "../controllers/controllerMatch.js";
import { verifyTokenAndAdmin } from "../middlewares/auth.Middleware.js";

const routeMatch = Router();

routeMatch.route("/").post(verifyTokenAndAdmin, createMatch).get(getAllMatch);
routeMatch
  .route("/:id")
  .put(verifyTokenAndAdmin, UpdateMatch)
  .delete(verifyTokenAndAdmin, DeleteMatch)
  .get(verifyTokenAndAdmin, getByIdMatch);

export default routeMatch;
