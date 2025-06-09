import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const ResearchFunding = () => {
  const fundingAreas = [
    {
      icon: "fa-robot",
      title: "AI Tooling & Agent Development",
      description: "Creation of intelligent systems, LLM-based workflows, and automation tools"
    },
    {
      icon: "fa-balance-scale",
      title: "Responsible & Ethical AI",
      description: "Studies on AI fairness, transparency, privacy, and policy implications"
    },
    {
      icon: "fa-code",
      title: "AI in Software Engineering",
      description: "Projects using AI for code generation, quality assurance, and testing"
    },
    {
      icon: "fa-palette",
      title: "Creative AI",
      description: "Generative AI for images, video, sound, language, and design workflows"
    },
    {
      icon: "fa-users",
      title: "AI & Society",
      description: "Investigations into the social, economic, and cultural effects of AI systems"
    },
    {
      icon: "fa-database",
      title: "Data Science & Infrastructure",
      description: "Scalable data pipelines, dataset curation, and training optimization for large models"
    },
    {
      icon: "fa-puzzle-piece",
      title: "Cross-disciplinary AI",
      description: "Integrating AI in education, sustainability, healthcare, and digital humanities"
    }
  ]

  const fundingTracks = [
    {
      track: "Student Micro Grants",
      purpose: "Early-stage project ideas, prototypes",
      eligible: "Bachelor & Master students",
      icon: "fa-graduation-cap"
    },
    {
      track: "Faculty Research Awards",
      purpose: "Faculty-led research programs",
      eligible: "Professors, lecturers, research staff",
      icon: "fa-chalkboard-teacher"
    },
    {
      track: "Industry Co-Labs",
      purpose: "Joint research with commercial partners",
      eligible: "University + Company teams",
      icon: "fa-handshake"
    },
    {
      track: "Open Innovation Grants",
      purpose: "Public challenges & open-source projects",
      eligible: "Individuals, alumni, external researchers",
      icon: "fa-globe"
    },
    {
      track: "AI for Good",
      purpose: "Social impact research",
      eligible: "Cross-institutional teams, NGOs, PhD candidates",
      icon: "fa-heart"
    }
  ]

  const offerings = [
    {
      icon: "fa-euro-sign",
      title: "Funding from €500 up to €50,000 per project",
      description: "Flexible funding amounts based on project scope"
    },
    {
      icon: "fa-server",
      title: "Access to compute infrastructure",
      description: "GPU/TPU clusters, model hosting"
    },
    {
      icon: "fa-user-tie",
      title: "Mentoring from academic and industry experts",
      description: "Guidance from experienced professionals"
    },
    {
      icon: "fa-shield-alt",
      title: "Project support services",
      description: "Legal, ethics, data security review"
    },
    {
      icon: "fa-microphone",
      title: "Publication & pitch opportunities",
      description: "At conferences and internal events"
    },
    {
      icon: "fa-rocket",
      title: "Fast-track to our StartUp Incubator",
      description: "For commercializable results"
    }
  ]

  const applicationSteps = [
    {
      step: "1",
      title: "Prepare a Concept Paper",
      description: "Describe your idea, goals, relevance, and methodology (2-3 pages)",
      icon: "fa-file-alt"
    },
    {
      step: "2",
      title: "Submit Online",
      description: "Use the Research Portal form to upload your proposal and budget",
      icon: "fa-upload"
    },
    {
      step: "3",
      title: "Evaluation",
      description: "All submissions are peer-reviewed by a diverse panel within 3–4 weeks",
      icon: "fa-search"
    },
    {
      step: "4",
      title: "Feedback & Award",
      description: "Accepted projects receive kickoff instructions, mentor assignment, and funding schedule",
      icon: "fa-trophy"
    },
    {
      step: "5",
      title: "Project Launch & Reporting",
      description: "You begin working with milestones, regular check-ins, and a final outcome presentation",
      icon: "fa-play"
    }
  ]

  const partnerships = [
    {
      icon: "fa-rocket",
      title: "Startups & tech companies",
      description: "Innovation partnerships"
    },
    {
      icon: "fa-heart",
      title: "NGOs & nonprofits",
      description: "Social impact collaborations"
    },
    {
      icon: "fa-university",
      title: "Research institutions & universities",
      description: "Academic partnerships"
    },
    {
      icon: "fa-landmark",
      title: "Governmental funding bodies",
      description: "Public sector collaboration"
    }
  ]

  const spotlightProjects = [
    {
      title: "Zero-Knowledge Proofs for AI Validation",
      type: "Faculty Grant",
      icon: "fa-lock"
    },
    {
      title: "AI-Driven Accessibility Tools for Education",
      type: "Student Grant",
      icon: "fa-universal-access"
    },
    {
      title: "Prompt Auditing Framework",
      type: "Open Innovation",
      icon: "fa-search"
    },
    {
      title: "AI for Wildlife Monitoring with Drones",
      type: "Industry Co-Lab",
      icon: "fa-drone"
    },
    {
      title: "Voice-to-Code Interface for the Visually Impaired",
      type: "AI for Good",
      icon: "fa-microphone"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-flask text-foreground-1 mr-4"></i>
            Research Funding
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-8"
          >
            Research Funding
          </GradientText>
          <div className="bg-accent rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">🚀 Our Mission</h3>
            <p className="text-white text-lg">
              At the University of AI, we believe that true innovation starts with strong support for research. 
              Our Research Funding Program enables students, faculty, and partners to develop cutting-edge 
              projects that advance AI technologies and explore their impact on society, business, and science.
            </p>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mt-6">
            Whether you're working on autonomous agents, AI-assisted education tools, medical diagnostics, 
            or ethical AI governance – we provide the resources and infrastructure to turn your vision into reality.
          </p>
        </div>

        {/* What We Fund */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-bullseye text-foreground-1 mr-3"></i>
            What We Fund
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8">
            We support a wide range of research initiatives, including but not limited to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundingAreas.map((area, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-2 rounded-full p-3 mt-1">
                    <i className={`fas ${area.icon} text-black text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                    <p className="text-gray-300">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Available Funding Tracks */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-road text-foreground-2 mr-3"></i>
            Available Funding Tracks
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left text-white font-bold">Track</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Purpose</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Eligible Applicants</th>
                </tr>
              </thead>
              <tbody>
                {fundingTracks.map((track, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <i className={`fas ${track.icon} text-foreground-1`}></i>
                        <span className="text-white font-medium">{track.track}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{track.purpose}</td>
                    <td className="px-6 py-4 text-gray-300">{track.eligible}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${offer.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{offer.title}</h3>
                <p className="text-gray-300 text-sm">{offer.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-clipboard-list text-foreground-2 mr-3"></i>
            Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
          
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                <i className="fas fa-edit mr-2"></i>
                📝 Submit a Proposal
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                <i className="fas fa-download mr-2"></i>
                📄 Download Guidelines & Templates
              </button>
            </div>
          </div>
        </section>

        {/* External Partnerships */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-handshake text-foreground-1 mr-3"></i>
              External Partnerships Welcome
            </h2>
            <p className="text-lg text-gray-300 mb-8">We collaborate with:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {partnerships.map((partner, index) => (
                <div key={index} className="text-center">
                  <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${partner.icon} text-black text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{partner.title}</h3>
                  <p className="text-gray-300 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-accent rounded-lg p-6 text-center">
              <p className="text-white font-medium text-lg mb-4">
                If you're interested in co-creating or sponsoring AI research with us, get in touch:
              </p>
              <a href="mailto:research@university-of-ai.org" className="text-foreground-2 font-bold text-xl hover:underline">
                research@university-of-ai.org
              </a>
            </div>
          </div>
        </section>

        {/* Spotlight Projects */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-star text-foreground-2 mr-3"></i>
            Spotlight: Recently Funded Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spotlightProjects.map((project, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-1 rounded-full p-3">
                    <i className={`fas ${project.icon} text-black text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <span className="bg-foreground-2 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/studies/research" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-flask text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Research Projects</h3>
              <p className="text-gray-300 mb-4">Explore ongoing research initiatives</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Projects
              </div>
            </Link>
            
            <Link to="/studies/entrepreneur" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-rocket text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">StartUp Incubator</h3>
              <p className="text-gray-300 mb-4">Turn research into commercial ventures</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Learn More
              </div>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">
            <i className="fas fa-lightbulb text-foreground-1 mr-3"></i>
            We Support Bold Ideas
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're just starting or working on deep research, University of AI backs your curiosity. 
            We fund what's next – not just what's proven.
          </p>
          <div className="bg-accent rounded-lg p-6 mb-8">
            <p className="text-white font-bold text-2xl mb-2">Start now. Invent tomorrow.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-rocket mr-2"></i>
              Apply for Funding
            </button>
            <Link to="/university/contact" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-envelope mr-2"></i>
              Contact Research Office
            </Link>
          </div>
          <p className="text-gray-300">
            Questions? Contact our Research Office: 
            <a href="mailto:research@university-of-ai.org" className="text-foreground-2 hover:underline ml-2">
              research@university-of-ai.org
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}

export default ResearchFunding
