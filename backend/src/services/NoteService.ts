import { INotesRepository } from "../repositories/NotesRepository";
import { NoteDTO } from "../dtos/NoteDTO";

export class NoteService {
    constructor(private notesRepository: INotesRepository) {}

    async createNote(data: NoteDTO) {        
        return await this.notesRepository.createNote(data).catch(error => error)      
    }

    async getNotes() {
        return await this.notesRepository.getNotes().catch(error => error)
    }

    async getNoteById(id:number) {
        return await this.notesRepository.getNoteById(id).catch(error => error)
    }

    async editNote(id:number, data: NoteDTO) {
        return await this.notesRepository.editNote(id, data).catch(error => error)
    }

    async removeNote(id:number) {
        return await this.notesRepository.removeNote(id).catch(error => error)
    }
}