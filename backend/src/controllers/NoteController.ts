import { Request, Response } from "express";
import { NotesService } from "../services/NotesService";
import { NoteDataTypes } from "../types/NoteDataTypes";

export class NoteController {

    async create(request: Request, response:Response ) {
        const { title, body, bg_color } = request.body;

        const data: NoteDataTypes = {
            title,
            body,
            bg_color
        }

        try {
            const newNote = await new NotesService().createNote(data)

            return response.status(201).json(newNote)
        } catch (error) {
            return response.status(400).json(error.message)
        }
    }

    async read(request: Request, response:Response) {
        try {
            const notes = await new NotesService().getNotes()

            return response.status(200).json(notes)
        } catch (error) {
            return response.status(400).json(error.message)
        }

    }

    async readOne(request: Request, response:Response) {
        const { id } = request.params

        try {
            const note = await new NotesService().getNoteById(parseInt(id))

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

        const data: NoteDataTypes = {
            title,
            body,
            bg_color
        }

        try {
            const note = await new NotesService().getNoteById(parseInt(id))

            if(note) {
                await new NotesService().editNote(parseInt(id), data)

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
            const note = await new NotesService().getNoteById(parseInt(id))

            if(note) {
                await new NotesService().removeNote(parseInt(id))

                return response.status(200).json({message: 'Nota deletada com sucesso.'})
            } else {
                return response.status(400).json({error: 'Esta nota não existe'})
            }
            
        } catch (error) {
            return response.status(400).json(error.message)
        }
    }
}