import { Repository } from "typeorm";
import { AppDataSource } from "../database";
import { Note } from "../entities/Note";
import { NoteDataTypes } from "../types/NoteDataTypes";

export class NotesService {
    private notesRepository: Repository<Note>;

    constructor() {
        this.notesRepository = AppDataSource.getRepository(Note)
    }

    async createNote(data: NoteDataTypes) {        
        const note = this.notesRepository.create({
            title: data.title,
            body: data.body,
            backgroundColor: data.bg_color
        })

        return await this.notesRepository.save(note).catch(error => error)        
    }

    async getNotes() {
        return await this.notesRepository.find({
            order: {id: "desc"}
        }).catch(error => error)
    }

    async getNoteById(id:number) {
        return await this.notesRepository.findOne({
            where: {
                id: id
            }
        }).catch(error => error)
    }

    async editNote(id:number, data: NoteDataTypes) {
        return await this.notesRepository.update(id, {
            title: data.title,
            body: data.body,
            backgroundColor: data.bg_color
        }).catch(error => error)
    }

    async removeNote(id:number) {
        return await this.notesRepository.delete(id).catch(error => error)
    }
}