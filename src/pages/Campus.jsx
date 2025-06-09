import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const Campus = () => {
  const whatYouCanExpect = [
    {
      icon: "fa-search",
      title: "🔍 Explore",
      items: [
        "Virtual walkthrough of the University of AI",
        "Interactive campus map (Labs, Classrooms, Research Hubs, Pitch Arenas)",
        "Department overviews: AI Software Engineering, Data Science, Ethics & Policy, Generative Media, Innovation Lab"
      ]
    },
    {
      icon: "fa-users",
      title: "🧑‍🏫 Meet",
      items: [
        "Real video messages from our international instructors",
        "Student testimonials and daily life clips",
        "Recorded Q&A panels with mentors and alumni"
      ]
    },
    {
      icon: "fa-book",
      title: "📚 Learn",
      items: [
        "Deep dives into each program and specialization",
        "Access to a sample course library and open lectures",
        "Insights into research projects, entrepreneurship programs, and AI toolkits"
      ]
    },
    {
      icon: "fa-handshake",
      title: "💼 Connect",
      items: [
        "Live chat with admissions and program coordinators",
        "Optional one-on-one session bookings with mentors",
        "Download center: brochures, guides, and study plan templates"
      ]
    }
  ]

  const keyAreas = [
    {
      zone: "Programs & Study Tracks",
      description: "Overview of Bachelor's and Master's paths, course modules, training labs",
      icon: "fa-graduation-cap"
    },
    {
      zone: "Research Hub",
      description: "Highlighted AI projects, tool development, datasets & agent engineering",
      icon: "fa-flask"
    },
    {
      zone: "Admissions & Financing",
      description: "All info on applications, scholarships, tuition, and eligibility",
      icon: "fa-file-alt"
    },
    {
      zone: "Innovation & Startups",
      description: "Discover our startup incubator, student ventures, and hackathons",
      icon: "fa-lightbulb"
    },
    {
      zone: "Student Life",
      description: "Meet our global community, explore virtual events, study spaces, and clubs",
      icon: "fa-users"
    },
    {
      zone: "Vorkurse (Prep Courses)",
      description: "Get an intro to AI, Python, Git, Prompt Engineering – start strong",
      icon: "fa-play-circle"
    },
    {
      zone: "Bachelor / Master Pitch Areas",
      description: "Explore interactive thesis demos and student research presentations",
      icon: "fa-presentation"
    }
  ]

  const technologies = [
    {
      icon: "fa-robot",
      title: "AI Learning Assistants in each booth",
      description: "Personalized guidance throughout your visit"
    },
    {
      icon: "fa-video",
      title: "Generative Video Guides",
      description: "Dynamic, interactive video content"
    },
    {
      icon: "fa-comments",
      title: "Searchable Campus AI Chatbot",
      description: "Powered by LangChain for instant answers"
    },
    {
      icon: "fa-universal-access",
      title: "Real-time translation and accessibility features",
      description: "Inclusive experience for all visitors"
    }
  ]

  const targetVisitors = [
    {
      icon: "fa-user-graduate",
      title: "Future Students",
      description: "Curious about AI and digital innovation"
    },
    {
      icon: "fa-users",
      title: "Parents & Guardians",
      description: "Looking to understand our educational model"
    },
    {
      icon: "fa-building",
      title: "Industry Partners",
      description: "Scouting talent and research collaborations"
    },
    {
      icon: "fa-chalkboard-teacher",
      title: "Educators",
      description: "Interested in AI-integrated learning environments"
    },
    {
      icon: "fa-newspaper",
      title: "Media & Press",
      description: "Covering AI education trends and emerging universities"
    }
  ]

  const navigationSteps = [
    {
      icon: "fa-map",
      title: "Use the Virtual Campus Map",
      description: "Explore key zones and departments"
    },
    {
      icon: "fa-route",
      title: "Follow guided tour paths",
      description: "Based on your interest: Academic, Career, Research, or Student Life"
    },
    {
      icon: "fa-bookmark",
      title: "Bookmark booths and chat with reps",
      description: "Download materials to review later"
    },
    {
      icon: "fa-mobile-alt",
      title: "Access via any device",
      description: "Laptop, tablet, or smartphone – no app needed"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-globe text-foreground-1 mr-4"></i>
            Virtual Campus Fair
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-8"
          >
            Virtual Campus Fair
          </GradientText>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">
            At the University of AI, everything starts online – and our Virtual Campus Fair is your 
            opportunity to explore who we are, what we teach, and how we empower the next generation 
            of AI creators.
          </p>
          <div className="bg-accent rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-white font-medium text-lg">
              Unlike traditional campus tours or open houses, our fair is always available, fully 
              interactive, and updated in real time. Whether you're a prospective student, a curious 
              parent, a tech enthusiast, or a future collaborator – this is your hub to discover our 
              university from anywhere in the world.
            </p>
          </div>
        </div>

        {/* What You Can Expect */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-bullseye text-foreground-1 mr-3"></i>
            What You Can Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouCanExpect.map((section, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-foreground-2 rounded-full p-3">
                    <i className={`fas ${section.icon} text-black text-xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-green-500 mt-1"></i>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Areas to Visit */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-map-marked-alt text-foreground-2 mr-3"></i>
            Key Areas to Visit
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left text-white font-bold">Zone</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                {keyAreas.map((area, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <i className={`fas ${area.icon} text-foreground-1`}></i>
                        <span className="text-white font-medium">{area.zone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{area.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Technologies Showcased */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-cogs text-foreground-1 mr-3"></i>
            Technologies Showcased
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-2 rounded-full p-3 mt-1">
                    <i className={`fas ${tech.icon} text-black text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                    <p className="text-gray-300">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who Should Visit */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-users text-foreground-2 mr-3"></i>
            Who Should Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetVisitors.map((visitor, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${visitor.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{visitor.title}</h3>
                <p className="text-gray-300">{visitor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Navigate */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-compass text-foreground-1 mr-3"></i>
            How to Navigate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {navigationSteps.map((step, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${step.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Access Links */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-rocket text-foreground-2 mr-3"></i>
            Quick Access to Campus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/studies/program" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-graduation-cap text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">Programs & Study Tracks</h3>
              <p className="text-gray-300 mb-4">Explore our Bachelor's and Master's programs</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Visit Zone
              </div>
            </Link>

            <Link to="/studies/research" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-flask text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">Research Hub</h3>
              <p className="text-gray-300 mb-4">Discover AI projects and innovations</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Visit Zone
              </div>
            </Link>

            <Link to="/studies/admissions" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-file-alt text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">Admissions & Financing</h3>
              <p className="text-gray-300 mb-4">Learn about applications and scholarships</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Visit Zone
              </div>
            </Link>

            <Link to="/studies/entrepreneur" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-lightbulb text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">Innovation & Startups</h3>
              <p className="text-gray-300 mb-4">Explore our startup incubator</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Visit Zone
              </div>
            </Link>

            <Link to="/news/students" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-users text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">Student Life</h3>
              <p className="text-gray-300 mb-4">Meet our global community</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Visit Zone
              </div>
            </Link>

            <Link to="/studies/precourses" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-play-circle text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">Vorkurse (Prep Courses)</h3>
              <p className="text-gray-300 mb-4">Start strong with foundational courses</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Visit Zone
              </div>
            </Link>
          </div>
        </section>

        {/* Pitch Areas */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/news/bachelorpitch" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-globe text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Bachelor Pitch Fair</h3>
              <p className="text-gray-300 mb-4">Interactive showcase of Bachelor thesis projects</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Explore Projects
              </div>
            </Link>
            
            <Link to="/news/masterpitch" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-rocket text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Master Pitch Day</h3>
              <p className="text-gray-300 mb-4">Live presentations to industry leaders</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Presentations
              </div>
            </Link>
          </div>
        </section>

        {/* Ready to Explore */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">
            <i className="fas fa-rocket text-foreground-1 mr-3"></i>
            Ready to Explore the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Step into our virtual campus and discover what makes the University of AI unique.
          </p>
          
          <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">Visit Our Virtual Campus</h3>
            <p className="text-lg text-gray-300 mb-4">
              <i className="fas fa-globe text-foreground-1 mr-2"></i>
              <span className="text-foreground-2 font-medium">campusfair.university-of-ai.org</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3">
                <i className="fas fa-comments text-foreground-1"></i>
                <span className="text-gray-300">💬 Live support available 24/7 via CampusBot</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-lock-open text-foreground-2"></i>
                <span className="text-gray-300">🔒 No registration required to browse</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-play mr-2"></i>
              Start Virtual Tour
            </button>
            <Link to="/studies/admissions" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-user-plus mr-2"></i>
              Apply Now
            </Link>
          </div>

          <div className="bg-accent rounded-lg p-6">
            <p className="text-white font-bold text-xl mb-2">
              University of AI – Learn it. Build with it. Shape the future.
            </p>
            <p className="text-gray-200">
              Create a profile to join live sessions or request more information.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Campus
