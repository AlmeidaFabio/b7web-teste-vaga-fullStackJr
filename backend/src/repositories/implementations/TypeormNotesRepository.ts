import { Repository } from "typeorm"
import { AppDataSource } from "../../database"
import { Note } from "../../entities/Note"
import { NoteDTO } from "../../dtos/NoteDTO"
import { INotesRepository } from "../NotesRepository"

export class TypeormNotesRepository implements INotesRepository {
    private notesRepository: Repository<Note>

    constructor() {
        this.notesRepository = AppDataSource.getRepository(Note)
    }

    async createNote(data: NoteDTO): Promise<void> {
        const note = this.notesRepository.create({
            title: data.title,
            body: data.body,
            backgroundColor: data.backgroundColor
        })

        await this.notesRepository.save(note)

        return
    }

    async getNotes(): Promise<Note[]> {
        const notes = await this.notesRepository.find()

        return notes
    }

    async getNoteById(id: number): Promise<Note> {
        const note = await this.notesRepository.findOne({
            where: {
                id
            }
        })

        return note
    }

    async editNote(id: number, data: NoteDTO): Promise<void> {
        await this.notesRepository.update(id, {
            title: data.title,
            body: data.body,
            backgroundColor: data.backgroundColor
        })

        return
    }

    async removeNote(id: number): Promise<void> {
        await this.notesRepository.delete(id)

        return
    }
}