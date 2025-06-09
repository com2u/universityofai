import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const Academic = () => {
  const careerPathways = [
    {
      stage: "PhD Researchers",
      activities: "Work on cutting-edge AI topics, publish internationally, contribute to teaching",
      icon: "fa-graduation-cap"
    },
    {
      stage: "Postdoctoral Fellows",
      activities: "Lead subprojects, mentor students, apply for grants, deepen your research profile",
      icon: "fa-user-graduate"
    },
    {
      stage: "Lecturers",
      activities: "Teach and design courses, co-author publications, stay industry-relevant",
      icon: "fa-chalkboard-teacher"
    },
    {
      stage: "Professors",
      activities: "Define fields of study, lead research groups, advise governments and companies",
      icon: "fa-user-tie"
    },
    {
      stage: "Research Engineers",
      activities: "Build advanced prototypes and platforms with direct impact on real-world AI",
      icon: "fa-cogs"
    }
  ]

  const researchAreas = [
    {
      icon: "fa-brain",
      title: "Foundation Models & LLMs",
      description: "Large language models and foundational AI systems"
    },
    {
      icon: "fa-robot",
      title: "Autonomous AI Agents",
      description: "Self-directed AI systems and intelligent automation"
    },
    {
      icon: "fa-balance-scale",
      title: "AI Ethics, Safety & Law",
      description: "Responsible AI development and governance"
    },
    {
      icon: "fa-code",
      title: "AI in Software Engineering",
      description: "AI-powered development tools and methodologies"
    },
    {
      icon: "fa-bug",
      title: "AI in Testing, Documentation & DevOps",
      description: "Automated quality assurance and development operations"
    },
    {
      icon: "fa-palette",
      title: "AI for Design, Speech & Media",
      description: "Creative AI applications and multimedia generation"
    },
    {
      icon: "fa-server",
      title: "Machine Learning Infrastructure",
      description: "Scalable ML systems and deployment platforms"
    },
    {
      icon: "fa-lock",
      title: "Zero-Knowledge AI & Secure Computation",
      description: "Privacy-preserving AI and cryptographic methods"
    },
    {
      icon: "fa-database",
      title: "Data Curation & Synthetic Datasets",
      description: "Data quality and artificial data generation"
    },
    {
      icon: "fa-user",
      title: "Human-Centered & Explainable AI",
      description: "Interpretable AI systems and human-AI interaction"
    }
  ]

  const offerings = [
    {
      icon: "fa-chart-line",
      title: "Structured career support",
      description: "Tenure tracks, coaching, and leadership training"
    },
    {
      icon: "fa-globe",
      title: "Global research community",
      description: "Collaborate with leading labs and companies worldwide"
    },
    {
      icon: "fa-laptop",
      title: "AI-first infrastructure",
      description: "GPU clusters, experiment tracking, private LLMs, CI pipelines"
    },
    {
      icon: "fa-graduation-cap",
      title: "Teaching innovation",
      description: "Dynamic curricula, agent-based learning systems, microdegrees"
    },
    {
      icon: "fa-users",
      title: "Mentorship & community",
      description: "We actively support early-career researchers through peer mentoring and open publishing practices"
    }
  ]

  const collaborationAspects = [
    {
      icon: "fa-handshake",
      title: "Partner with industry on real-world challenges",
      description: "Work directly with companies to solve practical AI problems"
    },
    {
      icon: "fa-open-source",
      title: "Open-source our research tools and agents",
      description: "Contribute to the global AI research community"
    },
    {
      icon: "fa-user-graduate",
      title: "Embed students in active projects from semester one",
      description: "Hands-on learning through real research participation"
    },
    {
      icon: "fa-rocket",
      title: "Support startup spin-offs, patents, and publications",
      description: "Transform research into commercial and academic impact"
    }
  ]

  const positions = [
    { title: "PhD candidates", icon: "fa-graduation-cap" },
    { title: "Postdocs", icon: "fa-user-graduate" },
    { title: "Guest professors", icon: "fa-chalkboard-teacher" },
    { title: "Adjunct lecturers", icon: "fa-microphone" },
    { title: "Research assistants (student or professional)", icon: "fa-flask" }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-microscope text-foreground-1 mr-4"></i>
            Academic Career at the University of AI
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-8"
          >
            Academic
          </GradientText>
          <div className="bg-accent rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">🚀 Why an Academic Career in AI?</h3>
            <p className="text-white text-lg">
              Artificial Intelligence is transforming every industry – but its foundations are being shaped 
              in research labs, lecture halls, and collaborative innovation spaces. At the University of AI, 
              you don't just study or teach AI — you help define how the world learns and applies it.
            </p>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mt-6">
            Whether you're a postdoc, early-stage researcher, or seasoned academic, our university offers 
            a highly dynamic, international, and tech-forward environment for your scientific journey.
          </p>
        </div>

        {/* Career Pathways */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-route text-foreground-1 mr-3"></i>
            Career Pathways
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left text-white font-bold">Stage</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Role & Activities</th>
                </tr>
              </thead>
              <tbody>
                {careerPathways.map((pathway, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <i className={`fas ${pathway.icon} text-foreground-1`}></i>
                        <span className="text-white font-medium">{pathway.stage}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{pathway.activities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Research Focus Areas */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-brain text-foreground-2 mr-3"></i>
            Our Research Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-2 rounded-full p-3 mt-1">
                    <i className={`fas ${area.icon} text-black text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">{area.title}</h3>
                    <p className="text-gray-300 text-sm">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-gift text-foreground-1 mr-3"></i>
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offer, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${offer.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{offer.title}</h3>
                <p className="text-gray-300 text-sm">{offer.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration & Transfer */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-handshake text-foreground-2 mr-3"></i>
              Collaboration & Transfer
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We believe that applied AI research should be usable, scalable, and inclusive. That's why we:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collaborationAspects.map((aspect, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-foreground-1 rounded-full p-3">
                    <i className={`fas ${aspect.icon} text-black text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{aspect.title}</h3>
                    <p className="text-gray-300 text-sm">{aspect.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-users text-foreground-1 mr-3"></i>
            Want to join our scientific team?
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8">We are constantly hiring:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {positions.map((position, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${position.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-white">{position.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/university/career" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-briefcase text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Careers Page</h3>
              <p className="text-gray-300 mb-4">Visit our Careers Page for open positions</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Open Positions
              </div>
            </Link>
            
            <Link to="/studies/research" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-flask text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Research Projects</h3>
              <p className="text-gray-300 mb-4">Explore our ongoing research initiatives</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Research
              </div>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">
            <i className="fas fa-envelope text-foreground-2 mr-3"></i>
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            At the University of AI, science is not static – it evolves with every experiment, 
            every agent, and every student.
          </p>
          <div className="bg-accent rounded-lg p-6 mb-8">
            <p className="text-white font-bold text-2xl mb-2">Let's shape the intelligent future together.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:academic@university-of-ai.edu" 
              className="btn-primary text-lg px-8 py-4"
            >
              <i className="fas fa-envelope mr-2"></i>
              academic@university-of-ai.edu
            </a>
            <Link to="/university/contact" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-phone mr-2"></i>
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Academic
