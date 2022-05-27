import { Router } from "express";
import { noteController } from "../controllers";

const router = Router();

router.post('/note', noteController.create)
router.get('/notes', noteController.read)
router.get('/note/:id', noteController.readOne)
router.put('/note/:id', noteController.update)
router.delete('/note/:id', noteController.delete)

export { router }