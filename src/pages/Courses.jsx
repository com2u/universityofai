import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const Courses = () => {
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

        {/* Courses Table Placeholder */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-table text-foreground-1 mr-3"></i>
              Course Catalog
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Courses will be dynamically populated from backend JSON with detailed information 
              about each offering.
            </p>
            
            {/* Placeholder Table */}
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-900 rounded-lg border border-gray-700">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="px-6 py-4 text-left text-white font-bold">Course Code</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Course Title</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Category</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Duration</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Level</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-700">
                    <td className="px-6 py-4 text-gray-300" colSpan="6">
                      <div className="text-center py-8">
                        <i className="fas fa-database text-4xl text-foreground-1 mb-4"></i>
                        <p className="text-lg font-medium text-white mb-2">Course Data Loading...</p>
                        <p className="text-gray-400">
                          Course catalog will be loaded dynamically from the backend system with 
                          real-time updates and availability information.
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 bg-blue-900 bg-opacity-30 border border-blue-600 rounded-lg p-4">
              <p className="text-blue-200 text-center">
                <i className="fas fa-info-circle text-blue-400 mr-2"></i>
                This table will be populated with real course data once the backend integration is complete.
              </p>
            </div>
          </div>
        </section>

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
