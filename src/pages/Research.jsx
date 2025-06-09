import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const Research = () => {
  const projectCategories = [
    {
      category: "🤖 AI Agents & Automation",
      description: "Building autonomous tools for productivity, customer service, and systems control (CrewAI, LangGraph, AutoGen)"
    },
    {
      category: "🧠 Machine Learning & LLMs",
      description: "Projects involving fine-tuning, multi-modal modeling, embeddings, vector search, zero-shot learning"
    },
    {
      category: "📊 Data Science & Analytics",
      description: "Real-time dashboards, anomaly detection, recommendation systems, structured & unstructured data handling"
    },
    {
      category: "🛠 AI for Software Development",
      description: "GPT-based test generation, code review tools, auto-documentation, frontend/unit/E2E test automation"
    },
    {
      category: "🌐 AI & Society",
      description: "Research on ethics, data protection, bias in AI systems, legal impact studies, and civic AI applications"
    },
    {
      category: "🎨 Creative AI",
      description: "Audio, image, and video generation with DALL·E, Midjourney, Runway, Sora, ElevenLabs, etc."
    },
    {
      category: "🏥 AI for Health & Wellbeing",
      description: "Healthcare diagnostics, mental health tracking, medical document AI, and assistive AI for accessibility"
    },
    {
      category: "📦 AI Product Prototypes",
      description: "Student-developed MVPs and startup demos – ready to launch or present at Demo Day"
    }
  ]

  const whatMakesDifferent = [
    {
      icon: "fa-bullseye",
      title: "Focused on real-world use cases",
      description: "Every project addresses actual problems and challenges"
    },
    {
      icon: "fa-rocket",
      title: "Powered by state-of-the-art AI frameworks",
      description: "Using the latest tools and technologies in AI development"
    },
    {
      icon: "fa-users",
      title: "Developed in team-based agile environments",
      description: "Collaborative development with modern methodologies"
    },
    {
      icon: "fa-eye",
      title: "Reviewed by industry experts and openly documented",
      description: "Professional feedback and transparent documentation"
    },
    {
      icon: "fa-handshake",
      title: "Active collaboration with startups, NGOs, and enterprises",
      description: "Real partnerships with external organizations"
    }
  ]

  const spotlightProjects = [
    {
      name: "DocuAI",
      description: "AI for documentation quality improvement",
      techStack: "GPT-4, LangChain, Streamlit",
      outcome: "Integrated into open-source CI/CD pipelines",
      icon: "fa-file-alt"
    },
    {
      name: "CodeSensei",
      description: "Autonomous code reviewer & bug detector",
      techStack: "TypeScript, GPT-4, ESLint plugins",
      outcome: "Adopted by 3 early-stage dev teams",
      icon: "fa-code"
    },
    {
      name: "EcoPulse",
      description: "NLP-based NGO report summarizer for climate data",
      techStack: "Hugging Face, LangGraph, Qdrant",
      outcome: "Used in pilot projects with GreenNet EU",
      icon: "fa-leaf"
    },
    {
      name: "PromptDepot",
      description: "Marketplace for reusable AI prompt chains",
      techStack: "LangChain, Vercel, Supabase",
      outcome: "Student-led spin-off with early users",
      icon: "fa-store"
    }
  ]

  const collaborationPartners = [
    {
      icon: "fa-rocket",
      title: "Startups",
      description: "Accelerate MVPs and product development"
    },
    {
      icon: "fa-building",
      title: "Corporates",
      description: "Integrate AI into existing processes"
    },
    {
      icon: "fa-heart",
      title: "NGOs & Public Sector",
      description: "Develop ethical and inclusive AI solutions"
    },
    {
      icon: "fa-code-branch",
      title: "Open Source Communities",
      description: "Contribute back to the global AI ecosystem"
    }
  ]

  const researchTopics = [
    "LLM-based Data Integrity Scoring",
    "Ethics-by-Design in AI Prototyping",
    "Bias Detection via Multilingual Embeddings",
    "AI-Assisted Curriculum Planning"
  ]

  const contributionWays = [
    {
      icon: "fa-lightbulb",
      title: "Submit your research idea",
      description: "Propose new research directions and topics"
    },
    {
      icon: "fa-users",
      title: "Join a cross-semester project team",
      description: "Collaborate with students across different levels"
    },
    {
      icon: "fa-graduation-cap",
      title: "Propose a topic for capstone work",
      description: "Define your final project research area"
    },
    {
      icon: "fa-user-tie",
      title: "Co-author with faculty mentors",
      description: "Work directly with professors on publications"
    },
    {
      icon: "fa-presentation",
      title: "Present at the annual AI Research Symposium",
      description: "Share your findings with the academic community"
    }
  ]

  const upcomingEvents = [
    {
      icon: "fa-flask",
      title: "Student Research Week",
      description: "Share, discuss, and publish semester work"
    },
    {
      icon: "fa-microphone",
      title: "Demo Day",
      description: "Live presentations of top startup prototypes"
    },
    {
      icon: "fa-comments",
      title: "Ethics & AI Roundtable",
      description: "Open debate sessions on responsibility & risk"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-flask text-foreground-1 mr-4"></i>
            Projects & Research
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-4"
          >
            Applied Intelligence. Real-World Impact.
          </GradientText>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            At the University of AI, we don't stop at theory — we build, test, and ship real solutions. 
            Our students, researchers, and industry partners collaborate on AI-powered projects that 
            explore new frontiers in data, automation, creativity, and ethical innovation.
          </p>
        </div>

        {/* Research Philosophy */}
        <section className="mb-20">
          <div className="card text-center">
            <h2 className="section-title mb-6">
              <i className="fas fa-lightbulb text-foreground-1 mr-3"></i>
              Our Research Philosophy
            </h2>
            <p className="text-2xl text-gray-300 font-medium">
              Research is not just academic — it's practical, collaborative, and constantly evolving.
            </p>
          </div>
        </section>

        {/* What Makes Our Projects Different */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-star text-foreground-2 mr-3"></i>
            What Makes Our Projects Different?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatMakesDifferent.map((item, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <i className={`fas ${item.icon} text-white text-sm`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Categories */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-folder-open text-foreground-1 mr-3"></i>
            Project Categories
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left text-white font-bold">Category</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                {projectCategories.map((category, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="px-6 py-4 text-white font-medium">{category.category}</td>
                    <td className="px-6 py-4 text-gray-300">{category.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Student Research Projects */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-graduation-cap text-foreground-2 mr-3"></i>
              Student Research Projects
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Every student completes at least one project per semester – individually or in teams.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <i className="fas fa-file-alt text-3xl text-foreground-1 mb-4"></i>
                <h3 className="font-bold text-white mb-2">Documented</h3>
                <p className="text-gray-300 text-sm">Structured format with goals, methods, and results</p>
              </div>
              <div className="text-center">
                <i className="fas fa-presentation text-3xl text-foreground-2 mb-4"></i>
                <h3 className="font-bold text-white mb-2">Presented</h3>
                <p className="text-gray-300 text-sm">Peer-reviewed workshops and demos</p>
              </div>
              <div className="text-center">
                <i className="fab fa-github text-3xl text-foreground-1 mb-4"></i>
                <h3 className="font-bold text-white mb-2">Archived</h3>
                <p className="text-gray-300 text-sm">Stored in University of AI GitHub Archive</p>
              </div>
              <div className="text-center">
                <i className="fas fa-recycle text-3xl text-foreground-2 mb-4"></i>
                <h3 className="font-bold text-white mb-2">Reusable</h3>
                <p className="text-gray-300 text-sm">Available for improvement and publication</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Collaboration */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-handshake text-foreground-1 mr-3"></i>
            Industry Collaboration
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8">We actively partner with:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationPartners.map((partner, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${partner.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{partner.title}</h3>
                <p className="text-gray-300">{partner.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-accent rounded-lg p-6">
            <p className="text-white text-center font-medium">
              <i className="fas fa-envelope text-foreground-1 mr-2"></i>
              If your organization wants to propose a project or become a co-creation partner, contact: 
              <span className="text-foreground-2 ml-2">projects@university-of-ai.org</span>
            </p>
          </div>
        </section>

        {/* Spotlight Projects */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-spotlight text-foreground-2 mr-3"></i>
            Spotlight Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spotlightProjects.map((project, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-foreground-1 rounded-full p-3">
                    <i className={`fas ${project.icon} text-black text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">📌 {project.name}</h3>
                    <p className="text-gray-300 mb-3">{project.description}</p>
                    <div className="mb-3">
                      <span className="text-foreground-2 font-medium">Tech stack: </span>
                      <span className="text-gray-300">{project.techStack}</span>
                    </div>
                    <div className="bg-green-900 bg-opacity-30 border border-green-600 rounded-lg p-3">
                      <span className="text-green-200 font-medium">Outcome: </span>
                      <span className="text-green-200">{project.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Publications */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-book text-foreground-1 mr-3"></i>
              Research Publications & Whitepapers
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our faculty and advanced students regularly publish findings and methodologies. Recent topics include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {researchTopics.map((topic, index) => (
                <div key={index} className="flex items-center gap-3">
                  <i className="fas fa-file-alt text-foreground-2"></i>
                  <span className="text-gray-300">{topic}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="btn-primary inline-flex items-center">
                <i className="fas fa-external-link-alt mr-2"></i>
                📄 View All Publications
              </button>
            </div>
          </div>
        </section>

        {/* Contribute or Collaborate */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-users text-foreground-2 mr-3"></i>
            Contribute or Collaborate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributionWays.map((way, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${way.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{way.title}</h3>
                <p className="text-gray-300">{way.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-calendar-alt text-foreground-1 mr-3"></i>
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${event.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-gray-300">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/studies/entrepreneur" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-lightbulb text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Entrepreneurship Track</h3>
              <p className="text-gray-300 mb-4">Turn your research into a startup venture</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Learn More
              </div>
            </Link>
            
            <Link to="/news/research" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-money-bill-wave text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Research Funding</h3>
              <p className="text-gray-300 mb-4">Explore funding opportunities for your research projects</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Funding
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our research community and contribute to the future of AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-flask mr-2"></i>
              Submit Research Idea
            </button>
            <Link to="/studies/admissions" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-graduation-cap mr-2"></i>
              Apply to Programs
            </Link>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
            <h3 className="text-xl font-bold text-white mb-4">
              <i className="fas fa-envelope text-foreground-1 mr-2"></i>
              Questions or Submissions?
            </h3>
            <p className="text-gray-300 mb-4">
              Write to us: <span className="text-foreground-1">research@university-of-ai.org</span>
            </p>
            <p className="text-gray-300">
              Join our research Discord: <span className="text-foreground-2">#ai-projects</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Research
