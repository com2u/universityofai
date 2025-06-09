import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const BachelorPitch = () => {
  const uniqueFeatures = [
    {
      icon: "fa-globe",
      title: "Open to the public",
      description: "Anyone can explore, filter, and view projects"
    },
    {
      icon: "fa-mouse-pointer",
      title: "Interactive format",
      description: "Each project has its own 'booth' with media, demos, and contact options"
    },
    {
      icon: "fa-equals",
      title: "No stage, no hierarchy",
      description: "All projects are equally visible and explorable"
    },
    {
      icon: "fa-comments",
      title: "Real-time",
      description: "Comment, like, share, or ask questions directly to the students"
    },
    {
      icon: "fa-archive",
      title: "Long-term access",
      description: "Remains online permanently as part of the university archive"
    }
  ]

  const boothContents = [
    {
      icon: "fa-tag",
      title: "Project Title & Abstract",
      description: "Clear overview of the project"
    },
    {
      icon: "fa-brain",
      title: "AI Techniques Used",
      description: "Technical approaches and methodologies"
    },
    {
      icon: "fa-video",
      title: "Demo Video",
      description: "Visual demonstration of the project"
    },
    {
      icon: "fa-laptop",
      title: "Live Demo Link / GitHub Repository",
      description: "Interactive access to the project"
    },
    {
      icon: "fa-image",
      title: "Poster or Infographic",
      description: "Visual summary of the work"
    },
    {
      icon: "fa-file-pdf",
      title: "Bachelor Thesis (PDF)",
      description: "Complete academic documentation"
    },
    {
      icon: "fa-tools",
      title: "Tools & Frameworks",
      description: "Technical stack and resources used"
    },
    {
      icon: "fa-envelope",
      title: "Contact Form or Mentor Info",
      description: "Direct communication channels"
    },
    {
      icon: "fa-comments",
      title: "Discussion Board for Questions",
      description: "Interactive Q&A with visitors"
    }
  ]

  const filterCategories = [
    {
      category: "Topic",
      options: "AI Agents, Education, HealthTech, Sustainability, Automation, etc."
    },
    {
      category: "Technology",
      options: "LangChain, TensorFlow, CrewAI, Whisper, HuggingFace, etc."
    },
    {
      category: "Tool Type",
      options: "LLM, Vision, Voice, Robotics, Knowledge Graph, etc."
    },
    {
      category: "Use Case",
      options: "B2B, Consumer, NGO, Accessibility, Analytics"
    },
    {
      category: "Language",
      options: "English, German, French, etc."
    },
    {
      category: "Project Type",
      options: "App, API, Dataset, Research Study, Interactive Agent"
    }
  ]

  const sampleProjects = [
    {
      title: "LegalGPT",
      summary: "LLM-based contract analyzer for startups",
      icon: "fa-gavel"
    },
    {
      title: "SyntheticaDocs",
      summary: "AI-generated product documentation tool",
      icon: "fa-file-alt"
    },
    {
      title: "Voicify",
      summary: "Multilingual speech-to-text assistant using Whisper + HuggingFace",
      icon: "fa-microphone"
    },
    {
      title: "GreenFlow",
      summary: "AI-powered smart irrigation advisor for small farmers",
      icon: "fa-seedling"
    },
    {
      title: "CodeCritic",
      summary: "Agent-based code review system trained on thousands of OSS projects",
      icon: "fa-code"
    },
    {
      title: "TeachMate",
      summary: "Personalized learning assistant using LangChain and student behavior",
      icon: "fa-graduation-cap"
    }
  ]

  const targetVisitors = [
    {
      icon: "fa-user-tie",
      title: "Recruiters scouting emerging AI talent",
      description: "Discover the next generation of AI professionals"
    },
    {
      icon: "fa-rocket",
      title: "Startup founders seeking co-founders or hires",
      description: "Find talented individuals for your team"
    },
    {
      icon: "fa-heart",
      title: "NGOs looking for AI collaboration ideas",
      description: "Explore AI solutions for social impact"
    },
    {
      icon: "fa-chalkboard-teacher",
      title: "Teachers & academics browsing applied learning",
      description: "See practical applications of AI education"
    },
    {
      icon: "fa-chart-line",
      title: "Investors searching for high-potential student innovations",
      description: "Identify promising early-stage projects"
    },
    {
      icon: "fa-user-graduate",
      title: "Future students getting inspired",
      description: "See what you could achieve in our programs"
    },
    {
      icon: "fa-users",
      title: "Family & friends cheering students on",
      description: "Support and celebrate student achievements"
    }
  ]

  const navigationSteps = [
    {
      icon: "fa-filter",
      title: "Use the interactive filter panel",
      description: "Browse the project catalog by category"
    },
    {
      icon: "fa-mouse-pointer",
      title: "Click any project card",
      description: "Open the booth with full details"
    },
    {
      icon: "fa-comments",
      title: "Chat with the student or mentor",
      description: "Via integrated message board"
    },
    {
      icon: "fa-download",
      title: "Download thesis, watch demos",
      description: "And bookmark your favorites"
    },
    {
      icon: "fa-vote-yea",
      title: "Vote for the Audience Favorite Award",
      description: "Support your preferred projects"
    }
  ]

  const awards = [
    {
      icon: "fa-cogs",
      title: "Best Technical Concept",
      color: "foreground-1"
    },
    {
      icon: "fa-lightbulb",
      title: "Most Innovative Project",
      color: "foreground-2"
    },
    {
      icon: "fa-heart",
      title: "Audience Favorite",
      color: "foreground-1"
    },
    {
      icon: "fa-paint-brush",
      title: "Best UI/UX Design",
      color: "foreground-2"
    },
    {
      icon: "fa-hands-helping",
      title: "Best Use of AI for Social Good",
      color: "foreground-1"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-globe text-foreground-1 mr-4"></i>
            Bachelor Pitch Fair
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-8"
          >
            Final Presentations Bachelor
          </GradientText>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">
            The Bachelor Pitch Fair is a digital showcase of all final-year Bachelor projects at the 
            University of AI. Organized like an interactive online trade fair, it allows visitors, 
            partners, and students to explore, filter, and deep-dive into real-world AI applications 
            developed during the bachelor thesis phase.
          </p>
          <div className="bg-accent rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-white font-medium text-lg">
              It's not just a presentation — it's an interactive portfolio of future AI talent.
            </p>
          </div>
        </div>

        {/* What Makes It Unique */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-star text-foreground-1 mr-3"></i>
            What Makes It Unique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${feature.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-cogs text-foreground-2 mr-3"></i>
              How It Works
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Each Bachelor graduate receives a project booth containing:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boothContents.map((content, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-foreground-1 rounded-full p-2 mt-1">
                    <i className={`fas ${content.icon} text-black text-sm`}></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{content.title}</h3>
                    <p className="text-gray-300 text-sm">{content.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories & Filters */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-filter text-foreground-1 mr-3"></i>
            Categories & Filters
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8">
            Visitors can explore projects by:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left text-white font-bold">Category</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Options</th>
                </tr>
              </thead>
              <tbody>
                {filterCategories.map((filter, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="px-6 py-4 text-white font-medium">{filter.category}</td>
                    <td className="px-6 py-4 text-gray-300">{filter.options}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sample Projects */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-lightbulb text-foreground-2 mr-3"></i>
            Sample Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProjects.map((project, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="bg-foreground-1 rounded-full p-3">
                    <i className={`fas ${project.icon} text-black text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300">{project.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who Should Visit */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-users text-foreground-1 mr-3"></i>
            Who Should Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetVisitors.map((visitor, index) => (
              <div key={index} className="card">
                <div className="text-center mb-4">
                  <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${visitor.icon} text-black text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{visitor.title}</h3>
                  <p className="text-gray-300 text-sm">{visitor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bachelor Pitch Fair 2025 */}
        <section className="mb-20">
          <div className="card text-center">
            <h2 className="section-title mb-8">
              <i className="fas fa-calendar-alt text-foreground-2 mr-3"></i>
              Bachelor Pitch Fair 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <i className="fas fa-rocket text-3xl text-foreground-1 mb-4"></i>
                <h3 className="text-lg font-bold text-white mb-2">Launch Date</h3>
                <p className="text-gray-300">September 10, 2025</p>
              </div>
              <div>
                <i className="fas fa-map-marker-alt text-3xl text-foreground-2 mb-4"></i>
                <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                <p className="text-gray-300">university-of-ai.org/pitch-fair</p>
              </div>
              <div>
                <i className="fas fa-video text-3xl text-foreground-1 mb-4"></i>
                <h3 className="text-lg font-bold text-white mb-2">Live Q&A Sessions</h3>
                <p className="text-gray-300">Sept 10–13, daily 16:00–18:00 UTC</p>
              </div>
              <div>
                <i className="fas fa-archive text-3xl text-foreground-2 mb-4"></i>
                <h3 className="text-lg font-bold text-white mb-2">Permanent Archive Access</h3>
                <p className="text-gray-300">After September 15</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Navigate */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-compass text-foreground-1 mr-3"></i>
            For Visitors: How to Navigate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {navigationSteps.map((step, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${step.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title text-center mb-8">
              <i className="fas fa-trophy text-foreground-2 mr-3"></i>
              Awards & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {awards.map((award, index) => (
                <div key={index} className="text-center">
                  <div className={`bg-${award.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    <i className={`fas ${award.icon} text-black text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">🏅 {award.title}</h3>
                </div>
              ))}
            </div>
            <div className="bg-accent rounded-lg p-6">
              <p className="text-white text-center font-medium">
                Winners are featured on the university's homepage, invited to speak at conferences, 
                and offered startup accelerator slots.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/news/masterpitch" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-rocket text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Master Pitch Day</h3>
              <p className="text-gray-300 mb-4">Explore Master-level final presentations</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Master Pitches
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

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore Innovation?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover the future of AI through student projects and connect with emerging talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-search mr-2"></i>
              🔍 Browse Projects
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-trophy mr-2"></i>
              🏆 See Award Winners
            </button>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg border border-gray-600 transition-colors">
              <i className="fas fa-graduation-cap mr-2"></i>
              🎓 Submit Your Booth
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg border border-gray-600 transition-colors">
              <i className="fas fa-bullhorn mr-2"></i>
              📢 Invite Visitors
            </button>
            <Link to="/studies/admissions" className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg border border-gray-600 transition-colors text-center">
              <i className="fas fa-user-plus mr-2"></i>
              Apply Now
            </Link>
            <Link to="/news/campus" className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg border border-gray-600 transition-colors text-center">
              <i className="fas fa-university mr-2"></i>
              Virtual Campus
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BachelorPitch
