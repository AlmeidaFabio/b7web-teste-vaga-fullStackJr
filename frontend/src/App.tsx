import { Link, Route, Routes } from 'react-router-dom'
import { AddNote } from './pages/AddNote'
import { EditNote } from './pages/EditNote'
import Home from './pages/Home'
import ShowNote from './pages/ShowNote'
import * as Styles from './styles/App.styles'

export default function App() {
  return(
    <Styles.Container>
      <Styles.MenuArea>
        <Styles.Logo>
          <span>Bloco</span>
          <span>de</span>
          <span>Notas</span>
        </Styles.Logo>
        <Styles.Menu>
          <Link to="/">Minhas anotações</Link>
          <Link to="/note/add">Adicionar nota</Link>
        </Styles.Menu>
      </Styles.MenuArea>
      <Styles.NotesArea>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/note/:id' element={ <ShowNote />}/>
          <Route path='/note/add' element={ <AddNote />}/>
          <Route path='/note/edit/:id' element={ <EditNote />}/>
        </Routes>
      </Styles.NotesArea>
    </Styles.Container>
  )
}
