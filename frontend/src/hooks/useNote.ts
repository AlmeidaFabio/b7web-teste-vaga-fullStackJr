import { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";

export function useNote() {
    const value = useContext(NoteContext);

    return value;
}