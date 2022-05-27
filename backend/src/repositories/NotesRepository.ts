import { Note } from "../entities/Note";
import { NoteDTO } from "../dtos/NoteDTO";

export interface INotesRepository {
    createNote: (data: NoteDTO) => Promise<void>;
    getNotes: () => Promise<Note[]>;
    getNoteById: (id:number) => Promise<Note>;
    editNote: (id: number, data: NoteDTO) => Promise<void>;
    removeNote: (id: number) => Promise<void>;
}