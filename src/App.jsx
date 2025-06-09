import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Admissions from './pages/Admissions'
import PreCourses from './pages/PreCourses'
import Program from './pages/Program'
import Courses from './pages/Courses'
import Faculties from './pages/Faculties'
import Entrepreneur from './pages/Entrepreneur'
import Research from './pages/Research'
import Students from './pages/Students'
import MasterPitch from './pages/MasterPitch'
import BachelorPitch from './pages/BachelorPitch'
import Campus from './pages/Campus'
import ResearchFunding from './pages/ResearchFunding'
import Video from './pages/Video'
import Profil from './pages/Profil'
import Career from './pages/Career'
import Cooperation from './pages/Cooperation'
import Academic from './pages/Academic'
import Feedback from './pages/Feedback'
import AiPolicy from './pages/AiPolicy'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/studies/admissions" element={<Admissions />} />
            <Route path="/studies/precourses" element={<PreCourses />} />
            <Route path="/studies/program" element={<Program />} />
            <Route path="/studies/courses" element={<Courses />} />
            <Route path="/studies/faculties" element={<Faculties />} />
            <Route path="/studies/entrepreneur" element={<Entrepreneur />} />
            <Route path="/studies/research" element={<Research />} />
            <Route path="/news/students" element={<Students />} />
            <Route path="/news/masterpitch" element={<MasterPitch />} />
            <Route path="/news/bachelorpitch" element={<BachelorPitch />} />
            <Route path="/news/campus" element={<Campus />} />
            <Route path="/news/research" element={<ResearchFunding />} />
            <Route path="/news/video" element={<Video />} />
            <Route path="/university/profil" element={<Profil />} />
            <Route path="/university/career" element={<Career />} />
            <Route path="/university/cooperation" element={<Cooperation />} />
            <Route path="/university/academic" element={<Academic />} />
            <Route path="/university/feedback" element={<Feedback />} />
            <Route path="/university/ai-policy" element={<AiPolicy />} />
            <Route path="/university/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
