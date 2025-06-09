import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const Entrepreneur = () => {
  const curriculumModules = [
    {
      id: 1,
      topic: "Idea Validation",
      outcome: "Identify real-world problems worth solving with AI"
    },
    {
      id: 2,
      topic: "Business Models",
      outcome: "Learn how AI products can generate value & revenue"
    },
    {
      id: 3,
      topic: "Lean Startup & MVPs",
      outcome: "Rapid prototyping and user feedback loops"
    },
    {
      id: 4,
      topic: "AI Product Development",
      outcome: "From concept to functional beta version"
    },
    {
      id: 5,
      topic: "Ethics & Compliance",
      outcome: "Build responsibly — respect data, users, and law"
    },
    {
      id: 6,
      topic: "Funding Strategies",
      outcome: "Learn how to pitch to investors and secure grants"
    },
    {
      id: 7,
      topic: "Go-to-Market",
      outcome: "Build marketing plans, distribution, and growth models"
    },
    {
      id: 8,
      topic: "Pitching & Storytelling",
      outcome: "Communicate your vision with clarity and impact"
    }
  ]

  const launchpadBenefits = [
    {
      icon: "fa-user-tie",
      title: "Weekly 1:1 mentoring with AI product founders",
      description: "Personal guidance from experienced entrepreneurs"
    },
    {
      icon: "fa-presentation",
      title: "Pitch practice and feedback",
      description: "Refine your presentation skills with expert feedback"
    },
    {
      icon: "fa-rocket",
      title: "Design sprints and prototyping weeks",
      description: "Intensive development sessions to build your MVP"
    },
    {
      icon: "fa-cloud",
      title: "Cloud credits & dev resources",
      description: "AWS, Google, Vercel, OpenAI credits for development"
    },
    {
      icon: "fa-gavel",
      title: "Legal & IP support",
      description: "Professional guidance on intellectual property and legal matters"
    },
    {
      icon: "fa-users",
      title: "Early beta testing with real users",
      description: "Access to user testing groups and feedback collection"
    },
    {
      icon: "fa-handshake",
      title: "Access to AI-focused investors & VCs",
      description: "Network connections to funding opportunities"
    }
  ]

  const studentProjects = [
    {
      name: "CortexLegal",
      description: "AI for automated legal brief analysis",
      achievement: "Raised €80k seed funding",
      icon: "fa-balance-scale"
    },
    {
      name: "VoiceVue",
      description: "Multilingual AI voice interface for e-commerce",
      achievement: "Active user base",
      icon: "fa-microphone"
    },
    {
      name: "CodeTest.AI",
      description: "GPT-based unit test generation service",
      achievement: "B2B SaaS launch",
      icon: "fa-code"
    },
    {
      name: "NeuroDash",
      description: "AI dashboards for real-time mental health tracking",
      achievement: "Healthcare partnerships",
      icon: "fa-brain"
    },
    {
      name: "PromptCraft",
      description: "Marketplace for reusable prompt modules",
      achievement: "Community platform",
      icon: "fa-store"
    }
  ]

  const mentorTypes = [
    {
      icon: "fa-rocket",
      title: "AI startup founders",
      description: "Learn from those who've built successful AI companies"
    },
    {
      icon: "fa-cogs",
      title: "Product managers at OpenAI, DeepMind, Hugging Face",
      description: "Industry insights from leading AI companies"
    },
    {
      icon: "fa-chart-line",
      title: "AI investors & technical due diligence advisors",
      description: "Understand what investors look for in AI startups"
    },
    {
      icon: "fa-shield-alt",
      title: "Legal and data compliance experts",
      description: "Navigate the regulatory landscape of AI products"
    }
  ]

  const joinSteps = [
    {
      step: 1,
      title: "Opt into the Entrepreneurship Track",
      description: "Choose the entrepreneurship path during semester 1",
      icon: "fa-check-circle"
    },
    {
      step: 2,
      title: "Attend orientation workshop",
      description: "Mandatory workshop to understand the program structure",
      icon: "fa-chalkboard-teacher"
    },
    {
      step: 3,
      title: "Submit startup idea draft",
      description: "Present your initial concept in semester 2",
      icon: "fa-lightbulb"
    },
    {
      step: 4,
      title: "Launchpad selection",
      description: "Be selected for the intensive 12-week incubator program",
      icon: "fa-trophy"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-lightbulb text-foreground-1 mr-4"></i>
            Entrepreneurship
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-4"
          >
            at the University of AI
          </GradientText>
          <p className="text-2xl text-gray-300 mb-8">
            Turn your AI ideas into real-world impact.
          </p>
        </div>

        {/* Why Entrepreneurship */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-seedling text-foreground-1 mr-3"></i>
              Why Entrepreneurship?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              At the University of AI, we don't just teach you how to build AI systems — we help you 
              turn them into AI products, services, and startups. Our Entrepreneurship Track is designed 
              to support students who want to become founders, innovators, and future tech leaders.
            </p>
            <div className="bg-accent rounded-lg p-6">
              <p className="text-white text-center font-medium text-lg">
                <i className="fas fa-rocket text-foreground-1 mr-2"></i>
                Whether you want to launch a solo AI tool, co-found a deep tech startup, or build a 
                nonprofit AI initiative — we give you the structure, tools, and network to succeed.
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-graduation-cap text-foreground-2 mr-3"></i>
            What You'll Learn
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8">
            Our entrepreneurship curriculum is integrated throughout your studies and includes:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left text-white font-bold">Module</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Topic</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Outcome</th>
                </tr>
              </thead>
              <tbody>
                {curriculumModules.map((module) => (
                  <tr key={module.id} className="border-t border-gray-700">
                    <td className="px-6 py-4">
                      <div className="bg-foreground-1 rounded-full w-8 h-8 flex items-center justify-center">
                        <span className="text-black font-bold text-sm">{module.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white font-medium">{module.topic}</td>
                    <td className="px-6 py-4 text-gray-300">{module.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Startup Studio & Launchpad */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-rocket text-foreground-1 mr-3"></i>
              Startup Studio & Launchpad
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              University of AI Launchpad is our in-house incubator program for student ventures.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {launchpadBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-foreground-2 rounded-full p-2 mt-1">
                    <i className={`fas ${benefit.icon} text-black text-sm`}></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="text-center">
                <i className="fas fa-clock text-3xl text-foreground-1 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Duration</h3>
                <p className="text-gray-300">12 weeks</p>
              </div>
              <div className="text-center">
                <i className="fas fa-target text-3xl text-foreground-2 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Goal</h3>
                <p className="text-gray-300">Ship your first AI product or secure your first funding</p>
              </div>
            </div>
          </div>
        </section>

        {/* Student Projects */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-trophy text-foreground-1 mr-3"></i>
            Startup Projects from Our Students
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentProjects.map((project, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${project.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="bg-green-900 bg-opacity-30 border border-green-600 rounded-lg p-3">
                  <p className="text-green-200 font-medium">{project.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Collaboration */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title text-center mb-8">
              <i className="fas fa-handshake text-foreground-2 mr-3"></i>
              Collaboration with Industry
            </h2>
            <p className="text-lg text-gray-300 text-center mb-8">Students work with:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <i className="fas fa-flask text-3xl text-foreground-1 mb-4"></i>
                <h3 className="text-lg font-bold text-white mb-2">Innovation Labs</h3>
                <p className="text-gray-300">From partner companies</p>
              </div>
              <div className="text-center">
                <i className="fas fa-heart text-3xl text-foreground-2 mb-4"></i>
                <h3 className="text-lg font-bold text-white mb-2">Nonprofit AI Challenges</h3>
                <p className="text-gray-300">Challenge sponsors</p>
              </div>
              <div className="text-center">
                <i className="fas fa-building text-3xl text-foreground-1 mb-4"></i>
                <h3 className="text-lg font-bold text-white mb-2">Local Accelerators</h3>
                <p className="text-gray-300">And government funding bodies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mentors & Experts */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-users text-foreground-1 mr-3"></i>
            Mentors & Experts
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8">Our mentor pool includes:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentorTypes.map((mentor, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-2 rounded-full p-3 mt-1">
                    <i className={`fas ${mentor.icon} text-black text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{mentor.title}</h3>
                    <p className="text-gray-300">{mentor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-accent rounded-lg p-6">
            <p className="text-white text-center font-medium">
              <i className="fas fa-user-tie text-foreground-1 mr-2"></i>
              You'll be matched with a dedicated startup coach during your final project if you're on the entrepreneurship path.
            </p>
          </div>
        </section>

        {/* Final Project */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title text-center mb-8">
              <i className="fas fa-graduation-cap text-foreground-2 mr-3"></i>
              Final Project: Build Your AI Startup
            </h2>
            <p className="text-lg text-gray-300 text-center mb-8">
              Instead of a traditional thesis, entrepreneurship-track students can opt to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <i className="fas fa-cogs text-3xl text-foreground-1 mb-4"></i>
                <h3 className="font-bold text-white mb-2">Build a functional AI product</h3>
              </div>
              <div className="text-center">
                <i className="fas fa-users text-3xl text-foreground-2 mb-4"></i>
                <h3 className="font-bold text-white mb-2">Validate with real users</h3>
              </div>
              <div className="text-center">
                <i className="fas fa-file-alt text-3xl text-foreground-1 mb-4"></i>
                <h3 className="font-bold text-white mb-2">Submit business model & product plan</h3>
              </div>
              <div className="text-center">
                <i className="fas fa-presentation text-3xl text-foreground-2 mb-4"></i>
                <h3 className="font-bold text-white mb-2">Present at AI Demo Day</h3>
              </div>
            </div>
            <div className="mt-8 bg-blue-900 bg-opacity-30 border border-blue-600 rounded-lg p-4">
              <p className="text-blue-200 text-center">
                <i className="fas fa-microphone text-blue-400 mr-2"></i>
                Present at the University of AI Demo Day to investors, partners, and press
              </p>
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-clipboard-list text-foreground-1 mr-3"></i>
            How to Join
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {joinSteps.map((step) => (
              <div key={step.step} className="card text-center">
                <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 mb-4">{step.description}</p>
                <i className={`fas ${step.icon} text-foreground-2 text-xl`}></i>
              </div>
            ))}
          </div>
        </section>

        {/* Events & Community */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title text-center mb-8">
              <i className="fas fa-calendar-alt text-foreground-2 mr-3"></i>
              Events & Community
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <i className="fas fa-microphone text-3xl text-foreground-1 mb-4"></i>
                <h3 className="font-bold text-white mb-2">Monthly "AI Founder Talks"</h3>
                <p className="text-gray-300 text-sm">From active entrepreneurs</p>
              </div>
              <div className="text-center">
                <i className="fas fa-trophy text-3xl text-foreground-2 mb-4"></i>
                <h3 className="font-bold text-white mb-2">Annual AI Demo Day</h3>
                <p className="text-gray-300 text-sm">Showcase your startup</p>
              </div>
              <div className="text-center">
                <i className="fas fa-code text-3xl text-foreground-1 mb-4"></i>
                <h3 className="font-bold text-white mb-2">AI Hackathons</h3>
                <p className="text-gray-300 text-sm">With business model validation</p>
              </div>
              <div className="text-center">
                <i className="fab fa-discord text-3xl text-foreground-2 mb-4"></i>
                <h3 className="font-bold text-white mb-2">#startups Discord</h3>
                <p className="text-gray-300 text-sm">Peer support channel</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Do you have an idea or just the drive to build something meaningful with AI?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-rocket mr-2"></i>
              Apply to Entrepreneurship Track
            </button>
            <Link to="/studies/admissions" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-user-plus mr-2"></i>
              General Admissions
            </Link>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
            <h3 className="text-xl font-bold text-white mb-4">
              <i className="fas fa-envelope text-foreground-1 mr-2"></i>
              Get Started
            </h3>
            <p className="text-gray-300 mb-4">
              Apply to the entrepreneurship track via your student dashboard or reach us at:
            </p>
            <p className="text-foreground-1 font-medium mb-2">
              📧 startup@university-of-ai.org
            </p>
            <p className="text-gray-300">
              🎙️ Or ask our <span className="text-foreground-2">[AI Startup Assistant]</span> for help anytime.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Entrepreneur
