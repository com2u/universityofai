import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'
import StarBorder from '../components/StarBorder'

const Admissions = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-graduation-cap text-foreground-1 mr-4"></i>
            Admissions
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-4"
          >
            Welcome to the Future of Education
          </GradientText>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            At the University of AI, we welcome curious minds, ambitious creators, and future builders. 
            Whether you're a developer, researcher, designer, entrepreneur, or technologist — our programs 
            are designed to prepare you for a career powered by intelligence.
          </p>
        </div>

        {/* Who Can Apply */}
        <section className="mb-20">
          <StarBorder
            color="#61dca3"
            speed="5s"
            className="w-full"
          >
            <div>
              <h2 className="section-title mb-8">
                <i className="fas fa-users text-foreground-1 mr-3"></i>
                Who Can Apply?
              </h2>
              <p className="text-lg text-gray-300 mb-8">We accept applications from:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-1 rounded-full p-2 mt-1">
                    <i className="fas fa-school text-black text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">High School Graduates</h3>
                    <p className="text-gray-300">High school graduates (or equivalent) with a passion for technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-2 rounded-full p-2 mt-1">
                    <i className="fas fa-university text-black text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">University Students</h3>
                    <p className="text-gray-300">University students looking to specialize in AI fields</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-1 rounded-full p-2 mt-1">
                    <i className="fas fa-briefcase text-black text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Professionals</h3>
                    <p className="text-gray-300">Professionals aiming to upskill or switch careers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-2 rounded-full p-2 mt-1">
                    <i className="fas fa-palette text-black text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Creators</h3>
                    <p className="text-gray-300">Creators from non-technical backgrounds interested in AI-powered tools</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-accent rounded-lg p-6">
                <p className="text-white text-center font-medium">
                  <i className="fas fa-info-circle text-foreground-1 mr-2"></i>
                  No prior AI experience is required — just motivation, commitment, and a growth mindset.
                </p>
              </div>
            </div>
          </StarBorder>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/studies/program" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-book text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Available Programs</h3>
              <p className="text-gray-300 mb-4">Explore our comprehensive degree programs designed for the AI era</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Programs
              </div>
            </Link>
            
            <Link to="/studies/courses" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-laptop-code text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Available Courses</h3>
              <p className="text-gray-300 mb-4">Browse our cutting-edge courses and specializations</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Courses
              </div>
            </Link>
          </div>
        </section>

        {/* Semester Schedule */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-calendar-alt text-foreground-2 mr-3"></i>
              Semester Schedule
            </h2>
            <p className="text-lg text-gray-300 mb-8">We operate with 2 intakes per year:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <i className="fas fa-sun text-3xl text-yellow-400"></i>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Summer Term</h3>
                    <p className="text-foreground-1 font-medium">Starts in June</p>
                  </div>
                </div>
                <p className="text-gray-300">Perfect for those looking to start their AI journey in the summer months</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <i className="fas fa-snowflake text-3xl text-blue-400"></i>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Winter Term</h3>
                    <p className="text-foreground-2 font-medium">Starts in October</p>
                  </div>
                </div>
                <p className="text-gray-300">Ideal for traditional academic calendar alignment</p>
              </div>
            </div>
            <div className="mt-8 bg-yellow-900 bg-opacity-30 border border-yellow-600 rounded-lg p-4">
              <p className="text-yellow-200 text-center">
                <i className="fas fa-exclamation-triangle text-yellow-400 mr-2"></i>
                Applications are reviewed on a rolling basis. Early applications are recommended due to limited cohort sizes.
              </p>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-clipboard-list text-foreground-1 mr-3"></i>
            How to Apply
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="card text-center">
              <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Online Application</h3>
              <p className="text-gray-300 mb-4">
                Submit your basic profile, educational background, and motivation statement
              </p>
              <button className="btn-primary w-full">
                <i className="fas fa-edit mr-2"></i>
                Apply Now
              </button>
            </div>

            {/* Step 2 */}
            <div className="card text-center">
              <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
              <p className="text-gray-300 mb-4">
                Complete a short problem-solving or creative thinking task
              </p>
              <p className="text-sm text-gray-400 italic">
                (Optional for Experienced Applicants)
              </p>
            </div>

            {/* Step 3 */}
            <div className="card text-center">
              <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Interview</h3>
              <p className="text-gray-300 mb-4">
                A 20-minute virtual session with our admissions team or a faculty member
              </p>
              <i className="fas fa-video text-foreground-2 text-2xl"></i>
            </div>

            {/* Step 4 */}
            <div className="card text-center">
              <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enrollment</h3>
              <p className="text-gray-300 mb-4">
                Upon acceptance, receive access to your student dashboard, orientation schedule, and course plan
              </p>
              <i className="fas fa-check-circle text-green-400 text-2xl"></i>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your AI Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the next generation of AI innovators and shape the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-rocket mr-2"></i>
              Apply Now
            </button>
            <Link to="/university/contact" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-question-circle mr-2"></i>
              Have Questions?
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Admissions
