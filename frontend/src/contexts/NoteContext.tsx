import { createContext, useEffect, useState } from "react";
import{ NoteDataTypes } from '../types/NoteDataTypes'
import { api } from "../services/Api";

interface RequestData {
    title:string;
    body:string;
    bg_color:string;
}

type NoteContextTypes = {
    notes: NoteDataTypes[];
    note: NoteDataTypes | null;
    addNote:(data:RequestData) => void;
    getNoteById:(id:string) => void;
    editNote:(id:string, data:RequestData) => void;
    deleteNote:(id:string) => void;
    error: boolean;
}

type NoteContextProviderProps = {
    children: JSX.Element;
}

export const NoteContext = createContext({} as NoteContextTypes)

export function NoteContextProvider(props: NoteContextProviderProps) {
    const [ notes, setNotes ] = useState<NoteDataTypes[]>([])
    const [ note, setNote ] = useState<NoteDataTypes | null>(null)
    const [ error, setError ] = useState(false)
    
    async function addNote(data:RequestData) {
        const response = await api.post('note', {
            title: data.title,
            body: data.body,
            bg_color: data.bg_color
        })

        if(response.data.error) {
            setError(true)

            return
        }

        setError(false)
        loadNotes()
        
        return
    }

    async function loadNotes() {
        const res = await api.get('notes')

        setNotes(res.data)
    }

    async function getNoteById(id:string) {
        const res = await api.get(`note/${id}`)

        setNote(res.data)
    }

    async function editNote(id:string, data:RequestData) {
        const response = await api.put(`note/${id}`, {
            title: data.title,
            body: data.body,
            bg_color: data.bg_color
        })

        if(response.data.error) {
            setError(true)

            return
        }

        setError(false)

        return
    }

    async function deleteNote(id:string) {
        await api.delete(`note/${id}`)

        window.location.href = window.location.href
    }

    useEffect(() => {
        loadNotes()
    },[])
    
    return(
        <NoteContext.Provider value={{
            notes,
            note,
            getNoteById,
            addNote,
            editNote,
            deleteNote,
            error
        }}>
            { props.children }
        </NoteContext.Provider>
    )
}