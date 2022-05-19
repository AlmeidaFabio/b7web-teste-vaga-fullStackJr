import { FormEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useNote } from '../../hooks/useNote'
import * as Styles from '../../styles/Form.styles'

export function EditNote() {
    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')
    const [ bgColor, setBgColor ] = useState('#ffffff')
    const navigate = useNavigate()
    const { note, getNoteById, editNote, error } = useNote()

    let params = useParams()
    let id = params.id

    async function getNote() {
        if(id) {
            getNoteById(id)

            if(note) {
                setTitle(note.title)
                setBody(note.body)
                setBgColor(note.backgroundColor)
            }
        }
    }

    async function handleSubmit(e:FormEvent) {
        e.preventDefault()

        const data = {
            title,
            body,
            bg_color: bgColor
        }

        if(id) {
            editNote(id, data)
        }

        if(error) {
            alert('Ocorreu um erro, tente novamente!')
            navigate(`note/edit/${id}`)
        }

        alert('Anotação editada com sucesso!')
        navigate(`/note/${id}`)
    }

    useEffect(() => {
        getNote()
    },[id])

    return (
        <Styles.FormContainer>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input 
                    type="text" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                    />
                </label>
                <label>
                    <span>Nota:</span>
                    <textarea
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    >
                        {body}
                    </textarea>
                </label>
                <label>
                    <span>Cor de fundo:</span>
                    
                    <select value={bgColor} onChange={e => setBgColor(e.target.value)}>
                        <option>Branco</option>

                        <option value="#a6fa09">Verde</option>

                        <option value="#cbd561">Amarelo</option>

                        <option value="#f945ae">Rosa</option>

                        <option value="#ff4a4a">Vermelho</option>

                        <option value="#09aafa">Azul</option>
                    </select>
                    
                </label>
                <button type="submit">Salvar</button>
            </form>
        </Styles.FormContainer>
    )
}