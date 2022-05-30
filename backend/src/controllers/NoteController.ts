import { Request, Response } from "express";
import { NoteService } from "../services/NoteService";
import { NoteDTO } from "../dtos/NoteDTO";
export class NoteController { 
    constructor(private noteService: NoteService) {
        this.create = this.create.bind(this); 
        this.delete = this.delete.bind(this); 
        this.read = this.read.bind(this); 
        this.readOne = this.readOne.bind(this); 
        this.update = this.update.bind(this); 
    }

    async create(request: Request, response:Response ) {
        const { title, body, bg_color } = request.body;

        const data: NoteDTO = {
            title,
            body,
            backgroundColor: bg_color
        }

        try {
            const newNote = await this.noteService.createNote(data)

            return response.status(201).json(newNote)
        } catch (error) {
            return response.status(400).json(error.message)
        }
    }

    async read(request: Request, response:Response) {
        try {
            const notes = await this.noteService.getNotes()

            return response.status(200).json(notes)
        } catch (error) {
            return response.status(400).json(error.message)
        }

    }

    async readOne(request: Request, response:Response) {
        const { id } = request.params

        try {
            const note = await this.noteService.getNoteById(parseInt(id))

            if(note) {
                return response.status(200).json(note)
            } else {
                return response.status(400).json({error: 'Esta nota não existe'})
            }
        } catch (error) {
            return response.status(400).json(error.message)
        }
    }

    async update(request: Request, response:Response) {
        const { id } = request.params
        const { title, body, bg_color } = request.body;

        const data: NoteDTO = {
            title,
            body,
            backgroundColor: bg_color
        }

        try {
            const note = this.noteService.getNoteById(parseInt(id))

            if(note) {
                await this.noteService.editNote(parseInt(id), data)

                return response.status(200).json({message: 'Nota editada com sucesso.'})
            } else {
                return response.status(400).json({error: 'Esta nota não existe'})
            }
        } catch (error) {
            return response.status(400).json(error.message)
        }
    }

    async delete(request: Request, response:Response) {
        const { id } = request.params

        try {          
            const note = this.noteService.getNoteById(parseInt(id))

            if(note) {
                await this.noteService.removeNote(parseInt(id))

                return response.status(200).json({message: 'Nota deletada com sucesso.'})
            } else {
                return response.status(400).json({error: 'Esta nota não existe'})
            }
            
        } catch (error) {
            return response.status(400).json(error.message)
        }
    }
}