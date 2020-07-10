import * as express from "express";
import db from "../db";

const router = express.Router();

// GET /api/chirps/1 or GET /api/chirps
router.get("/:id?", async (req, res, next) => {
  const id = Number(req.params.id);
  if (id) {
    try {
      const [chirp] = await db.chirps.one(id);
      res.json(chirp);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const chirps = await db.chirps.all();
      res.json(chirps);
    } catch (error) {
      next(error);
    }
  }
});

// POST /api/chirps/
router.post("/", async (req, res, next) => {
  const chirp = req.body;
  console.log(chirp)
  try {
    const result = await db.chirps.insert(chirp.userid, chirp.content);
    res.json({ id: result.insertId });
  } catch (error) {
    next(error);
  }
});

// PUT /api/chirps/1
router.put("/:id", async (req, res, next) => {
  const id = Number(req.params.id);
  const chirp = req.body;
  try {
    await db.chirps.update(id, chirp.content);
    res.json({ msg: "edited", id });
  } catch (error) {
    next(error);
  }
});

// DELETE /api/chirps/1
router.delete("/:id", async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    await db.chirps.destroy(id);
    res.json({ msg: "destroyed" });
  } catch (error) {
    next(error);
  }
});

export default router;
