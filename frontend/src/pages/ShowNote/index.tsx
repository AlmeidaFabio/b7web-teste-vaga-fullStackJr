import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNote } from "../../hooks/useNote"
import * as Styles from './styles'

export default function ShowNote() {
    let params = useParams()
    let id = params.id
    const { getNoteById, note } = useNote()

    async function loadNote() {
        if(id) {
            getNoteById(id)
        }
    }

    useEffect(() => {
        loadNote()
    }, [id])

    return(
        <Styles.Container>
            {note && (
                <>
                    <h4>{ note.title }</h4>
                    <p>{ note.body }</p>
                </>
            )}
        </Styles.Container>
    )
}