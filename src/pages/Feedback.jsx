import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const Feedback = () => {
  const studentTestimonials = [
    {
      quote: "The University of AI completely changed how I see software development. Working with real AI agents in projects was a game-changer.",
      author: "Maya",
      role: "Master's Student in Applied AI",
      icon: "fa-user-graduate"
    },
    {
      quote: "Before joining, I had never coded with AI. Now, I'm running my own project using LangChain and CrewAI. Everything is hands-on and incredibly up-to-date.",
      author: "Jamal",
      role: "Bachelor Student",
      icon: "fa-laptop-code"
    },
    {
      quote: "The online format is smooth, flexible, and accessible from anywhere. I was amazed by how personal the mentorship still feels.",
      author: "Lena",
      role: "Data Science Vorkurs Participant",
      icon: "fa-globe"
    }
  ]

  const trainerTestimonials = [
    {
      quote: "I've taught at several institutions, but never with such agility. The University of AI lets us integrate new models and tools in real-time.",
      author: "Prof. Dr. Elena T.",
      role: "AI Ethics & Security",
      icon: "fa-shield-alt"
    },
    {
      quote: "I love how closely we work with startups and the AI industry. The project pitches and student energy here are next level.",
      author: "Kevin B.",
      role: "Lecturer in Agent-Based Systems",
      icon: "fa-rocket"
    },
    {
      quote: "Teaching here feels like building the future in real time. The dynamic curriculum and open research culture are outstanding.",
      author: "Dr. Anika R.",
      role: "NLP & Generative AI Trainer",
      icon: "fa-brain"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-comments text-foreground-1 mr-4"></i>
            Feedback & Testimonials
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-8"
          >
            Feedback
          </GradientText>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Our students come from diverse backgrounds, but they share one thing: 
            a passion for shaping the future with AI. Here's what they say about their experience with us.
          </p>
        </div>

        {/* Student Voices */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-user-graduate text-foreground-1 mr-3"></i>
            Student Voices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentTestimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-foreground-2 rounded-full p-3">
                    <i className={`fas ${testimonial.icon} text-black text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-900 rounded-lg p-4 mb-4 relative">
                      <div className="absolute -bottom-2 left-6 w-4 h-4 bg-gray-900 transform rotate-45"></div>
                      <p className="text-gray-300 italic text-lg leading-relaxed">
                        "🗣️ {testimonial.quote}"
                      </p>
                    </div>
                    <div className="ml-2">
                      <h4 className="text-white font-bold text-lg">– {testimonial.author}</h4>
                      <p className="text-foreground-1 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trainer & Lecturer Feedback */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-chalkboard-teacher text-foreground-2 mr-3"></i>
            Trainer & Lecturer Feedback
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8">
            Our trainers are not just teachers, but practitioners and AI builders. They bring in the newest 
            developments and adapt course content on the fly. Here's their view:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainerTestimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-foreground-1 rounded-full p-3">
                    <i className={`fas ${testimonial.icon} text-black text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-900 rounded-lg p-4 mb-4 relative">
                      <div className="absolute -bottom-2 left-6 w-4 h-4 bg-gray-900 transform rotate-45"></div>
                      <p className="text-gray-300 italic text-lg leading-relaxed">
                        "🗣️ {testimonial.quote}"
                      </p>
                    </div>
                    <div className="ml-2">
                      <h4 className="text-white font-bold text-lg">– {testimonial.author}</h4>
                      <p className="text-foreground-2 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Share Your Experience */}
        <section className="mb-20">
          <div className="card">
            <div className="text-center">
              <h2 className="section-title mb-8">
                <i className="fas fa-share-alt text-foreground-1 mr-3"></i>
                Share Your Experience
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We'd love to hear your voice!
              </p>
              <div className="bg-accent rounded-lg p-8 mb-8">
                <p className="text-white text-lg mb-4">
                  If you're a current or past student, trainer, or partner of the University of AI, 
                  tell us what your journey has been like.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-envelope text-black text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Email Feedback</h3>
                  <p className="text-gray-300 mb-4">Send us your detailed feedback and testimonials</p>
                  <a 
                    href="mailto:feedback@university-of-ai.org" 
                    className="btn-primary inline-flex items-center"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    feedback@university-of-ai.org
                  </a>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-edit text-black text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Feedback Form</h3>
                  <p className="text-gray-300 mb-4">Use our structured feedback form for quick input</p>
                  <button className="btn-secondary inline-flex items-center">
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Open Feedback Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-8">
                <i className="fas fa-users text-foreground-2 mr-3"></i>
                Community Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-foreground-1 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-graduation-cap text-black text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Students</h3>
                  <p className="text-gray-300">From diverse backgrounds, united by AI passion</p>
                </div>
                <div className="text-center">
                  <div className="bg-foreground-2 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-chalkboard-teacher text-black text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Trainers</h3>
                  <p className="text-gray-300">Practitioners building the future in real-time</p>
                </div>
                <div className="text-center">
                  <div className="bg-foreground-1 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-handshake text-black text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Partners</h3>
                  <p className="text-gray-300">Industry leaders shaping AI education</p>
                </div>
              </div>
              <div className="bg-accent rounded-lg p-6">
                <p className="text-white font-bold text-2xl">
                  🧠 Every voice helps shape the future of our University.
                </p>
                <p className="text-white font-bold text-xl mt-2">
                  Let's learn. Let's build. Let's evolve – together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/studies/admissions" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-door-open text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Join Our Community</h3>
              <p className="text-gray-300 mb-4">Start your AI journey with us</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Apply Now
              </div>
            </Link>
            
            <Link to="/news/students" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-user-graduate text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Student Life</h3>
              <p className="text-gray-300 mb-4">Discover our vibrant community</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Learn More
              </div>
            </Link>
            
            <Link to="/university/contact" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-envelope text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-300 mb-4">Contact us for more information</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Contact Us
              </div>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-foreground-1 to-foreground-2 rounded-lg p-12">
          <h2 className="text-4xl font-bold text-black mb-6">
            <i className="fas fa-heart text-black mr-3"></i>
            Your Voice Matters
          </h2>
          <p className="text-xl text-black mb-8">
            Help us continue to improve and inspire future AI innovators. 
            Share your experience and be part of our growing success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:feedback@university-of-ai.org" 
              className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors duration-200 inline-flex items-center"
            >
              <i className="fas fa-envelope mr-2"></i>
              Share Your Story
            </a>
            <button className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-700 transition-colors duration-200 inline-flex items-center">
              <i className="fas fa-edit mr-2"></i>
              Quick Feedback Form
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Feedback
