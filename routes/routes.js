import express from "express";
import {
  getTest,
  postTest,
  addRoom,
  getRooms,
  getRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/roomControllers.js";
import { catchErrors } from "../helpers.js";

// Path avec ES Module
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello ça marche !! <br> <a href='/rooms'>Rooms</a>");
});

router.get("/test", getTest);

router.post("/test", postTest);

router.post("/rooms", catchErrors(addRoom));

router.get("/rooms/:id", catchErrors(getRoom));

router.patch("/rooms/:id", catchErrors(updateRoom));

router.get("/rooms", catchErrors(getRooms));

router.delete("/rooms/:id", catchErrors(deleteRoom));

export default router;
