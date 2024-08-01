import './App.css'
import { HashRouter, Route, Routes, } from'react-router-dom'
import Home from './elements/Home'
import Login from './elements/Login'
import Register from './elements/Register'
import RegisterFail from './elements/RegisterFail'
import LoginFail from './elements/LoginFail.jsx'
import HobbyQIndex from './elements/HobbyQIndex'
import HobbyQ from './elements/HobbyQ'
import Note from './elements/Note'


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="hobbyQ-frontend/register/fail" element={<RegisterFail />} />
        <Route path="/login" element={<Login />} />
        <Route path="hobbyQ-frontend/login/fail" element={<LoginFail />} />
        <Route path="hobbyQ-frontend/:username/hobbyQ" element={<HobbyQIndex />} />
        <Route path="hobbyQ-frontend/:username/hobbyQ/:hobbyQName" element={<HobbyQ />} />
        <Route path="hobbyQ-frontend/:username/hobbyQ/:hobbyQName/:title" element={<Note />} />
        <Route path="*" element={<div>1</div>} />
      </Routes>
    </HashRouter>
  );
}

export default App
















