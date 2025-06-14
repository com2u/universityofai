import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const Career = () => {
  const [jobs, setJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Load jobs data
    fetch('/data/jobs.json')
      .then(response => response.json())
      .then(data => setJobs(data.jobs))
      .catch(error => console.error('Error loading jobs:', error))
  }, [])

  const openJobModal = (job) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedJob(null)
  }

  const benefits = [
    {
      icon: "fa-rocket",
      title: "Being part of a pioneering educational institution",
      description: "Join a university that's shaping the future of AI education"
    },
    {
      icon: "fa-flask",
      title: "Contributing to cutting-edge AI education and research",
      description: "Work on projects that advance the field of artificial intelligence"
    },
    {
      icon: "fa-users",
      title: "Collaborating with international experts and future talents",
      description: "Connect with leading minds from around the world"
    },
    {
      icon: "fa-laptop",
      title: "Enjoying a flexible, remote-friendly work environment",
      description: "Work from anywhere with our distributed team approach"
    },
    {
      icon: "fa-graduation-cap",
      title: "Participating in ongoing personal and professional development",
      description: "Continuous learning opportunities and career growth"
    }
  ]

  const applicationSteps = [
    {
      step: "1",
      title: "Apply Online",
      description: "Submit your CV and cover letter using the provided application link for each position",
      icon: "fa-upload"
    },
    {
      step: "2",
      title: "Initial Review",
      description: "Our hiring team reviews your profile",
      icon: "fa-search"
    },
    {
      step: "3",
      title: "Interview Round(s)",
      description: "Depending on the role, you'll meet department leads or faculty members",
      icon: "fa-comments"
    },
    {
      step: "4",
      title: "Decision & Offer",
      description: "We aim to give feedback within 14 days of your interview",
      icon: "fa-handshake"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-briefcase text-foreground-1 mr-4"></i>
            Careers at the University of AI
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-8"
          >
            Career
          </GradientText>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            At the University of AI, we don't just talk about innovation — we live it. 
            Our team is composed of technologists, educators, researchers, and creatives 
            who are passionate about shaping the AI-driven world.
          </p>
        </div>

        {/* Why Work With Us */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-star text-foreground-1 mr-3"></i>
            Why Work With Us?
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8">Working with us means:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${benefit.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-globe text-foreground-2 mr-3"></i>
            Open Positions
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8">
            Below you'll find our current openings. We're always on the lookout for 
            forward-thinking professionals to join our global, remote-first team.
          </p>
          
          <div className="bg-accent rounded-lg p-8 mb-8">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-lightbulb text-foreground-2 text-3xl mr-4"></i>
              <h3 className="text-2xl font-bold text-white">Note</h3>
            </div>
            <p className="text-white text-center text-lg">
              Positions are updated regularly. If you don't see a role that fits your expertise, 
              feel free to send us an open application.
            </p>
          </div>

          {/* Job Listings */}
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-6">
              <i className="fas fa-list text-foreground-1 mr-3"></i>
              Job Listings
            </h3>
            
            {jobs.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-4 px-6 text-foreground-1 font-bold">Position</th>
                      <th className="py-4 px-6 text-foreground-1 font-bold">Type</th>
                      <th className="py-4 px-6 text-foreground-1 font-bold">Skills Required</th>
                      <th className="py-4 px-6 text-foreground-1 font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job.id} className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                        <td className="py-4 px-6">
                          <h4 className="text-white font-semibold">{job.title}</h4>
                          <p className="text-gray-400 text-sm mt-1">{job.description.substring(0, 100)}...</p>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            job.type === 'Full-Time' ? 'bg-green-900 text-green-200' :
                            job.type === 'Part-Time' ? 'bg-blue-900 text-blue-200' :
                            'bg-yellow-900 text-yellow-200'
                          }`}>
                            {job.type}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex flex-wrap gap-1">
                            {job.skills_required.slice(0, 3).map((skill, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                                {skill}
                              </span>
                            ))}
                            {job.skills_required.length > 3 && (
                              <span className="px-2 py-1 bg-gray-600 text-gray-400 text-xs rounded">
                                +{job.skills_required.length - 3} more
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <button
                            onClick={() => openJobModal(job)}
                            className="btn-primary text-sm px-4 py-2"
                          >
                            <i className="fas fa-eye mr-2"></i>
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
                <div className="text-center">
                  <i className="fas fa-briefcase text-6xl text-gray-600 mb-4"></i>
                  <h4 className="text-xl font-bold text-gray-400 mb-4">Loading Job Listings...</h4>
                  <p className="text-gray-500">
                    Please wait while we load the current job openings.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-clipboard-list text-foreground-1 mr-3"></i>
            Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-black text-2xl font-bold">{step.step}</span>
                </div>
                <div className="bg-foreground-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${step.icon} text-black text-lg`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/university/academic" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-microscope text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Academic Careers</h3>
              <p className="text-gray-300 mb-4">Explore research and teaching opportunities</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Learn More
              </div>
            </Link>
            
            <Link to="/university/cooperation" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-handshake text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Partnership Opportunities</h3>
              <p className="text-gray-300 mb-4">Collaborate with us on innovative projects</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Partner With Us
              </div>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">
            <i className="fas fa-question-circle text-foreground-2 mr-3"></i>
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Reach out to our HR team directly and we're happy to help you find your place 
            in the future of education and technology.
          </p>
          <div className="bg-accent rounded-lg p-6 mb-8">
            <p className="text-white font-bold text-2xl mb-2">Your future begins here. Let's build it together.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:jobs@university-of-ai.org" 
              className="btn-primary text-lg px-8 py-4"
            >
              <i className="fas fa-envelope mr-2"></i>
              jobs@university-of-ai.org
            </a>
            <Link to="/university/contact" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-phone mr-2"></i>
              Contact Us
            </Link>
          </div>
        </section>
      </div>

      {/* Job Details Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedJob.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedJob.type === 'Full-Time' ? 'bg-green-900 text-green-200' :
                    selectedJob.type === 'Part-Time' ? 'bg-blue-900 text-blue-200' :
                    'bg-yellow-900 text-yellow-200'
                  }`}>
                    {selectedJob.type}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              {/* Job Description */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-foreground-1 mb-3">
                  <i className="fas fa-info-circle mr-2"></i>
                  Job Description
                </h4>
                <p className="text-gray-300 leading-relaxed">{selectedJob.description}</p>
              </div>

              {/* Skills Required */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-foreground-2 mb-3">
                  <i className="fas fa-cogs mr-2"></i>
                  Skills Required
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills_required.map((skill, index) => (
                    <span key={index} className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Job ID */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-400 mb-2">Job ID</h4>
                <p className="text-gray-500 font-mono">{selectedJob.id}</p>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex-1">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Apply for this Position
                </button>
                <button
                  onClick={closeModal}
                  className="btn-secondary flex-1"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Back to Listings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Career
