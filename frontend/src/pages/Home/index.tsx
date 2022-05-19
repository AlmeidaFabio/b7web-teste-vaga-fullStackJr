import { Link } from "react-router-dom";
import * as Styles from './styles'
import { useNote } from "../../hooks/useNote";

export default function Home() {
    const { notes, deleteNote } = useNote();
    
    return(
        <>
            {notes.length > 0 ? (
                <>
                    {notes.map(note => (
                        <Styles.NoteContainer key={note.id} bg={note.backgroundColor}>
                            <div className="content">
                                <h4>{note.title}</h4>
                                <p>{note.body}</p>
                            </div>
                            <div className="buttons-area">
                                <Link to={`/note/${note.id}`}>Ver nota</Link>
                                <Link to={`/note/edit/${note.id}`}>Editar</Link>
                                <button type='button' onClick={() => deleteNote(note.id)}>Deletar</button>
                            </div>
                        </Styles.NoteContainer>
                    ))}
                </>
            ) : (
                <p>Sem notas</p>
            )}
        </>
    ) 
}