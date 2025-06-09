import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
    setIsOpen(false)
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Home */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3" onClick={closeDropdowns}>
              <img src="/data/Logo.png" alt="University of AI" className="h-8 w-auto" />
              <span className="text-white font-bold text-lg">University of AI</span>
            </Link>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-foreground-1' : ''}`}
              onClick={closeDropdowns}
            >
              <i className="fas fa-home"></i>
              Home
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Studies Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('studies')}
                className="nav-link"
              >
                <i className="fas fa-graduation-cap"></i>
                Studies
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              {activeDropdown === 'studies' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-700 rounded-lg shadow-lg py-2 z-50">
                  <Link to="/studies/admissions" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-door-open mr-2"></i>Admissions
                  </Link>
                  <Link to="/studies/precourses" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-book-open mr-2"></i>Pre Courses
                  </Link>
                  <Link to="/studies/program" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-list mr-2"></i>Program
                  </Link>
                  <Link to="/studies/courses" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-chalkboard-teacher mr-2"></i>Programs & Courses
                  </Link>
                  <Link to="/studies/faculties" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-users mr-2"></i>Faculties & Trainers
                  </Link>
                  <Link to="/studies/entrepreneur" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-rocket mr-2"></i>Entrepreneurship
                  </Link>
                  <Link to="/studies/research" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-flask mr-2"></i>Projects & Research
                  </Link>
                </div>
              )}
            </div>

            {/* News Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('news')}
                className="nav-link"
              >
                <i className="fas fa-newspaper"></i>
                News
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              {activeDropdown === 'news' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-700 rounded-lg shadow-lg py-2 z-50">
                  <Link to="/news/students" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-user-graduate mr-2"></i>Student Life
                  </Link>
                  <Link to="/news/masterpitch" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-trophy mr-2"></i>Final Presentations Master
                  </Link>
                  <Link to="/news/bachelorpitch" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-medal mr-2"></i>Final Presentations Bachelor
                  </Link>
                  <Link to="/news/campus" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-university mr-2"></i>Virtual Campus Fair
                  </Link>
                  <Link to="/news/research" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-money-bill-wave mr-2"></i>Research Funding
                  </Link>
                  <Link to="/news/video" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-video mr-2"></i>Video Recordings
                  </Link>
                </div>
              )}
            </div>

            {/* University Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('university')}
                className="nav-link"
              >
                <i className="fas fa-building"></i>
                University
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              {activeDropdown === 'university' && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-black border border-gray-700 rounded-lg shadow-lg py-2 z-50">
                  <Link to="/about" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-info-circle mr-2"></i>About Us
                  </Link>
                  <Link to="/university/profil" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-id-card mr-2"></i>Profil
                  </Link>
                  <Link to="/university/career" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-briefcase mr-2"></i>Career
                  </Link>
                  <Link to="/university/cooperation" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-handshake mr-2"></i>Cooperation & Partners
                  </Link>
                  <Link to="/university/academic" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-microscope mr-2"></i>Academic
                  </Link>
                  <Link to="/university/feedback" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-comments mr-2"></i>Feedback
                  </Link>
                  <Link to="/university/ai-policy" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-shield-alt mr-2"></i>AI Use Policy
                  </Link>
                  <Link to="/university/contact" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-foreground-1" onClick={closeDropdowns}>
                    <i className="fas fa-envelope mr-2"></i>Contact & Support
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-foreground-1 focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => toggleDropdown('studies')}
                  className="w-full text-left nav-link justify-between"
                >
                  <span className="flex items-center gap-2">
                    <i className="fas fa-graduation-cap"></i>
                    Studies
                  </span>
                  <i className="fas fa-chevron-down text-xs"></i>
                </button>
                {activeDropdown === 'studies' && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link to="/studies/admissions" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-door-open mr-2"></i>Admissions
                    </Link>
                    <Link to="/studies/precourses" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-book-open mr-2"></i>Pre Courses
                    </Link>
                    <Link to="/studies/program" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-list mr-2"></i>Program
                    </Link>
                    <Link to="/studies/courses" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-chalkboard-teacher mr-2"></i>Programs & Courses
                    </Link>
                    <Link to="/studies/faculties" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-users mr-2"></i>Faculties & Trainers
                    </Link>
                    <Link to="/studies/entrepreneur" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-rocket mr-2"></i>Entrepreneurship
                    </Link>
                    <Link to="/studies/research" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-flask mr-2"></i>Projects & Research
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('news')}
                  className="w-full text-left nav-link justify-between"
                >
                  <span className="flex items-center gap-2">
                    <i className="fas fa-newspaper"></i>
                    News
                  </span>
                  <i className="fas fa-chevron-down text-xs"></i>
                </button>
                {activeDropdown === 'news' && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link to="/news/students" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-user-graduate mr-2"></i>Student Life
                    </Link>
                    <Link to="/news/masterpitch" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-trophy mr-2"></i>Final Presentations Master
                    </Link>
                    <Link to="/news/bachelorpitch" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-medal mr-2"></i>Final Presentations Bachelor
                    </Link>
                    <Link to="/news/campus" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-university mr-2"></i>Virtual Campus Fair
                    </Link>
                    <Link to="/news/research" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-money-bill-wave mr-2"></i>Research Funding
                    </Link>
                    <Link to="/news/video" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-video mr-2"></i>Video Recordings
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('university')}
                  className="w-full text-left nav-link justify-between"
                >
                  <span className="flex items-center gap-2">
                    <i className="fas fa-building"></i>
                    University
                  </span>
                  <i className="fas fa-chevron-down text-xs"></i>
                </button>
                {activeDropdown === 'university' && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link to="/about" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-info-circle mr-2"></i>About Us
                    </Link>
                    <Link to="/university/profil" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-id-card mr-2"></i>Profil
                    </Link>
                    <Link to="/university/career" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-briefcase mr-2"></i>Career
                    </Link>
                    <Link to="/university/cooperation" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-handshake mr-2"></i>Cooperation & Partners
                    </Link>
                    <Link to="/university/academic" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-microscope mr-2"></i>Academic
                    </Link>
                    <Link to="/university/feedback" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-comments mr-2"></i>Feedback
                    </Link>
                    <Link to="/university/ai-policy" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-shield-alt mr-2"></i>AI Use Policy
                    </Link>
                    <Link to="/university/contact" className="block text-gray-300 hover:text-foreground-1" onClick={closeDropdowns}>
                      <i className="fas fa-envelope mr-2"></i>Contact & Support
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
