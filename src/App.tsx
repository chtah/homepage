import './App.css'
import Footer from './components/Footer'
import Journey from './components/Journey'
import Project from './components/Project'
import Skill from './components/Skill'
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
      <Skill />
      <Footer />
    </div>
  )
}

export default App
