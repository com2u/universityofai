import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const Cooperation = () => {
  const partnerTypes = [
    {
      icon: "fa-laptop-code",
      title: "Tech Companies",
      description: "Integration of latest AI tools & platforms",
      examples: "e.g. OpenAI, Hugging Face, NVIDIA, AWS, Google Cloud"
    },
    {
      icon: "fa-university",
      title: "Universities & Research Institutions",
      description: "Joint research, faculty exchange, dual-degree programs",
      examples: "Academic collaboration and knowledge sharing"
    },
    {
      icon: "fa-rocket",
      title: "Startups & Innovation Hubs",
      description: "Project-based collaboration, incubation support, mentorship",
      examples: "Fostering entrepreneurship and innovation"
    },
    {
      icon: "fa-heart",
      title: "NGOs & Public Sector",
      description: "Social innovation, sustainability, ethics and AI for good",
      examples: "Creating positive social impact through AI"
    },
    {
      icon: "fa-industry",
      title: "Industry Partners",
      description: "Real-world case studies, internships, curriculum shaping",
      examples: "Bridging academia and industry needs"
    }
  ]

  const benefits = [
    {
      icon: "fa-user-graduate",
      title: "Access to Top Talent",
      description: "Our students and researchers work on cutting-edge AI solutions, ready to contribute from day one"
    },
    {
      icon: "fa-crystal-ball",
      title: "Shape the Future",
      description: "Influence the design of AI education and be part of defining industry standards"
    },
    {
      icon: "fa-flask",
      title: "Prototype with Us",
      description: "Use our labs and talent pool for joint development of new AI tools and solutions"
    },
    {
      icon: "fa-chalkboard-teacher",
      title: "Share Knowledge",
      description: "Give guest lectures, host workshops, co-create training programs"
    }
  ]

  const collaborationFormats = [
    {
      format: "Joint Research Projects",
      description: "Co-funded initiatives on AI innovation, data, security, ethics, automation",
      icon: "fa-flask"
    },
    {
      format: "Internship Programs",
      description: "Place our students in your AI projects",
      icon: "fa-user-tie"
    },
    {
      format: "Guest Lectures & Seminars",
      description: "Share industry insights with future AI professionals",
      icon: "fa-microphone"
    },
    {
      format: "Innovation Challenges",
      description: "Co-create real-world case studies, hackathons, and design sprints",
      icon: "fa-lightbulb"
    },
    {
      format: "Dual Certification Tracks",
      description: "Build customized training for your workforce",
      icon: "fa-certificate"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-handshake text-foreground-1 mr-4"></i>
            Cooperation & Partners
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-8"
          >
            Cooperation & Partners
          </GradientText>
          <div className="bg-accent rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">🔗 Strategic Partnerships for a Smarter Tomorrow</h3>
            <p className="text-white text-lg">
              The University of AI actively cultivates a strong and diverse partner network across 
              academia, industry, public institutions, and NGOs. These partnerships are central to 
              our mission of delivering real-world, AI-enabled education and research that makes a global impact.
            </p>
          </div>
        </div>

        {/* Partner Network */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-network-wired text-foreground-1 mr-3"></i>
            Our Partner Network Includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerTypes.map((partner, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-2 rounded-full p-3 mt-1">
                    <i className={`fas ${partner.icon} text-black text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{partner.title}</h3>
                    <p className="text-gray-300 mb-3">{partner.description}</p>
                    <p className="text-sm text-foreground-1 italic">{partner.examples}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Collaborate */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-bullseye text-foreground-2 mr-3"></i>
            Why Collaborate with Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-1 rounded-full p-3">
                    <i className={`fas ${benefit.icon} text-black text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration Formats */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-rocket text-foreground-1 mr-3"></i>
            Example Collaboration Formats
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left text-white font-bold">Format</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                {collaborationFormats.map((format, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <i className={`fas ${format.icon} text-foreground-1`}></i>
                        <span className="text-white font-medium">{format.format}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{format.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="mb-20">
          <div className="card">
            <div className="text-center">
              <h2 className="section-title mb-8">
                <i className="fas fa-envelope text-foreground-2 mr-3"></i>
                Become a Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We are always open to forward-thinking collaborations.
              </p>
              <div className="bg-accent rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Interested in partnering with us?
                </h3>
                <p className="text-white text-lg mb-6">Get in touch via:</p>
                <a 
                  href="mailto:partners@university-of-ai.org" 
                  className="text-foreground-2 font-bold text-2xl hover:underline"
                >
                  📧 partners@university-of-ai.org
                </a>
              </div>
              <div className="bg-gradient-to-r from-foreground-1 to-foreground-2 rounded-lg p-6">
                <p className="text-black font-bold text-xl">
                  🧠 Together, we can teach and build the next generation of intelligent systems.
                </p>
                <p className="text-black font-bold text-2xl mt-2">
                  Let's create what's next.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/studies/research" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-flask text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Research Projects</h3>
              <p className="text-gray-300 mb-4">Explore our ongoing research initiatives</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Research
              </div>
            </Link>
            
            <Link to="/studies/entrepreneur" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-rocket text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Entrepreneurship</h3>
              <p className="text-gray-300 mb-4">Join our startup incubation programs</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Learn More
              </div>
            </Link>
            
            <Link to="/university/career" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-briefcase text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Career Opportunities</h3>
              <p className="text-gray-300 mb-4">Join our team and shape the future</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Jobs
              </div>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">
            <i className="fas fa-users text-foreground-1 mr-3"></i>
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our network of forward-thinking partners and help shape the future of AI education and research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:partners@university-of-ai.org" 
              className="btn-primary text-lg px-8 py-4"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact Partnership Team
            </a>
            <Link to="/university/contact" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-info-circle mr-2"></i>
              General Information
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Cooperation
