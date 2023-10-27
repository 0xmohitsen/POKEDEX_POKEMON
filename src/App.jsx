// CSS imports
import { Route, Routes } from 'react-router-dom';
import './App.css'
import PokeDex from './components/PokeDex/PokeDex';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

function App() {

  return (
    <Routes>
      <Route path='/' element={<PokeDex/>}/>
      <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
      <Route path='*' element={<h1>Oops!! page not found</h1>}/>
    </Routes>
  )
}

export default App
