import * as express from 'express';
import db from '../db';

const router = express.Router();

// GET /api/users/1 or GET /api/users
router.get('/:id?', async (req, res, next) => {
	const id = Number(req.params.id);
	if (id) {
		try {
			const [user] = await db.users.one(id);
			//DO NOT SEND A PASSWORD IN YOUR RESPONSE
			res.json(user);
		} catch (error) {
			next(error);
		}
	} else {
		try {
			const users = await db.users.all();
			res.json(users);
		} catch (error) {
			next(error);
		}
	}
});

// POST /api/users/
router.post("/", async (req, res, next) => {
	const user = req.body;
	try {
	  const result = await db.users.newuser(user.name);
	  res.json({ username: user.name });
	} catch (error) {
	  next(error);
	}
  });
  

export default router;