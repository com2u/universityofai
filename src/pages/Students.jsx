import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'

const Students = () => {
  const dailyActivities = [
    {
      activity: "Live Classes",
      format: "Video + chat",
      purpose: "Learn from world-class trainers"
    },
    {
      activity: "Open Study Rooms",
      format: "Always-on voice",
      purpose: "Work together, ask questions live"
    },
    {
      activity: "Weekly Standups",
      format: "Small group calls",
      purpose: "Share goals, progress, blockers"
    },
    {
      activity: "AI Labs",
      format: "Virtual labs",
      purpose: "Build & test AI tools in teams"
    },
    {
      activity: "Code/Design Clinics",
      format: "1:1 or small group",
      purpose: "Get feedback on your work"
    },
    {
      activity: "Community Discussions",
      format: "Discord + Forums",
      purpose: "Debate, exchange, co-develop ideas"
    },
    {
      activity: "Hackathons & Challenges",
      format: "Time-boxed events",
      purpose: "Solve real problems, win prizes"
    }
  ]

  const globalCommunityFeatures = [
    {
      icon: "fa-globe",
      title: "Students from 50+ countries",
      description: "Diverse perspectives from around the world"
    },
    {
      icon: "fa-language",
      title: "Multilingual collaboration tools",
      description: "Work seamlessly across language barriers"
    },
    {
      icon: "fa-video",
      title: "Cultural exchange via digital meetups",
      description: "Connect with peers from different cultures"
    },
    {
      icon: "fa-users",
      title: "Group projects with international teams",
      description: "Collaborate on real-world projects globally"
    },
    {
      icon: "fa-clock",
      title: "Peer feedback across time zones",
      description: "24/7 support and collaboration"
    }
  ]

  const eventsActivities = [
    {
      icon: "fa-microphone",
      title: "AI Talks & Fireside Chats",
      description: "Meet startup founders, researchers, investors, and technologists"
    },
    {
      icon: "fa-puzzle-piece",
      title: "AI Puzzle Nights",
      description: "Fun logic and automation challenges with rewards"
    },
    {
      icon: "fa-comments",
      title: "Language Exchange Rooms",
      description: "Practice English, German, Spanish, and more"
    },
    {
      icon: "fa-presentation",
      title: "Demo Days",
      description: "Present your project to the entire university — and the world"
    },
    {
      icon: "fa-gamepad",
      title: "Game & Chill Nights",
      description: "Minecraft, Figma Jams, Gartic, and more for casual fun"
    }
  ]

  const learningBeyond = [
    {
      icon: "fa-rocket",
      title: "Innovation Sprints",
      description: "Short cycles of idea-to-MVP development"
    },
    {
      icon: "fa-user-tie",
      title: "Mentorship Programs",
      description: "Pairing students with AI professionals from academia & industry"
    },
    {
      icon: "fa-briefcase",
      title: "Real-World Client Projects",
      description: "Work directly with NGOs, startups, and companies on real deliverables"
    }
  ]

  const studentClubs = [
    "Prompt Engineering Club",
    "Women in AI",
    "AI & Ethics Collective",
    "Build-Your-Bot Club",
    "Open Source Group"
  ]

  const learningTools = [
    {
      icon: "fa-route",
      title: "Personal roadmap & progress tracker",
      description: "Track your learning journey"
    },
    {
      icon: "fa-robot",
      title: "Built-in AI assistance",
      description: "Get help whenever you need it"
    },
    {
      icon: "fa-code",
      title: "Integrated coding, design, and writing environments",
      description: "All tools in one place"
    },
    {
      icon: "fa-video",
      title: "Video library",
      description: "Access to all recorded content"
    },
    {
      icon: "fa-book",
      title: "Knowledge base",
      description: "Comprehensive learning resources"
    },
    {
      icon: "fa-rss",
      title: "AI-curated research feeds",
      description: "Stay updated with latest developments"
    }
  ]

  const supportCulture = [
    {
      icon: "fa-users",
      title: "Peer Reviews",
      description: "All major projects include feedback from classmates"
    },
    {
      icon: "fa-shield-alt",
      title: "Academic Integrity + AI",
      description: "Clearly marked AI-generated vs. original content. Learn to collaborate with AI responsibly."
    },
    {
      icon: "fa-heart",
      title: "Mental Health & Balance",
      description: "Access to support groups, mindful coding sessions, and 24/7 peer chat"
    }
  ]

  const connectionTools = [
    {
      icon: "fab fa-discord",
      title: "Discord",
      description: "Channels for courses, projects, memes, and support"
    },
    {
      icon: "fa-video",
      title: "Zoom",
      description: "Live classes, events, clinics, and group calls"
    },
    {
      icon: "fa-sticky-note",
      title: "Notion",
      description: "Course hubs, team dashboards, documentation"
    },
    {
      icon: "fa-robot",
      title: "AI Assistant",
      description: "Always on, always available inside the student portal"
    },
    {
      icon: "fa-calendar",
      title: "Google Calendar",
      description: "Synced schedules, reminders, and check-ins"
    }
  ]

  const dashboardFeatures = [
    "Weekly progress goals",
    "Assignment deadlines & submission center",
    "Certificate tracking",
    "Team formation & collaboration tools",
    "Mentor and cohort chat access",
    "Personal project portfolio space"
  ]

  const studentTestimonials = [
    {
      quote: "It's the first time I felt like school was designed around how I work, not the other way around.",
      name: "Amina",
      country: "Egypt",
      flag: "🇪🇬"
    },
    {
      quote: "I've learned more by building real tools with classmates than from years of tutorials.",
      name: "Jonas",
      country: "Germany",
      flag: "🇩🇪"
    },
    {
      quote: "I joined to learn AI — I stayed for the people.",
      name: "María",
      country: "Spain",
      flag: "🇪🇸"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className="fas fa-users text-foreground-1 mr-4"></i>
            Student Life
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl font-bold mb-4"
          >
            Student Life
          </GradientText>
          <p className="text-2xl text-gray-300 mb-8">
            Learn together. Build together. Lead the future together.
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            At the University of AI, your journey doesn't end with lectures and assignments — it begins 
            with community, collaboration, and creative exploration. We've designed a student experience 
            that's digital-first, globally inclusive, and deeply engaging — where students don't just 
            attend a university, they shape it.
          </p>
        </div>

        {/* Global Community */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-globe text-foreground-1 mr-3"></i>
              A Global Community of Innovators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {globalCommunityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-foreground-1 rounded-full p-2 mt-1">
                    <i className={`fas ${feature.icon} text-black text-sm`}></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-accent rounded-lg p-6">
              <p className="text-white text-center font-medium text-xl italic">
                "Our campus is the internet — our classroom is the world."
              </p>
            </div>
          </div>
        </section>

        {/* Daily Experience */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-calendar-day text-foreground-2 mr-3"></i>
            Daily Experience
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left text-white font-bold">Activity</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Format</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {dailyActivities.map((activity, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="px-6 py-4 text-white font-medium">{activity.activity}</td>
                    <td className="px-6 py-4 text-foreground-1">{activity.format}</td>
                    <td className="px-6 py-4 text-gray-300">{activity.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Events & Social Activities */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-calendar-alt text-foreground-1 mr-3"></i>
            Events & Social Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsActivities.map((event, index) => (
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

        {/* Learning Beyond the Classroom */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-graduation-cap text-foreground-2 mr-3"></i>
            Learning Beyond the Classroom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {learningBeyond.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${item.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Student-Led Clubs */}
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <i className="fas fa-users text-foreground-2 mr-2"></i>
              Student-Led Clubs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {studentClubs.map((club, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 text-center border border-gray-600">
                  <i className="fas fa-star text-foreground-1 mr-2"></i>
                  <span className="text-white font-medium">{club}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Tools & Platforms */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title mb-8">
              <i className="fas fa-tools text-foreground-1 mr-3"></i>
              Learning Tools & Platforms
            </h2>
            <p className="text-lg text-gray-300 mb-8">Custom learning platform with:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningTools.map((tool, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-foreground-2 rounded-full p-2 mt-1">
                    <i className={`fas ${tool.icon} text-black text-sm`}></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{tool.title}</h3>
                    <p className="text-gray-300 text-sm">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture of Support & Accountability */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-heart text-foreground-2 mr-3"></i>
            A Culture of Support & Accountability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportCulture.map((item, index) => (
              <div key={index} className="card">
                <div className="text-center mb-4">
                  <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${item.icon} text-black text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Stay Connected */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-wifi text-foreground-1 mr-3"></i>
            How We Stay Connected
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {connectionTools.map((tool, index) => (
              <div key={index} className="card text-center">
                <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className={`${tool.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                <p className="text-gray-300">{tool.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Student Dashboard Features */}
        <section className="mb-20">
          <div className="card">
            <h2 className="section-title text-center mb-8">
              <i className="fas fa-tachometer-alt text-foreground-2 mr-3"></i>
              Student Dashboard Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dashboardFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Voices */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-quote-left text-foreground-1 mr-3"></i>
            Student Voices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentTestimonials.map((testimonial, index) => (
              <div key={index} className="card text-center">
                <div className="text-6xl mb-4">{testimonial.flag}</div>
                <blockquote className="text-lg text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-foreground-1 font-bold">
                  — {testimonial.name}, {testimonial.country}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/studies/admissions" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-user-plus text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
              <p className="text-gray-300 mb-4">Start your application and become part of our global AI community</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Apply Now
              </div>
            </Link>
            
            <Link to="/news/campus" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-university text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-2xl font-bold text-white mb-4">Virtual Campus Fair</h3>
              <p className="text-gray-300 mb-4">Explore our virtual campus and meet current students</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Visit Campus
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience learning like never before with students from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/studies/admissions" className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-graduation-cap mr-2"></i>
              Apply Today
            </Link>
            <Link to="/about" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-info-circle mr-2"></i>
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Students
