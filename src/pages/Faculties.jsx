import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const Faculties = () => {
  const [faculties, setFaculties] = useState([])
  const [filteredFaculties, setFilteredFaculties] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')
  const [selectedFaculty, setSelectedFaculty] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const response = await fetch('/data/faculties.json')
        const data = await response.json()
        setFaculties(data.faculties)
        setFilteredFaculties(data.faculties)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching faculties:', error)
        setLoading(false)
      }
    }

    fetchFaculties()
  }, [])

  useEffect(() => {
    let filtered = faculties.filter(faculty =>
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()))
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

    setFilteredFaculties(filtered)
  }, [faculties, searchTerm, sortBy, sortOrder])

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
  }

  const openModal = (faculty) => {
    setSelectedFaculty(faculty)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedFaculty(null)
  }

  const getSortIcon = (field) => {
    if (sortBy !== field) return 'fas fa-sort text-gray-500'
    return sortOrder === 'asc' ? 'fas fa-sort-up text-foreground-1' : 'fas fa-sort-down text-foreground-1'
  }

  const facultyAreas = [
    {
      title: "AI & Machine Learning",
      icon: "fa-brain",
      color: "foreground-1",
      description: "Core AI research, deep learning, and machine learning algorithms",
      specializations: ["Neural Networks", "Computer Vision", "Natural Language Processing", "Reinforcement Learning"]
    },
    {
      title: "Data Science & Analytics",
      icon: "fa-chart-line",
      color: "foreground-2",
      description: "Big data processing, statistical analysis, and data visualization",
      specializations: ["Big Data", "Statistical Modeling", "Data Visualization", "Predictive Analytics"]
    },
    {
      title: "AI Ethics & Governance",
      icon: "fa-balance-scale",
      color: "foreground-1",
      description: "Responsible AI development, policy, and ethical frameworks",
      specializations: ["AI Ethics", "Policy Development", "Bias Detection", "Fairness in AI"]
    },
    {
      title: "Applied AI & Industry",
      icon: "fa-cogs",
      color: "foreground-2",
      description: "Real-world AI applications and industry collaboration",
      specializations: ["AI in Healthcare", "Fintech AI", "Autonomous Systems", "AI Strategy"]
    },
    {
      title: "Creative AI & Media",
      icon: "fa-palette",
      color: "foreground-1",
      description: "AI applications in creative fields and content generation",
      specializations: ["Generative Art", "Music AI", "Video Processing", "3D Modeling"]
    },
    {
      title: "AI Engineering & Systems",
      icon: "fa-microchip",
      color: "foreground-2",
      description: "AI infrastructure, deployment, and system architecture",
      specializations: ["MLOps", "AI Infrastructure", "Edge Computing", "Distributed Systems"]
    }
  ]

  const facultyHighlights = [
    {
      icon: "fa-globe-americas",
      title: "International Expertise",
      description: "Faculty from leading AI institutions worldwide"
    },
    {
      icon: "fa-industry",
      title: "Industry Experience",
      description: "Active practitioners with real-world AI experience"
    },
    {
      icon: "fa-graduation-cap",
      title: "Academic Excellence",
      description: "PhD holders from top universities globally"
    },
    {
      icon: "fa-flask",
      title: "Active Research",
      description: "Ongoing research in cutting-edge AI fields"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-users text-foreground-1 mr-4"></i>
            Faculties & Trainers
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-4"
          >
            University of AI
          </GradientText>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Learn from world-class AI experts, researchers, and industry practitioners who are 
            shaping the future of artificial intelligence.
          </p>
        </div>

        {/* Faculty Framework */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-university text-foreground-1 mr-3"></i>
              Faculty Framework
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Meet our distinguished faculty of AI experts, researchers, and industry practitioners 
              from around the world. Each brings unique expertise and real-world experience.
            </p>
            
            {/* Search and Filter Controls */}
            <div className="mb-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Search by name, specialization, country, or expertise..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-foreground-1"
                  />
                </div>
              </div>
              <div className="text-gray-300 flex items-center">
                <i className="fas fa-filter mr-2 text-foreground-1"></i>
                {filteredFaculties.length} of {faculties.length} trainers
              </div>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <i className="fas fa-spinner fa-spin text-4xl text-foreground-1 mb-4"></i>
                <p className="text-lg font-medium text-white mb-2">Loading Faculty...</p>
                <p className="text-gray-400">Please wait while we fetch the faculty data.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full bg-gray-900 rounded-lg border border-gray-700">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="px-6 py-4 text-left text-white font-bold">Photo</th>
                      <th 
                        className="px-6 py-4 text-left text-white font-bold cursor-pointer hover:bg-gray-700 transition-colors"
                        onClick={() => handleSort('name')}
                      >
                        <div className="flex items-center gap-2">
                          Name
                          <i className={getSortIcon('name')}></i>
                        </div>
                      </th>
                      <th 
                        className="px-6 py-4 text-left text-white font-bold cursor-pointer hover:bg-gray-700 transition-colors"
                        onClick={() => handleSort('specialization')}
                      >
                        <div className="flex items-center gap-2">
                          Specialization
                          <i className={getSortIcon('specialization')}></i>
                        </div>
                      </th>
                      <th 
                        className="px-6 py-4 text-left text-white font-bold cursor-pointer hover:bg-gray-700 transition-colors"
                        onClick={() => handleSort('country')}
                      >
                        <div className="flex items-center gap-2">
                          Country
                          <i className={getSortIcon('country')}></i>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-white font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFaculties.length === 0 ? (
                      <tr className="border-t border-gray-700">
                        <td className="px-6 py-8 text-gray-300 text-center" colSpan="5">
                          <i className="fas fa-search text-3xl text-gray-500 mb-3"></i>
                          <p className="text-lg font-medium text-white mb-2">No faculty found</p>
                          <p className="text-gray-400">Try adjusting your search terms</p>
                        </td>
                      </tr>
                    ) : (
                      filteredFaculties.map((faculty, index) => (
                        <tr key={index} className="border-t border-gray-700 hover:bg-gray-800 transition-colors">
                          <td className="px-6 py-4">
                            <img 
                              src={`/data/${faculty.photo}`} 
                              alt={faculty.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-foreground-1"
                              onError={(e) => {
                                e.target.src = '/data/p1.png'
                              }}
                            />
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <h3 className="text-white font-semibold text-lg">{faculty.name}</h3>
                              <p className="text-gray-400 text-sm">{faculty.email}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-gray-300">{faculty.specialization}</p>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <i className="fas fa-globe text-foreground-1"></i>
                              <span className="text-gray-300">{faculty.country}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => openModal(faculty)}
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

        {/* Faculty Details Modal */}
        {showModal && selectedFaculty && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <img 
                    src={`/data/${selectedFaculty.photo}`} 
                    alt={selectedFaculty.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-foreground-1"
                    onError={(e) => {
                      e.target.src = '/data/p1.png'
                    }}
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedFaculty.name}</h2>
                    <p className="text-gray-300 text-lg">{selectedFaculty.specialization}</p>
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
                {/* Faculty Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fas fa-globe text-foreground-1"></i>
                      <h3 className="text-white font-semibold">Country</h3>
                    </div>
                    <p className="text-gray-300">{selectedFaculty.country}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fas fa-envelope text-foreground-1"></i>
                      <h3 className="text-white font-semibold">Email</h3>
                    </div>
                    <p className="text-gray-300">{selectedFaculty.email}</p>
                  </div>
                </div>

                {/* Specialization */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className="fas fa-star text-foreground-1"></i>
                    Specialization
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{selectedFaculty.specialization}</p>
                </div>

                {/* Expertise */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className="fas fa-cogs text-foreground-2"></i>
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedFaculty.expertise.map((skill, index) => (
                      <span key={index} className="bg-foreground-1 text-black px-3 py-2 rounded-lg font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
                  <a
                    href={`mailto:${selectedFaculty.email}`}
                    className="btn-primary flex items-center justify-center gap-2 flex-1"
                  >
                    <i className="fas fa-envelope"></i>
                    Contact Faculty
                  </a>
                  <button
                    onClick={closeModal}
                    className="btn-secondary flex items-center justify-center gap-2 flex-1"
                  >
                    <i className="fas fa-arrow-left"></i>
                    Back to Faculty List
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Faculty Areas */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-sitemap text-foreground-2 mr-3"></i>
            Faculty Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyAreas.map((area, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`bg-${area.color} rounded-full p-3`}>
                    <i className={`fas ${area.icon} text-black text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                    <p className="text-gray-300 mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.specializations.map((spec, specIndex) => (
                        <span key={specIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Faculty Profiles Placeholder */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-id-card text-foreground-1 mr-3"></i>
              Faculty Profiles
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Detailed faculty profiles with backgrounds, research interests, and publications 
              will be displayed here once loaded from the backend system.
            </p>
            
            {/* Placeholder Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="text-center py-8">
                  <i className="fas fa-user-circle text-4xl text-foreground-1 mb-4"></i>
                  <p className="text-lg font-medium text-white mb-2">Faculty Profiles Loading...</p>
                  <p className="text-gray-400 text-sm">
                    Detailed profiles will be loaded from the backend
                  </p>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="text-center py-8">
                  <i className="fas fa-user-circle text-4xl text-foreground-2 mb-4"></i>
                  <p className="text-lg font-medium text-white mb-2">Research Interests</p>
                  <p className="text-gray-400 text-sm">
                    Publications and research areas
                  </p>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="text-center py-8">
                  <i className="fas fa-user-circle text-4xl text-foreground-1 mb-4"></i>
                  <p className="text-lg font-medium text-white mb-2">Industry Experience</p>
                  <p className="text-gray-400 text-sm">
                    Professional backgrounds and expertise
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-900 bg-opacity-30 border border-blue-600 rounded-lg p-4">
              <p className="text-blue-200 text-center">
                <i className="fas fa-info-circle text-blue-400 mr-2"></i>
                Faculty profiles will be populated with detailed information once the backend integration is complete.
              </p>
            </div>
          </div>
        </section>

        {/* Faculty Highlights */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-star text-foreground-1 mr-3"></i>
            What Makes Our Faculty Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyHighlights.map((highlight, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${highlight.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title text-center mb-8">
              <i className="fas fa-lightbulb text-foreground-2 mr-3"></i>
              Our Teaching Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <i className="fas fa-hands-helping text-3xl text-foreground-1 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">Hands-On Learning</h3>
                <p className="text-gray-300">
                  Practical, project-based approach with real-world applications and industry tools.
                </p>
              </div>
              <div className="text-center">
                <i className="fas fa-users text-3xl text-foreground-2 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">Collaborative Environment</h3>
                <p className="text-gray-300">
                  Foster teamwork, peer learning, and knowledge sharing among students and faculty.
                </p>
              </div>
              <div className="text-center">
                <i className="fas fa-rocket text-3xl text-foreground-1 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">Innovation Focus</h3>
                <p className="text-gray-300">
                  Encourage creative thinking, experimentation, and pushing the boundaries of AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Faculty */}
        <section className="mb-20">
          <div className="card text-center">
            <h2 className="section-title mb-6">
              <i className="fas fa-user-plus text-foreground-2 mr-3"></i>
              Join Our Faculty
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              We're always looking for exceptional AI researchers, practitioners, and educators 
              to join our growing faculty. If you're passionate about teaching and advancing AI education, 
              we'd love to hear from you.
            </p>
            <Link to="/university/career" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
              <i className="fas fa-briefcase mr-2"></i>
              View Open Positions
            </Link>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/studies/courses" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-book-open text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Browse Courses</h3>
              <p className="text-gray-300 mb-4">Explore courses taught by our expert faculty</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Courses
              </div>
            </Link>
            
            <Link to="/studies/research" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-flask text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Research Projects</h3>
              <p className="text-gray-300 mb-4">Discover ongoing research and collaboration opportunities</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Research
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">Learn from the Best</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of learners and work directly with world-class AI experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/studies/admissions" className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-graduation-cap mr-2"></i>
              Apply Now
            </Link>
            <Link to="/university/contact" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-envelope mr-2"></i>
              Contact Faculty
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Faculties
