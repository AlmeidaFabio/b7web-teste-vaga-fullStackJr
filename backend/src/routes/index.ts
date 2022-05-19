import { Router } from "express";
import { NoteController } from "../controllers/NoteController";

const router = Router();

router.post('/note', new NoteController().create)
router.get('/notes', new NoteController().read)
router.get('/note/:id', new NoteController().readOne)
router.put('/note/:id', new NoteController().update)
router.delete('/note/:id', new NoteController().delete)

export { router }