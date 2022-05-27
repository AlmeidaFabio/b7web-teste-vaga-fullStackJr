import { NoteController } from "./NoteController";
import { TypeormNotesRepository } from "../repositories/implementations/TypeormNotesRepository";
import { NoteService } from "../services/NoteService";

const typeormNotesRepository = new TypeormNotesRepository();

const noteService = new NoteService(
    typeormNotesRepository
)

const noteController = new NoteController(
    noteService
)

export { noteService, noteController }