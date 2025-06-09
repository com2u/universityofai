import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const MasterPitch = () => {
  const evaluationCriteria = [
    {
      icon: "fa-lightbulb",
      title: "Innovation",
      description: "Does the project solve a real, relevant, and future-facing problem?",
      color: "foreground-1"
    },
    {
      icon: "fa-cogs",
      title: "Technical Depth",
      description: "How well are AI models, tools, or agents integrated and optimized?",
      color: "foreground-2"
    },
    {
      icon: "fa-chart-line",
      title: "Impact Potential",
      description: "Can it scale or be used in real-world contexts (business, education, society)?",
      color: "foreground-1"
    },
    {
      icon: "fa-user-check",
      title: "Usability & Design",
      description: "Is the solution intuitive, accessible, and well-visualized?",
      color: "foreground-2"
    },
    {
      icon: "fa-users",
      title: "Collaboration & Process",
      description: "Was the development team-oriented, agile, and documented properly?",
      color: "foreground-1"
    }
  ]

  const projectTopics = [
    "AI Agents for Enterprise Automation",
    "LLM-powered Educational Tools",
    "Ethical AI Governance Platforms",
    "RAG Systems for Legal/Medical Document Search",
    "Voice-Controlled Assistants for Accessibility",
    "Zero-Knowledge Architecture for Federated AI",
    "Image-to-3D-Model Pipelines",
    "AI Code Review Assistants",
    "Predictive Dashboards for Urban Logistics",
    "Neuro-symbolic Systems for Human-like Reasoning"
  ]

  const eventFormat = [
    {
      segment: "🎬 Opening Keynote",
      description: "Industry speaker + welcome message"
    },
    {
      segment: "🧑‍🎓 Student Pitches",
      description: "Project presentations by Master students"
    },
    {
      segment: "🤝 Networking Sessions",
      description: "Meet the teams, ask questions"
    },
    {
      segment: "🏆 Jury & Public Voting",
      description: "Combined decision on top projects"
    },
    {
      segment: "🎖️ Awards & Certificates",
      description: "Best Innovation, Best Technical Depth, Audience Favorite"
    }
  ]

  const attendees = [
    {
      icon: "fa-chalkboard-teacher",
      title: "University of AI Faculty",
      description: "Academic supervisors and professors"
    },
    {
      icon: "fa-handshake",
      title: "Industrial & NGO Project Partners",
      description: "Real-world collaboration partners"
    },
    {
      icon: "fa-rocket",
      title: "Startup Accelerators",
      description: "Incubators and acceleration programs"
    },
    {
      icon: "fa-chart-line",
      title: "VCs & Angel Investors",
      description: "Funding and investment opportunities"
    },
    {
      icon: "fa-flask",
      title: "External AI Researchers",
      description: "Academic and industry researchers"
    },
    {
      icon: "fa-graduation-cap",
      title: "Fellow students & alumni",
      description: "Peer support and networking"
    },
    {
      icon: "fa-newspaper",
      title: "Press & media",
      description: "Coverage and publicity"
    }
  ]

  const previousProjects = [
    {
      title: "DeepDoctor",
      description: "A clinical AI agent supporting triage and diagnostics using RAG",
      icon: "fa-stethoscope"
    },
    {
      title: "AutoTeam",
      description: "A multi-agent task system for product managers",
      icon: "fa-users-cog"
    },
    {
      title: "SynapseGen",
      description: "AI-powered science summarizer with dynamic citation builder",
      icon: "fa-brain"
    },
    {
      title: "GreenPrompt",
      description: "Ethical prompt checker & bias explorer for LLMs",
      icon: "fa-leaf"
    },
    {
      title: "DreamGrid",
      description: "A GenAI storytelling visual platform for education",
      icon: "fa-palette"
    }
  ]

  const deliverables = [
    {
      icon: "fa-file-alt",
      title: "Master Thesis Document",
      description: "Including AI usage declaration"
    },
    {
      icon: "fa-image",
      title: "Project Poster / Summary PDF",
      description: "Visual summary of the project"
    },
    {
      icon: "fa-video",
      title: "Live Demo Video or Interactive Presentation",
      description: "Working demonstration of the solution"
    },
    {
      icon: "fa-code-branch",
      title: "Git Repository or Deployment Link",
      description: "Access to code and live deployment"
    },
    {
      icon: "fa-book",
      title: "Technical Documentation",
      description: "Comprehensive technical details"
    }
  ]

  const outcomes = [
    {
      icon: "fa-briefcase",
      title: "Portfolio-ready showcase material",
      description: "Professional presentation materials for career advancement"
    },
    {
      icon: "fa-eye",
      title: "Visibility with recruiters & partners",
      description: "Direct exposure to industry professionals"
    },
    {
      icon: "fa-rocket",
      title: "Qualification for publication or startup acceleration",
      description: "Pathways to further development and funding"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-rocket text-foreground-1 mr-4"></i>
            Master Pitch Day
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-8"
          >
            Final Presentations Master
          </GradientText>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master Pitch Day is the culmination of the University of AI experience — a live, highly 
            anticipated event where our graduating students present their AI-driven thesis projects 
            to industry leaders, mentors, instructors, partners, and peers.
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mt-6">
            Each project reflects months of applied research, AI tooling, innovation, and collaboration, 
            aligned with real-world problems and technology trends.
          </p>
        </div>

        {/* What Is the Master Pitch */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-microphone text-foreground-1 mr-3"></i>
              What Is the Master Pitch?
            </h2>
            <div className="bg-accent rounded-lg p-6 mb-8">
              <p className="text-white text-center font-medium text-xl">
                It's not a theoretical exam. It's a live demonstration of your impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-foreground-1 rounded-full p-2 mt-1">
                  <i className="fas fa-clock text-black text-sm"></i>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Students present a 15-minute pitch of their Master project</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-foreground-2 rounded-full p-2 mt-1">
                  <i className="fas fa-question-circle text-black text-sm"></i>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Followed by 5-minute live Q&A with an expert jury</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-foreground-1 rounded-full p-2 mt-1">
                  <i className="fas fa-users text-black text-sm"></i>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Projects are presented to the public audience, partners & press</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-foreground-2 rounded-full p-2 mt-1">
                  <i className="fas fa-trophy text-black text-sm"></i>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Winners receive certificates, funding opportunities, and internships</h3>
                </div>
              </div>
              <div className="flex items-start gap-4 md:col-span-2">
                <div className="bg-foreground-1 rounded-full p-2 mt-1">
                  <i className="fas fa-video text-black text-sm"></i>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Pitch Day is recorded and featured in the official University of AI Portfolio</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-search text-foreground-2 mr-3"></i>
            Evaluation Criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {evaluationCriteria.map((criteria, index) => (
              <div key={index} className="card text-center">
                <div className={`bg-${criteria.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <i className={`fas ${criteria.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{criteria.title}</h3>
                <p className="text-gray-300">{criteria.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Topics */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-tools text-foreground-1 mr-3"></i>
              Project Topics Include
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectTopics.map((topic, index) => (
                <div key={index} className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-gray-300">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Format */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-tv text-foreground-2 mr-3"></i>
            Event Format
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left text-white font-bold">Segment</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                {eventFormat.map((format, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="px-6 py-4 text-white font-medium">{format.segment}</td>
                    <td className="px-6 py-4 text-gray-300">{format.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who Attends */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-users text-foreground-1 mr-3"></i>
            Who Attends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attendees.map((attendee, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-2 rounded-full p-3 mt-1">
                    <i className={`fas ${attendee.icon} text-black text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{attendee.title}</h3>
                    <p className="text-gray-300 text-sm">{attendee.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Previous Projects Highlights */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-star text-foreground-2 mr-3"></i>
            Previous Projects Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousProjects.map((project, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${project.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What Students Deliver */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-box text-foreground-1 mr-3"></i>
              What Students Deliver
            </h2>
            <p className="text-lg text-gray-300 mb-8">Each Master student/team submits:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-foreground-2 rounded-full p-2 mt-1">
                    <i className={`fas ${deliverable.icon} text-black text-sm`}></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{deliverable.title}</h3>
                    <p className="text-gray-300 text-sm">{deliverable.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-trophy text-foreground-2 mr-3"></i>
            Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${outcome.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{outcome.title}</h3>
                <p className="text-gray-300">{outcome.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/news/bachelorpitch" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-graduation-cap text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Bachelor Pitch Day</h3>
              <p className="text-gray-300 mb-4">Explore Bachelor-level final presentations</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Bachelor Pitches
              </div>
            </Link>
            
            <Link to="/studies/entrepreneur" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-lightbulb text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Entrepreneurship Track</h3>
              <p className="text-gray-300 mb-4">Turn your project into a startup venture</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Learn More
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Present Your Innovation?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our Master's program and showcase your AI project to industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/studies/admissions" className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-graduation-cap mr-2"></i>
              Apply to Master's Program
            </Link>
            <Link to="/studies/research" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-flask mr-2"></i>
              Explore Research Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MasterPitch
