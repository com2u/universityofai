import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const Contact = () => {
  const departments = [
    {
      topic: "Admissions & Enrollment",
      contact: "Admissions Office",
      email: "admissions@university-of-ai.org",
      icon: "fa-door-open"
    },
    {
      topic: "Courses & Workshops",
      contact: "Program Coordination",
      email: "courses@university-of-ai.org",
      icon: "fa-graduation-cap"
    },
    {
      topic: "Research & Projects",
      contact: "Research Office",
      email: "research@university-of-ai.org",
      icon: "fa-flask"
    },
    {
      topic: "Career & Internships",
      contact: "Career Services",
      email: "career@university-of-ai.org",
      icon: "fa-briefcase"
    },
    {
      topic: "AI Ethics & Policy",
      contact: "AI Ethics Board",
      email: "ethics@university-of-ai.org",
      icon: "fa-balance-scale"
    },
    {
      topic: "Press & Partnerships",
      contact: "Communication Department",
      email: "press@university-of-ai.org",
      icon: "fa-newspaper"
    }
  ]

  const supportChannels = [
    {
      icon: "fa-envelope",
      title: "Email Support",
      description: "Get help via email",
      contact: "tech-support@university-of-ai.org",
      availability: "24/7 response within 24 hours"
    },
    {
      icon: "fa-comments",
      title: "Live Chat",
      description: "Real-time assistance",
      contact: "Available via campus portal",
      availability: "Mon-Fri, 9 AM - 6 PM CET"
    },
    {
      icon: "fa-ticket-alt",
      title: "Support Tickets",
      description: "Track your requests",
      contact: "Support ticket system on student portal",
      availability: "24/7 ticket submission"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-phone text-foreground-1 mr-4"></i>
            Contact & Support – University of AI
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-8"
          >
            Contact
          </GradientText>
          <div className="bg-accent rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">💬 How Can We Help?</h3>
            <p className="text-white text-lg">
              Whether you're a student, trainer, applicant, or partner — we're happy to assist 
              with your questions and feedback.
            </p>
          </div>
        </div>

        {/* General Contact */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-envelope text-foreground-1 mr-3"></i>
            General Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card text-center">
              <div className="bg-foreground-2 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-envelope text-black text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
              <a 
                href="mailto:support@university-of-ai.org" 
                className="text-foreground-1 font-bold text-xl hover:underline mb-4 block"
              >
                support@university-of-ai.org
              </a>
              <p className="text-gray-300">For general inquiries and support</p>
            </div>
            
            <div className="card text-center">
              <div className="bg-foreground-1 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-comments text-black text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Live Chat</h3>
              <p className="text-foreground-2 font-bold text-xl mb-4">Available via campus portal</p>
              <p className="text-gray-300">Real-time assistance for students and staff</p>
            </div>
          </div>
        </section>

        {/* Departments & Direct Contacts */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-sitemap text-foreground-2 mr-3"></i>
            Departments & Direct Contacts
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left text-white font-bold">Topic</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Contact Person / Team</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Email</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((dept, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <i className={`fas ${dept.icon} text-foreground-1`}></i>
                        <span className="text-white font-medium">{dept.topic}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{dept.contact}</td>
                    <td className="px-6 py-4">
                      <a 
                        href={`mailto:${dept.email}`} 
                        className="text-foreground-2 hover:underline"
                      >
                        {dept.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Technical Support */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-tools text-foreground-1 mr-3"></i>
            Technical Support
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8">
            Platform login, media, e-learning & tools
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${channel.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-3">{channel.description}</p>
                <p className="text-foreground-1 font-medium mb-2">{channel.contact}</p>
                <p className="text-gray-400 text-sm">{channel.availability}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="mailto:tech-support@university-of-ai.org" 
              className="btn-primary text-lg px-8 py-4"
            >
              <i className="fas fa-envelope mr-2"></i>
              tech-support@university-of-ai.org
            </a>
          </div>
        </section>

        {/* Campus Address */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-map-marker-alt text-foreground-2 mr-3"></i>
              Campus Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">University of AI</h3>
                <p className="text-gray-300 mb-2">(Virtual-First Institution)</p>
                <p className="text-gray-300 mb-6">
                  Main Office (for legal & mailing purposes):
                </p>
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="bg-foreground-1 rounded-full p-3">
                      <i className="fas fa-building text-black text-xl"></i>
                    </div>
                    <div>
                      <p className="text-white font-medium">Frohschammerstr. 6</p>
                      <p className="text-white font-medium">80807 Munich</p>
                      <p className="text-white font-medium">Germany</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-foreground-1 to-foreground-2 rounded-lg p-8 text-center">
                  <i className="fas fa-globe text-black text-4xl mb-4"></i>
                  <h4 className="text-black font-bold text-xl mb-2">Virtual-First University</h4>
                  <p className="text-black">
                    Our campus is everywhere our students are. 
                    Connect with us online from anywhere in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-gavel text-foreground-1 mr-3"></i>
              Legal Notice (Impressum)
            </h2>
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Responsible Entity:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 mb-2"><strong className="text-white">Patrick Hess</strong></p>
                  <p className="text-gray-300 mb-2">CEO of Com2u.de</p>
                  <p className="text-gray-300 mb-2">Frohschammerstr. 6</p>
                  <p className="text-gray-300 mb-4">80807 Munich, Germany</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-2"><strong className="text-white">Contact:</strong></p>
                  <a 
                    href="mailto:info@com2u.de" 
                    className="text-foreground-2 hover:underline font-medium"
                  >
                    info@com2u.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Links */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-link text-foreground-2 mr-3"></i>
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/studies/admissions" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-door-open text-3xl text-foreground-1 mb-3"></i>
              <h3 className="text-lg font-bold text-white mb-2">Admissions</h3>
              <p className="text-gray-300 text-sm">Apply to our programs</p>
            </Link>
            
            <Link to="/university/career" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-briefcase text-3xl text-foreground-2 mb-3"></i>
              <h3 className="text-lg font-bold text-white mb-2">Careers</h3>
              <p className="text-gray-300 text-sm">Join our team</p>
            </Link>
            
            <Link to="/university/feedback" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-comments text-3xl text-foreground-1 mb-3"></i>
              <h3 className="text-lg font-bold text-white mb-2">Feedback</h3>
              <p className="text-gray-300 text-sm">Share your experience</p>
            </Link>
            
            <Link to="/university/cooperation" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-handshake text-3xl text-foreground-2 mb-3"></i>
              <h3 className="text-lg font-bold text-white mb-2">Partnerships</h3>
              <p className="text-gray-300 text-sm">Collaborate with us</p>
            </Link>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title text-center mb-8">
              <i className="fas fa-paper-plane text-foreground-1 mr-3"></i>
              Send Us a Message
            </h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-foreground-1 focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-foreground-1 focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Subject *</label>
                  <select className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-foreground-1 focus:outline-none">
                    <option value="">Select a topic</option>
                    <option value="admissions">Admissions & Enrollment</option>
                    <option value="courses">Courses & Programs</option>
                    <option value="research">Research & Projects</option>
                    <option value="career">Career Opportunities</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea 
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-foreground-1 focus:outline-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn-primary text-lg px-8 py-4">
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">
            <i className="fas fa-heart text-foreground-2 mr-3"></i>
            University of AI – Empowering Intelligence. Together.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to be part of the AI revolution? We're here to support your journey every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@university-of-ai.org" 
              className="btn-primary text-lg px-8 py-4"
            >
              <i className="fas fa-envelope mr-2"></i>
              Get in Touch
            </a>
            <Link to="/studies/admissions" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-rocket mr-2"></i>
              Start Your Journey
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
