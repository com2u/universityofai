import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('title')
  const [sortOrder, setSortOrder] = useState('asc')
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/data/courses.json')
        const data = await response.json()
        setCourses(data.courses)
        setFilteredCourses(data.courses)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching courses:', error)
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  useEffect(() => {
    let filtered = courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.format.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tools_required.some(tool => tool.toLowerCase().includes(searchTerm.toLowerCase())) ||
      course.instructors.some(instructor => instructor.name.toLowerCase().includes(searchTerm.toLowerCase()))
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

    setFilteredCourses(filtered)
  }, [courses, searchTerm, sortBy, sortOrder])

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
  }

  const openModal = (course) => {
    setSelectedCourse(course)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedCourse(null)
  }

  const getSortIcon = (field) => {
    if (sortBy !== field) return 'fas fa-sort text-gray-500'
    return sortOrder === 'asc' ? 'fas fa-sort-up text-foreground-1' : 'fas fa-sort-down text-foreground-1'
  }

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'lecture': return 'bg-blue-600'
      case 'seminar': return 'bg-green-600'
      case 'workshop': return 'bg-orange-600'
      case 'project': return 'bg-purple-600'
      default: return 'bg-gray-600'
    }
  }

  const getFormatIcon = (format) => {
    switch (format.toLowerCase()) {
      case 'online': return 'fa-laptop'
      case 'hybrid': return 'fa-blender'
      case 'in-person': return 'fa-users'
      default: return 'fa-question'
    }
  }

  const courseCategories = [
    {
      title: "AI Foundations & Machine Learning",
      icon: "fa-brain",
      color: "foreground-1",
      description: "Core concepts, algorithms, and mathematical foundations of AI and ML"
    },
    {
      title: "Generative AI & Prompt Engineering",
      icon: "fa-magic",
      color: "foreground-2",
      description: "Advanced techniques for working with generative models and prompt optimization"
    },
    {
      title: "AI in Software Development",
      icon: "fa-code",
      color: "foreground-1",
      description: "Integrating AI tools and techniques into software development workflows"
    },
    {
      title: "Data Engineering & Visualization",
      icon: "fa-chart-bar",
      color: "foreground-2",
      description: "Building data pipelines and creating compelling visualizations for AI projects"
    },
    {
      title: "AI Agents & Automation Tools",
      icon: "fa-robot",
      color: "foreground-1",
      description: "Designing and implementing intelligent agents and automation systems"
    },
    {
      title: "Ethics, Law, and Safety in AI",
      icon: "fa-balance-scale",
      color: "foreground-2",
      description: "Responsible AI development, legal frameworks, and safety considerations"
    },
    {
      title: "Creative AI: Audio, Image, 3D & Video",
      icon: "fa-palette",
      color: "foreground-1",
      description: "AI applications in creative industries and multimedia content generation"
    },
    {
      title: "AI for Business, Innovation & Strategy",
      icon: "fa-lightbulb",
      color: "foreground-2",
      description: "Strategic implementation of AI in business contexts and innovation management"
    }
  ]

  const courseFeatures = [
    {
      icon: "fa-brain",
      title: "AI-powered Learning",
      description: "Lectures, tests, and feedback powered by LLMs and agents"
    },
    {
      icon: "fa-laptop",
      title: "100% Online",
      description: "Learn at your own pace from anywhere in the world"
    },
    {
      icon: "fa-layer-group",
      title: "Stackable Credentials",
      description: "All courses contribute toward degrees or certifications"
    },
    {
      icon: "fa-flask",
      title: "Hands-on Labs",
      description: "Access to real-world AI tools, cloud platforms, and sandbox environments"
    },
    {
      icon: "fa-sync-alt",
      title: "Continuous Updates",
      description: "Course content evolves with the technology landscape"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-book-open text-foreground-1 mr-4"></i>
            Courses Overview
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
            Cutting-edge AI learning, modular and constantly updated.
          </p>
        </div>

        {/* Course Catalog Framework */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-compass text-foreground-1 mr-3"></i>
              Course Catalog Framework
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              At the University of AI, our courses are curated by international experts and constantly 
              updated to match the pace of technological change. Whether you're studying for a degree 
              or earning a certificate, our courses are organized into tracks to support focused learning paths.
            </p>
            <div className="bg-accent rounded-lg p-6">
              <p className="text-white text-center font-medium text-lg">
                <i className="fas fa-info-circle text-foreground-1 mr-2"></i>
                All course data will be dynamically rendered from the backend. Below is the structural 
                framework for integration.
              </p>
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-list-alt text-foreground-2 mr-3"></i>
            Course Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseCategories.map((category, index) => (
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

        {/* Course Catalog */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-table text-foreground-1 mr-3"></i>
              Course Catalog
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Explore our comprehensive course catalog with detailed information about each offering, 
              including prerequisites, tools, and learning outcomes.
            </p>
            
            {/* Search and Filter Controls */}
            <div className="mb-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Search by title, type, format, tools, or instructor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-foreground-1"
                  />
                </div>
              </div>
              <div className="text-gray-300 flex items-center">
                <i className="fas fa-filter mr-2 text-foreground-1"></i>
                {filteredCourses.length} of {courses.length} courses
              </div>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <i className="fas fa-spinner fa-spin text-4xl text-foreground-1 mb-4"></i>
                <p className="text-lg font-medium text-white mb-2">Loading Courses...</p>
                <p className="text-gray-400">Please wait while we fetch the course data.</p>
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
                          Course Title
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
                        onClick={() => handleSort('ects')}
                      >
                        <div className="flex items-center gap-2">
                          ECTS
                          <i className={getSortIcon('ects')}></i>
                        </div>
                      </th>
                      <th 
                        className="px-6 py-4 text-left text-white font-bold cursor-pointer hover:bg-gray-700 transition-colors"
                        onClick={() => handleSort('duration_weeks')}
                      >
                        <div className="flex items-center gap-2">
                          Duration
                          <i className={getSortIcon('duration_weeks')}></i>
                        </div>
                      </th>
                      <th 
                        className="px-6 py-4 text-left text-white font-bold cursor-pointer hover:bg-gray-700 transition-colors"
                        onClick={() => handleSort('format')}
                      >
                        <div className="flex items-center gap-2">
                          Format
                          <i className={getSortIcon('format')}></i>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-white font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCourses.length === 0 ? (
                      <tr className="border-t border-gray-700">
                        <td className="px-6 py-8 text-gray-300 text-center" colSpan="6">
                          <i className="fas fa-search text-3xl text-gray-500 mb-3"></i>
                          <p className="text-lg font-medium text-white mb-2">No courses found</p>
                          <p className="text-gray-400">Try adjusting your search terms</p>
                        </td>
                      </tr>
                    ) : (
                      filteredCourses.map((course, index) => (
                        <tr key={index} className="border-t border-gray-700 hover:bg-gray-800 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <h3 className="text-white font-semibold text-lg">{course.title}</h3>
                              <p className="text-gray-400 text-sm">{course.subtitle}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getTypeColor(course.type)}`}>
                              {course.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-300">
                            {course.ects} ECTS
                          </td>
                          <td className="px-6 py-4 text-gray-300">
                            {course.duration_weeks} weeks
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <i className={`fas ${getFormatIcon(course.format)} text-foreground-1`}></i>
                              <span className="text-gray-300 capitalize">{course.format}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => openModal(course)}
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

        {/* Course Details Modal */}
        {showModal && selectedCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedCourse.title}</h2>
                  <p className="text-gray-300 text-lg mb-3">{selectedCourse.subtitle}</p>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getTypeColor(selectedCourse.type)}`}>
                      {selectedCourse.type}
                    </span>
                    <span className="text-gray-300">{selectedCourse.ects} ECTS</span>
                    <span className="text-gray-300">{selectedCourse.duration_weeks} weeks</span>
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
                {/* Course Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <i className={`fas ${getFormatIcon(selectedCourse.format)} text-foreground-1`}></i>
                      <h3 className="text-white font-semibold">Format</h3>
                    </div>
                    <p className="text-gray-300 capitalize">{selectedCourse.format}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fas fa-calendar text-foreground-1"></i>
                      <h3 className="text-white font-semibold">Semester</h3>
                    </div>
                    <p className="text-gray-300">Semester {selectedCourse.semester_recommendation}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fas fa-globe text-foreground-1"></i>
                      <h3 className="text-white font-semibold">Language</h3>
                    </div>
                    <p className="text-gray-300">{selectedCourse.language}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className="fas fa-info-circle text-foreground-1"></i>
                    Course Description
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{selectedCourse.description}</p>
                </div>

                {/* Learning Outcomes */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className="fas fa-target text-foreground-2"></i>
                    Learning Outcomes
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedCourse.learning_outcomes.map((outcome, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-3 flex items-start gap-3">
                        <i className="fas fa-check-circle text-foreground-2 mt-1"></i>
                        <span className="text-gray-300">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Required */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className="fas fa-tools text-foreground-1"></i>
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedCourse.tools_required.map((tool, index) => (
                      <span key={index} className="bg-foreground-1 text-black px-3 py-2 rounded-lg font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Instructors */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className="fas fa-chalkboard-teacher text-foreground-2"></i>
                    Instructors
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedCourse.instructors.map((instructor, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-3 flex items-center gap-3">
                        <i className="fas fa-user-tie text-foreground-1"></i>
                        <span className="text-white font-medium">{instructor.name}</span>
                      </div>
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
                    <i className="fas fa-user-plus"></i>
                    Enroll in Course
                  </Link>
                  <button
                    onClick={closeModal}
                    className="btn-secondary flex items-center justify-center gap-2 flex-1"
                  >
                    <i className="fas fa-arrow-left"></i>
                    Back to Catalog
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Course Levels */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-layer-group text-foreground-2 mr-3"></i>
            Course Levels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-seedling text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Beginner</h3>
              <p className="text-gray-300 text-sm">No prior experience required</p>
            </div>
            
            <div className="card text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Intermediate</h3>
              <p className="text-gray-300 text-sm">Some foundational knowledge needed</p>
            </div>
            
            <div className="card text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-fire text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Advanced</h3>
              <p className="text-gray-300 text-sm">Significant experience required</p>
            </div>
            
            <div className="card text-center">
              <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-crown text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Expert</h3>
              <p className="text-gray-300 text-sm">Professional-level expertise</p>
            </div>
          </div>
        </section>

        {/* Course Features */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-star text-foreground-1 mr-3"></i>
            Course Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseFeatures.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${feature.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Paths */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title text-center mb-8">
              <i className="fas fa-route text-foreground-2 mr-3"></i>
              Suggested Learning Paths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  <i className="fas fa-play-circle text-foreground-1 mr-2"></i>
                  AI Beginner Track
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• AI Foundations</li>
                  <li>• Python for AI</li>
                  <li>• Machine Learning Basics</li>
                  <li>• Ethics in AI</li>
                  <li>• First AI Project</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  <i className="fas fa-rocket text-foreground-2 mr-2"></i>
                  AI Developer Track
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Advanced ML Algorithms</li>
                  <li>• AI Agent Development</li>
                  <li>• LLM Integration</li>
                  <li>• AI in Production</li>
                  <li>• Capstone Project</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  <i className="fas fa-briefcase text-foreground-1 mr-2"></i>
                  AI Strategy Track
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• AI for Business</li>
                  <li>• Innovation Management</li>
                  <li>• AI Governance</li>
                  <li>• Strategic Implementation</li>
                  <li>• Leadership Project</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/studies/program" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-book text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">View Programs</h3>
              <p className="text-gray-300 mb-4">Explore our comprehensive degree programs and how courses fit together</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Programs
              </div>
            </Link>
            
            <Link to="/studies/admissions" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-user-plus text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Enroll Now</h3>
              <p className="text-gray-300 mb-4">Start your application and begin your AI learning journey</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Apply Today
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students already mastering AI with our cutting-edge courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/studies/admissions" className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-rocket mr-2"></i>
              Enroll Now
            </Link>
            <Link to="/studies/precourses" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-play mr-2"></i>
              Start with Pre-Courses
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Courses
