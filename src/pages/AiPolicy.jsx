import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const AiPolicy = () => {
  const complianceStandards = [
    {
      icon: "fa-flag",
      title: "EU AI Act",
      description: "For European collaborations and research"
    },
    {
      icon: "fa-shield-alt",
      title: "GDPR",
      description: "For personal data protection"
    },
    {
      icon: "fa-balance-scale",
      title: "IEEE Ethically Aligned Design",
      description: "Principles for ethical AI development"
    },
    {
      icon: "fa-globe",
      title: "OECD AI Principles",
      description: "Transparency, accountability, robustness, human-centered values"
    },
    {
      icon: "fa-university",
      title: "National Standards",
      description: "University-internal data policies"
    }
  ]

  const ethicalGuidelines = [
    {
      icon: "fa-eye",
      title: "Transparency",
      description: "Clearly labeling AI-generated content in educational materials, communication, and projects",
      details: "Disclosing any use of automated decision systems in administrative workflows"
    },
    {
      icon: "fa-balance-scale",
      title: "Fairness & Non-Discrimination",
      description: "Ensuring datasets used in training are curated for fairness and inclusivity",
      details: "Mitigating algorithmic bias through regular audits and peer review"
    },
    {
      icon: "fa-user-check",
      title: "Accountability",
      description: "Every AI project must list a responsible human lead",
      details: "Student projects using autonomous systems must pass additional ethical review"
    },
    {
      icon: "fa-hand-paper",
      title: "Human Autonomy",
      description: "AI must support, not replace, human decision-making in education and research",
      details: "Students and staff retain the right to opt out of AI-mediated evaluation processes"
    },
    {
      icon: "fa-lock",
      title: "Security",
      description: "All AI tools must adhere to cybersecurity best practices",
      details: "No unverified or unvetted external APIs/tools are allowed in core infrastructure"
    }
  ]

  const researchRequirements = [
    {
      icon: "fa-clipboard-check",
      title: "Ethics Check",
      description: "Required if projects involve user interaction, facial recognition, biometric data, or automated decision-making"
    },
    {
      icon: "fa-search",
      title: "Avoid Black-box Deployments",
      description: "No black-box deployments in critical use cases"
    },
    {
      icon: "fa-database",
      title: "FAIR Data Principles",
      description: "Follow Findable, Accessible, Interoperable, Reusable data standards"
    }
  ]

  const studentGuidelines = [
    {
      type: "must_not",
      icon: "fa-times-circle",
      title: "Students must not:",
      items: [
        "Use generative AI to complete assignments without declaration",
        "Use AI tools to impersonate others, generate misleading content, or bypass testing",
        "Train models using private/unlicensed datasets without permission"
      ]
    },
    {
      type: "encouraged",
      icon: "fa-check-circle",
      title: "Students are encouraged to:",
      items: [
        "Document their AI tools and usage in reports/presentations",
        "Participate in ethical workshops and contribute to policy improvements"
      ]
    }
  ]

  const systemRequirements = [
    {
      icon: "fa-file-alt",
      title: "Document Architecture",
      description: "Clearly document data sources and model architecture (where applicable)"
    },
    {
      icon: "fa-tag",
      title: "Indicate AI Content",
      description: "Indicate when AI-generated content is being presented"
    },
    {
      icon: "fa-user-cog",
      title: "Human Oversight",
      description: "Offer human oversight where AI influences decisions"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-shield-alt text-foreground-1 mr-4"></i>
            AI Use Policy – University of AI
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-8"
          >
            AI Use Policy
          </GradientText>
          <div className="bg-accent rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">🎯 Purpose of this Policy</h3>
            <p className="text-white text-lg">
              The AI Use Policy of the University of AI ensures that the application, development, 
              and teaching of artificial intelligence within the university follows ethical, legal, 
              and societal standards. It applies to all students, faculty, researchers, and administrative staff.
            </p>
          </div>
        </div>

        {/* Scope */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-crosshairs text-foreground-1 mr-3"></i>
            Scope
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8">This policy governs:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="bg-foreground-2 rounded-full p-3">
                  <i className="fas fa-cogs text-black text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Development and Deployment</h3>
                  <p className="text-gray-300">Development and deployment of AI systems within university projects and coursework</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="bg-foreground-1 rounded-full p-3">
                  <i className="fas fa-tools text-black text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">External AI Tools</h3>
                  <p className="text-gray-300">Usage of external AI tools (e.g., LLMs, image/audio generators, automation agents)</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="bg-foreground-2 rounded-full p-3">
                  <i className="fas fa-database text-black text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Data Handling</h3>
                  <p className="text-gray-300">Data handling, model training, and publishing of AI research</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="bg-foreground-1 rounded-full p-3">
                  <i className="fas fa-handshake text-black text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Third-party Collaboration</h3>
                  <p className="text-gray-300">Collaboration with third-party platforms and technologies involving AI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-gavel text-foreground-2 mr-3"></i>
            Regulatory Compliance
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8">
            We comply with all applicable AI-related regulations, including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${standard.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{standard.title}</h3>
                <p className="text-gray-300 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold text-white mb-4">System Requirements</h3>
            <p className="text-gray-300 mb-6">All AI systems or tools used within official university activities must:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {systemRequirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-foreground-2 rounded-full p-2">
                    <i className={`fas ${req.icon} text-black text-sm`}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{req.title}</h4>
                    <p className="text-gray-300 text-sm">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ethical AI Guidelines */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-compass text-foreground-1 mr-3"></i>
            Ethical AI Guidelines
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8">The university is committed to:</p>
          <div className="space-y-8">
            {ethicalGuidelines.map((guideline, index) => (
              <div key={index} className="card">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center">
                      <i className={`fas ${guideline.icon} text-black text-xl`}></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{guideline.title}</h3>
                    <p className="text-gray-300 mb-3">{guideline.description}</p>
                    <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-foreground-1">
                      <p className="text-gray-300 text-sm">{guideline.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research & Development */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-flask text-foreground-2 mr-3"></i>
              Research & Development
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              The University of AI encourages cutting-edge exploration, but within responsible boundaries. 
              All AI research projects must:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {researchRequirements.map((req, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <div className="bg-foreground-1 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${req.icon} text-black text-lg`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 text-center">{req.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{req.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Code of Conduct */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-user-graduate text-foreground-1 mr-3"></i>
            Student Code of Conduct – AI Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentGuidelines.map((guideline, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${guideline.type === 'must_not' ? 'bg-red-600' : 'bg-green-600'} rounded-full p-3`}>
                    <i className={`fas ${guideline.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white">{guideline.title}</h3>
                </div>
                <ul className="space-y-3">
                  {guideline.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className={`${guideline.type === 'must_not' ? 'text-red-400' : 'text-green-400'} mt-1`}>
                        <i className={`fas ${guideline.type === 'must_not' ? 'fa-times' : 'fa-check'} text-sm`}></i>
                      </div>
                      <p className="text-gray-300 text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Reporting & Oversight */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-flag text-foreground-2 mr-3"></i>
              Reporting & Oversight
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Concerns or violations regarding AI use can be reported confidentially to:
            </p>
            <div className="bg-accent rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">AI Ethics Board</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <a 
                  href="mailto:ethics@university-of-ai.org" 
                  className="text-foreground-2 font-bold text-xl hover:underline flex items-center gap-2"
                >
                  <i className="fas fa-envelope"></i>
                  ethics@university-of-ai.org
                </a>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-white text-sm">
                  🛡️ Review board includes legal, technical, and ethics representatives
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Continuous Improvement */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                <i className="fas fa-sync-alt text-foreground-1 mr-3"></i>
                Continuous Improvement
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This policy is updated bi-annually to reflect current technology, regulation, 
                and research developments. Suggestions are welcome and reviewed transparently.
              </p>
              <div className="bg-accent rounded-lg p-6 mb-8">
                <p className="text-white font-bold text-2xl mb-2">We don't just build AI. We build it right.</p>
                <p className="text-white font-bold text-xl">Responsibility is part of innovation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/university/feedback" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-comments text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Share Feedback</h3>
              <p className="text-gray-300 mb-4">Help us improve our AI policies</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Give Feedback
              </div>
            </Link>
            
            <Link to="/studies/research" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-flask text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Research Ethics</h3>
              <p className="text-gray-300 mb-4">Learn about ethical AI research</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Research
              </div>
            </Link>
            
            <Link to="/university/contact" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-envelope text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Contact Ethics Board</h3>
              <p className="text-gray-300 mb-4">Report concerns or ask questions</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Contact Us
              </div>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gradient-to-r from-foreground-1 to-foreground-2 rounded-lg p-12">
          <h2 className="text-4xl font-bold text-black mb-6">
            <i className="fas fa-balance-scale text-black mr-3"></i>
            Questions About Our AI Policy?
          </h2>
          <p className="text-xl text-black mb-8">
            We're committed to transparency and continuous improvement. 
            Reach out with any questions or suggestions about our AI use policies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:ethics@university-of-ai.org" 
              className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors duration-200 inline-flex items-center"
            >
              <i className="fas fa-envelope mr-2"></i>
              ethics@university-of-ai.org
            </a>
            <Link 
              to="/university/contact" 
              className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-700 transition-colors duration-200 inline-flex items-center"
            >
              <i className="fas fa-phone mr-2"></i>
              General Contact
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AiPolicy
