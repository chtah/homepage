import './App.css'
import Journey from './components/Journey'
import Project from './components/Project'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Project />
      <Journey />
    </div>
  )
}

export default App
