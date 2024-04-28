import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectionDB from "./config/Db.js";
import { handlerError, notFound } from "./middlewares/handlerError.js";
import routeMatch from "./routers/matchRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration CORS
app.use(cors());

// Connection à la base de données
connectionDB();

// Middleware
app.use(express.json());

// Router
app.use("/api/match", routeMatch);
// Page Not Found
app.use(notFound);

// Gestionnaire d'erreurs
app.use(handlerError);

// Démarrage du serveur
mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
