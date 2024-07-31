import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useParams } from'react-router-dom'
import axios from 'axios'
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
    <BrowserRouter>
      <Routes basename="/hobbyQ-frontend">
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/fail" element={<RegisterFail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/fail" element={<LoginFail />} />
        <Route path="/:username/hobbyQ" element={<HobbyQIndex />} />
        <Route path="/:username/hobbyQ/:hobbyQName" element={<HobbyQ />} />
        <Route path="/:username/hobbyQ/:hobbyQName/:title" element={<Note />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
















