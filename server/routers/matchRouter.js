import { Router } from "express";
import { createMatch } from "../controllers/controllerMatch";

const routeMatch = Router();

routeMatch.route("/").post(createMatch);

export default routeMatch;
