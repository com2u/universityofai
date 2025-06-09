import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'
import LetterGlitch from '../components/LetterGlitch'
import StarBorder from '../components/StarBorder'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4">
        {/* Letter Glitch Background */}
        <div className="absolute inset-0">
          <LetterGlitch
            glitchSpeed={3}
            centerVignette={true}
            outerVignette={true}
            smooth={true}
            glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The future is intelligent.
              <br />
              <GradientText
                colors={["#61b3dc", "#61dca3", "#61b3dc", "#61dca3", "#61b3dc"]}
                animationSpeed={3}
                showBorder={false}
                className="text-5xl md:text-7xl font-bold"
              >
                So should you be.
              </GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We don't just teach AI — we create with it. Our programs blend theory with practice, 
              helping you build the AI tools of tomorrow.
            </p>
          </div>
          
          {/* Intro Video Section */}
          <div className="mb-12">
            <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto border border-gray-700">
              <div className="aspect-video bg-gray-900 rounded-lg mb-4 border border-gray-600 overflow-hidden">
                <video 
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  poster="/data/p1.png"
                >
                  <source src="/data/UniversityOfAI.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-gray-300 mb-4">
                Short clip featuring students, trainers, and real projects
              </p>
              <Link to="/news/students" className="btn-primary">
                <i className="fas fa-play mr-2"></i>
                Meet Our Students
              </Link>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/studies/courses" className="btn-primary">
              <i className="fas fa-book mr-2"></i>
              Explore Courses
            </Link>
            <Link to="/studies/admissions" className="btn-secondary">
              <i className="fas fa-edit mr-2"></i>
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Top Features Grid */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Why Choose University of AI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="card text-center">
              <div className="feature-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">International Experts</h3>
              <p className="text-gray-300">
                Learn from global AI leaders with real-world experience in cutting-edge technologies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card text-center">
              <div className="feature-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Industry-Centric Projects</h3>
              <p className="text-gray-300">
                Work on real use cases with industry partners, building practical solutions that matter.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card text-center">
              <div className="feature-icon">
                <i className="fas fa-laptop"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fully Online & Accessible</h3>
              <p className="text-gray-300">
                Study from anywhere in the world with our flexible, comprehensive online platform.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card text-center">
              <div className="feature-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Learning</h3>
              <p className="text-gray-300">
                Experience learning infrastructure built using the very technologies we teach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* University Vision Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Vision</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We aim to train students not just to use AI — but to shape its future. 
                Whether they're building autonomous agents, exploring new data paradigms, 
                or rethinking how software is created, our students are positioned at the 
                heart of tomorrow's technological landscape.
              </p>
              <Link to="/about" className="btn-primary">
                <i className="fas fa-arrow-right mr-2"></i>
                Learn More About Us
              </Link>
            </div>
            <StarBorder
              color="#61b3dc"
              speed="5s"
              className="w-full"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground-2 mb-6">What Makes Us Different</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-foreground-1 mt-1"></i>
                    <span className="text-gray-300">Real-world, constantly evolving curriculum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-foreground-1 mt-1"></i>
                    <span className="text-gray-300">End-to-end AI project pipelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-foreground-1 mt-1"></i>
                    <span className="text-gray-300">Integration of LLMs, agents, and automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-foreground-1 mt-1"></i>
                    <span className="text-gray-300">International, industry-active experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-foreground-1 mt-1"></i>
                    <span className="text-gray-300">Commitment to ethics and inclusion</span>
                  </li>
                </ul>
              </div>
            </StarBorder>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Explore Our Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/studies/entrepreneur" className="card group hover:scale-105 transition-transform duration-200">
              <div className="text-center">
                <i className="fas fa-rocket text-4xl text-foreground-1 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">Entrepreneurship</h3>
                <p className="text-gray-300">
                  Launch your AI-driven startup with mentorship and practical education.
                </p>
              </div>
            </Link>

            <Link to="/studies/research" className="card group hover:scale-105 transition-transform duration-200">
              <div className="text-center">
                <i className="fas fa-microscope text-4xl text-foreground-1 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">Research Projects</h3>
                <p className="text-gray-300">
                  Engage in cutting-edge research with industry collaboration.
                </p>
              </div>
            </Link>

            <Link to="/news/students" className="card group hover:scale-105 transition-transform duration-200">
              <div className="text-center">
                <i className="fas fa-users text-4xl text-foreground-1 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">Student Life</h3>
                <p className="text-gray-300">
                  Join a vibrant community of AI innovators and future leaders.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Shape the Future of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the next generation of AI innovators and creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/studies/admissions" className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-rocket mr-2"></i>
              Start Your Journey
            </Link>
            <Link to="/university/contact" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-envelope mr-2"></i>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
