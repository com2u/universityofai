import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const PreCourses = () => {
  const modules = [
    {
      id: 1,
      title: "Python Basics",
      description: "Variables, loops, functions, file operations — the core of AI programming.",
      icon: "fa-python"
    },
    {
      id: 2,
      title: "Math & Logic for AI",
      description: "Linear algebra, probability, and Boolean logic – made simple and visual.",
      icon: "fa-calculator"
    },
    {
      id: 3,
      title: "How AI Works",
      description: "Overview of algorithms, models, neural networks, and learning types.",
      icon: "fa-brain"
    },
    {
      id: 4,
      title: "Using AI Tools",
      description: "First steps with ChatGPT, GitHub Copilot, and no-code AI tools.",
      icon: "fa-tools"
    },
    {
      id: 5,
      title: "Prompt Writing 101",
      description: "Learn how to effectively talk to AI using prompts.",
      icon: "fa-comment-dots"
    },
    {
      id: 6,
      title: "Data 101",
      description: "What is good data? CSVs, JSON, APIs, and basic cleaning & structuring.",
      icon: "fa-database"
    },
    {
      id: 7,
      title: "AI Ethics & Safety",
      description: "Core principles around bias, explainability, privacy, and misuse prevention.",
      icon: "fa-shield-alt"
    }
  ]

  const tools = [
    { name: "Jupyter Notebooks", description: "in-browser", icon: "fa-book" },
    { name: "Google Colab", description: "cloud computing", icon: "fa-cloud" },
    { name: "ChatGPT / GPT Playground", description: "AI interaction", icon: "fa-robot" },
    { name: "Replit / Glitch", description: "online coding", icon: "fa-code" },
    { name: "Streamlit Sandbox", description: "app building", icon: "fa-desktop" },
    { name: "Google Drive", description: "data upload", icon: "fa-folder" }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-graduation-cap text-foreground-1 mr-4"></i>
            Pre-Courses
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-4"
          >
            Getting Everyone AI-Ready
          </GradientText>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            At the University of AI, we welcome students from diverse backgrounds — not everyone joins us 
            as a programmer, data scientist, or AI engineer. To ensure everyone starts on the same level, 
            we offer mandatory pre-courses ("Vorkurse") before the first semester begins.
          </p>
        </div>

        {/* Why Pre-Courses */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-question-circle text-foreground-1 mr-3"></i>
              Why Pre-Courses?
            </h2>
            <p className="text-lg text-gray-300 mb-8">These courses build essential foundations in:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                <i className="fas fa-code text-foreground-1 text-2xl mb-3"></i>
                <h3 className="font-bold text-white mb-2">Programming & Technical Thinking</h3>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                <i className="fas fa-calculator text-foreground-2 text-2xl mb-3"></i>
                <h3 className="font-bold text-white mb-2">Mathematics & Logic for AI</h3>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                <i className="fas fa-database text-foreground-1 text-2xl mb-3"></i>
                <h3 className="font-bold text-white mb-2">Basic Data Handling</h3>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                <i className="fas fa-robot text-foreground-2 text-2xl mb-3"></i>
                <h3 className="font-bold text-white mb-2">Introduction to AI Tools & Ethics</h3>
              </div>
            </div>
            <div className="mt-8 bg-accent rounded-lg p-6">
              <p className="text-white text-center font-medium text-lg">
                <i className="fas fa-brain text-foreground-1 mr-2"></i>
                Our goal: Equal opportunity for success — no matter your prior experience.
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-book-open text-foreground-2 mr-3"></i>
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <div key={module.id} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-foreground-1 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-black font-bold">{module.id}</span>
                  </div>
                  <i className={`fas ${module.icon} text-foreground-2 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                <p className="text-gray-300">{module.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Duration & Format */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-clock text-foreground-1 mr-3"></i>
              Duration & Format
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <i className="fas fa-calendar-alt text-4xl text-foreground-1 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Total Time</h3>
                <p className="text-gray-300">~4 weeks</p>
              </div>
              <div className="text-center">
                <i className="fas fa-hourglass-half text-4xl text-foreground-2 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Weekly Effort</h3>
                <p className="text-gray-300">6–8 hours/week</p>
              </div>
              <div className="text-center">
                <i className="fas fa-laptop text-4xl text-foreground-1 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Format</h3>
                <p className="text-gray-300">100% online, self-paced + optional live sessions</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 text-center">
                <h4 className="font-bold text-white mb-2">Start</h4>
                <p className="text-gray-300">Immediately after acceptance</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 text-center">
                <h4 className="font-bold text-white mb-2">Language</h4>
                <p className="text-gray-300">English</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 text-center">
                <h4 className="font-bold text-white mb-2">Certificate</h4>
                <p className="text-gray-300">Issued on successful completion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Attend */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-users text-foreground-2 mr-3"></i>
              Who Should Attend?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <i className="fas fa-check-circle text-green-400 text-xl"></i>
                <p className="text-gray-300">You've never coded before</p>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-check-circle text-green-400 text-xl"></i>
                <p className="text-gray-300">You're unsure how AI really works</p>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-check-circle text-green-400 text-xl"></i>
                <p className="text-gray-300">You're switching from a non-technical background</p>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-check-circle text-green-400 text-xl"></i>
                <p className="text-gray-300">You just want to refresh your skills before diving in</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools You'll Use */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-toolbox text-foreground-1 mr-3"></i>
              Tools You'll Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <i className={`fas ${tool.icon} text-foreground-1`}></i>
                    <h3 className="font-bold text-white">{tool.name}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">({tool.description})</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-900 bg-opacity-30 border border-blue-600 rounded-lg p-4">
              <p className="text-blue-200 text-center">
                <i className="fas fa-info-circle text-blue-400 mr-2"></i>
                No installation required — just your browser.
              </p>
            </div>
          </div>
        </section>

        {/* Taught By */}
        <section className="mb-20">
          <div className="card text-center">
            <h2 className="section-title mb-6">
              <i className="fas fa-chalkboard-teacher text-foreground-2 mr-3"></i>
              Taught By
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our trainers are young, international AI experts who have helped thousands of students 
              start their AI journeys — with patience, passion, and practical focus.
            </p>
          </div>
        </section>

        {/* Student Voices */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-comments text-foreground-1 mr-3"></i>
            Student Voices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-foreground-1 rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fas fa-user text-black"></i>
                </div>
                <div>
                  <h3 className="font-bold text-white">Anna</h3>
                  <p className="text-gray-400">Germany</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "I came from design. This course made AI approachable for me. I was building small automations in the second week."
              </p>
            </div>
            <div className="card">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-foreground-2 rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fas fa-user text-black"></i>
                </div>
                <div>
                  <h3 className="font-bold text-white">Jamal</h3>
                  <p className="text-gray-400">Kenya</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "I loved the math section. Finally, someone made matrices and vectors easy to understand."
              </p>
            </div>
          </div>
        </section>

        {/* What Happens After */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-arrow-right text-foreground-2 mr-3"></i>
              What Happens After Pre-Courses?
            </h2>
            <p className="text-lg text-gray-300 mb-6">Once completed, you unlock access to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <i className="fas fa-unlock text-foreground-1 mt-1"></i>
                <div>
                  <h3 className="font-bold text-white mb-2">Full-semester enrollment</h3>
                  <p className="text-gray-300">Access to all degree programs and courses</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fas fa-route text-foreground-2 mt-1"></i>
                <div>
                  <h3 className="font-bold text-white mb-2">Customized AI curriculum plan</h3>
                  <p className="text-gray-300">Personalized learning path based on your goals</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fas fa-users text-foreground-1 mt-1"></i>
                <div>
                  <h3 className="font-bold text-white mb-2">Group project placement & lab access</h3>
                  <p className="text-gray-300">Join collaborative projects and research labs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fas fa-user-tie text-foreground-2 mt-1"></i>
                <div>
                  <h3 className="font-bold text-white mb-2">Feedback session with your mentor</h3>
                  <p className="text-gray-300">One-on-one guidance for your AI journey</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Dates */}
        <section className="mb-20">
          <div className="card text-center">
            <h2 className="section-title mb-8">
              <i className="fas fa-calendar-check text-foreground-1 mr-3"></i>
              Upcoming Pre-Course Dates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <i className="fas fa-play text-3xl text-foreground-1 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Start Anytime</h3>
                <p className="text-gray-300">(self-paced)</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <i className="fas fa-users text-3xl text-foreground-2 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Live Group Sessions</h3>
                <p className="text-gray-300">Every Tuesday and Saturday</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get AI-Ready?</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you've been accepted to the University of AI, your student dashboard includes automatic access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-sign-in-alt mr-2"></i>
              Access Student Dashboard
            </button>
            <Link to="/studies/admissions" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-user-plus mr-2"></i>
              New Applicant? Apply Here
            </Link>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
            <h3 className="text-xl font-bold text-white mb-4">
              <i className="fas fa-question-circle text-foreground-1 mr-2"></i>
              Questions?
            </h3>
            <p className="text-gray-300 mb-4">
              Reach our Pre-Course team at <span className="text-foreground-1">prep@university-of-ai.org</span>
            </p>
            <p className="text-gray-300">
              Or ask our <span className="text-foreground-2">[AI Onboarding Assistant]</span> live anytime.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PreCourses
