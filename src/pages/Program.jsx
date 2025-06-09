import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const Program = () => {
  const [programs, setPrograms] = useState([])
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('title')
  const [sortOrder, setSortOrder] = useState('asc')
  const [selectedProgram, setSelectedProgram] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch('/data/program.json')
        const data = await response.json()
        setPrograms(data.programs)
        setFilteredPrograms(data.programs)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching programs:', error)
        setLoading(false)
      }
    }

    fetchPrograms()
  }, [])

  useEffect(() => {
    let filtered = programs.filter(program =>
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.degree.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Sort the filtered results
    filtered.sort((a, b) => {
      let aValue = a[sortBy]
      let bValue = b[sortBy]
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })

    setFilteredPrograms(filtered)
  }, [programs, searchTerm, sortBy, sortOrder])

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
  }

  const openModal = (program) => {
    // Create a program object with default values for missing fields
    const programWithDefaults = {
      ...program,
      description: program.description || "Program description will be available soon.",
      curriculum: program.curriculum || ["Curriculum details will be updated soon."],
      career_prospects: program.career_prospects || ["Career information will be available soon."]
    };
    setSelectedProgram(programWithDefaults)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedProgram(null)
  }

  const getSortIcon = (field) => {
    if (sortBy !== field) return 'fas fa-sort text-gray-500'
    return sortOrder === 'asc' ? 'fas fa-sort-up text-foreground-1' : 'fas fa-sort-down text-foreground-1'
  }

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'bachelor': return 'bg-green-600'
      case 'master': return 'bg-blue-600'
      case 'mba': return 'bg-purple-600'
      default: return 'bg-gray-600'
    }
  }

  const programCategories = [
    {
      title: "Fundamentals of AI & Machine Learning",
      icon: "fa-brain",
      color: "foreground-1",
      description: "Core AI concepts, algorithms, and machine learning foundations"
    },
    {
      title: "AI in Software Engineering & Automation",
      icon: "fa-code",
      color: "foreground-2",
      description: "Integrating AI into software development and automation workflows"
    },
    {
      title: "Data Science, Big Data & AI Modeling",
      icon: "fa-database",
      color: "foreground-1",
      description: "Advanced data analysis, big data processing, and AI model development"
    },
    {
      title: "AI & Society (Ethics, Law, Governance)",
      icon: "fa-balance-scale",
      color: "foreground-2",
      description: "Ethical AI development, legal frameworks, and governance structures"
    },
    {
      title: "Creative AI: Design, Audio/Video & Generative Media",
      icon: "fa-palette",
      color: "foreground-1",
      description: "AI applications in creative fields and generative content creation"
    },
    {
      title: "AI Agent Engineering & Autonomous Systems",
      icon: "fa-robot",
      color: "foreground-2",
      description: "Building intelligent agents and autonomous system architectures"
    },
    {
      title: "Innovation Management & AI Strategy",
      icon: "fa-lightbulb",
      color: "foreground-1",
      description: "Strategic AI implementation and innovation management"
    },
    {
      title: "Applied Research & Industry Collaboration",
      icon: "fa-flask",
      color: "foreground-2",
      description: "Real-world research projects with industry partners"
    }
  ]

  const highlights = [
    {
      icon: "fa-project-diagram",
      title: "Project-based learning using real AI tools",
      description: "Hands-on experience with cutting-edge AI technologies"
    },
    {
      icon: "fa-globe-americas",
      title: "Collaborative tracks with industry & global researchers",
      description: "Work directly with professionals and researchers worldwide"
    },
    {
      icon: "fa-rocket",
      title: "Fast-track for professionals with prior AI experience",
      description: "Accelerated programs for experienced practitioners"
    },
    {
      icon: "fa-shield-alt",
      title: "Compliance & Ethics built into every specialization",
      description: "Responsible AI development integrated throughout"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-book text-foreground-1 mr-4"></i>
            Academic Program Framework
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-4"
          >
            University of AI
          </GradientText>
          <p className="text-2xl text-gray-300 mb-8">
            Flexible. Modular. AI-native.
          </p>
        </div>

        {/* Program Overview */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-graduation-cap text-foreground-1 mr-3"></i>
              Program Overview
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              The academic program at the University of AI is structured to guide students through 
              foundational knowledge, advanced application, and research-driven innovation. It spans 
              Bachelor's, Master's, and Certificate levels, each combining AI theory with practical, 
              tool-based skills.
            </p>
            <div className="bg-accent rounded-lg p-6">
              <p className="text-white text-center font-medium text-lg">
                <i className="fas fa-info-circle text-foreground-1 mr-2"></i>
                All programs are modular, credit-based, and offered fully online — enabling 
                asynchronous learning and real-time collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Program Categories */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-list-alt text-foreground-2 mr-3"></i>
            Program Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programCategories.map((category, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`bg-${category.color} rounded-full p-3`}>
                    <i className={`fas ${category.icon} text-black text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Structure */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-table text-foreground-1 mr-3"></i>
              Program Structure
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Explore our comprehensive degree programs with detailed information about duration, 
              language, credits, and admission requirements.
            </p>
            
            {/* Search and Filter Controls */}
            <div className="mb-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Search programs by title, type, language, or degree..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-foreground-1"
                  />
                </div>
              </div>
              <div className="text-gray-300 flex items-center">
                <i className="fas fa-filter mr-2 text-foreground-1"></i>
                {filteredPrograms.length} of {programs.length} programs
              </div>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <i className="fas fa-spinner fa-spin text-4xl text-foreground-1 mb-4"></i>
                <p className="text-lg font-medium text-white mb-2">Loading Programs...</p>
                <p className="text-gray-400">Please wait while we fetch the program data.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full bg-gray-900 rounded-lg border border-gray-700">
                  <thead>
                    <tr className="bg-gray-800">
                      <th 
                        className="px-6 py-4 text-left text-white font-bold cursor-pointer hover:bg-gray-700 transition-colors"
                        onClick={() => handleSort('title')}
                      >
                        <div className="flex items-center gap-2">
                          Program Title
                          <i className={getSortIcon('title')}></i>
                        </div>
                      </th>
                      <th 
                        className="px-6 py-4 text-left text-white font-bold cursor-pointer hover:bg-gray-700 transition-colors"
                        onClick={() => handleSort('type')}
                      >
                        <div className="flex items-center gap-2">
                          Type
                          <i className={getSortIcon('type')}></i>
                        </div>
                      </th>
                      <th 
                        className="px-6 py-4 text-left text-white font-bold cursor-pointer hover:bg-gray-700 transition-colors"
                        onClick={() => handleSort('duration_semesters')}
                      >
                        <div className="flex items-center gap-2">
                          Duration
                          <i className={getSortIcon('duration_semesters')}></i>
                        </div>
                      </th>
                      <th 
                        className="px-6 py-4 text-left text-white font-bold cursor-pointer hover:bg-gray-700 transition-colors"
                        onClick={() => handleSort('language')}
                      >
                        <div className="flex items-center gap-2">
                          Language
                          <i className={getSortIcon('language')}></i>
                        </div>
                      </th>
                      <th 
                        className="px-6 py-4 text-left text-white font-bold cursor-pointer hover:bg-gray-700 transition-colors"
                        onClick={() => handleSort('credits_ects')}
                      >
                        <div className="flex items-center gap-2">
                          ECTS Credits
                          <i className={getSortIcon('credits_ects')}></i>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-white font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPrograms.length === 0 ? (
                      <tr className="border-t border-gray-700">
                        <td className="px-6 py-8 text-gray-300 text-center" colSpan="6">
                          <i className="fas fa-search text-3xl text-gray-500 mb-3"></i>
                          <p className="text-lg font-medium text-white mb-2">No programs found</p>
                          <p className="text-gray-400">Try adjusting your search terms</p>
                        </td>
                      </tr>
                    ) : (
                      filteredPrograms.map((program, index) => (
                        <tr key={index} className="border-t border-gray-700 hover:bg-gray-800 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <h3 className="text-white font-semibold text-lg">{program.title}</h3>
                              <p className="text-gray-400 text-sm">{program.degree}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getTypeColor(program.type)}`}>
                              {program.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-300">
                            {program.duration_semesters} semesters
                          </td>
                          <td className="px-6 py-4 text-gray-300">
                            <div className="flex items-center gap-2">
                              <i className="fas fa-globe text-foreground-1"></i>
                              {program.language}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-300">
                            {program.credits_ects} ECTS
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => openModal(program)}
                              className="bg-foreground-1 hover:bg-blue-600 text-black hover:text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                            >
                              <i className="fas fa-eye"></i>
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* Program Details Modal */}
        {showModal && selectedProgram && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProgram.title}</h2>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getTypeColor(selectedProgram.type)}`}>
                      {selectedProgram.type}
                    </span>
                    <span className="text-gray-300">{selectedProgram.degree}</span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="p-6">
                {/* Program Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fas fa-clock text-foreground-1"></i>
                      <h3 className="text-white font-semibold">Duration</h3>
                    </div>
                    <p className="text-gray-300">{selectedProgram.duration_semesters} semesters</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fas fa-globe text-foreground-1"></i>
                      <h3 className="text-white font-semibold">Language</h3>
                    </div>
                    <p className="text-gray-300">{selectedProgram.language}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fas fa-certificate text-foreground-1"></i>
                      <h3 className="text-white font-semibold">ECTS Credits</h3>
                    </div>
                    <p className="text-gray-300">{selectedProgram.credits_ects} credits</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className="fas fa-info-circle text-foreground-1"></i>
                    Program Description
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProgram.description}</p>
                </div>

                {/* Admission Requirements */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className="fas fa-user-check text-foreground-1"></i>
                    Admission Requirements
                  </h3>
                  <p className="text-gray-300">{selectedProgram.admission}</p>
                </div>

                {/* Curriculum */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className="fas fa-list text-foreground-2"></i>
                    Curriculum Highlights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProgram.curriculum.map((course, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-3 flex items-center gap-3">
                        <i className="fas fa-check-circle text-foreground-2"></i>
                        <span className="text-gray-300">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Prospects */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className="fas fa-briefcase text-foreground-1"></i>
                    Career Prospects
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProgram.career_prospects.map((career, index) => (
                      <span key={index} className="bg-foreground-1 text-black px-3 py-2 rounded-lg font-medium">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
                  <Link
                    to="/studies/admissions"
                    className="btn-primary flex items-center justify-center gap-2 flex-1"
                    onClick={closeModal}
                  >
                    <i className="fas fa-paper-plane"></i>
                    Apply for this Program
                  </Link>
                  <button
                    onClick={closeModal}
                    className="btn-secondary flex items-center justify-center gap-2 flex-1"
                  >
                    <i className="fas fa-arrow-left"></i>
                    Back to Programs
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Program Levels */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-layer-group text-foreground-2 mr-3"></i>
            Program Levels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-foreground-1 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-certificate text-black text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Certificate Programs</h3>
              <p className="text-gray-300 mb-4">
                Focused, short-term programs for specific AI skills and competencies
              </p>
              <ul className="text-gray-300 text-left space-y-2">
                <li>• 3-6 month duration</li>
                <li>• Industry-specific focus</li>
                <li>• Practical skill development</li>
                <li>• Professional certification</li>
              </ul>
            </div>
            
            <div className="card text-center">
              <div className="bg-foreground-2 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-user-graduate text-black text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Bachelor's Programs</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive undergraduate education in AI and related fields
              </p>
              <ul className="text-gray-300 text-left space-y-2">
                <li>• 3-4 year duration</li>
                <li>• Broad AI foundation</li>
                <li>• Multiple specialization tracks</li>
                <li>• Capstone projects</li>
              </ul>
            </div>
            
            <div className="card text-center">
              <div className="bg-foreground-1 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-graduation-cap text-black text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Master's Programs</h3>
              <p className="text-gray-300 mb-4">
                Advanced graduate studies with research and specialization focus
              </p>
              <ul className="text-gray-300 text-left space-y-2">
                <li>• 1.5-2 year duration</li>
                <li>• Research-oriented</li>
                <li>• Industry collaboration</li>
                <li>• Thesis or project option</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-star text-foreground-1 mr-3"></i>
            Program Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-1 rounded-full p-3 mt-1">
                    <i className={`fas ${highlight.icon} text-black text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                    <p className="text-gray-300">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/studies/courses" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-laptop-code text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Browse Courses</h3>
              <p className="text-gray-300 mb-4">Explore our comprehensive course catalog and specializations</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Courses
              </div>
            </Link>
            
            <Link to="/studies/admissions" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-user-plus text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Apply Now</h3>
              <p className="text-gray-300 mb-4">Start your application to join our AI-focused programs</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Apply Today
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Shape the Future of AI?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our flexible, modular programs designed for the next generation of AI innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/studies/admissions" className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-rocket mr-2"></i>
              Start Your Journey
            </Link>
            <Link to="/university/contact" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-question-circle mr-2"></i>
              Get More Info
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Program
