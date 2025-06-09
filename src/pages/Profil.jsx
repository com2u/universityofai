import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'
import LetterGlitch from '../components/LetterGlitch'
import StarBorder from '../components/StarBorder'

const Profil = () => {
  const coreValues = [
    {
      icon: "fa-rocket",
      title: "Innovation and Modernity",
      description: "At the University of AI, innovation is not a buzzword — it's the foundation of our academic philosophy. Our focus is on AI in teaching and practical application, rooted in the understanding that the AI field is one of the fastest-evolving sectors today.",
      details: "We continuously adapt our learning materials, course structures, and strategic direction to reflect the latest developments. Students learn how to build innovations, not just understand them. They are equipped with state-of-the-art tools and encouraged to develop creative solutions that go beyond textbook knowledge."
    },
    {
      icon: "fa-microscope",
      title: "Unity of Teaching and Research",
      description: "The University of AI unites high-quality teaching across a wide academic spectrum with strong applied research. Teaching formats are modern, need-oriented, and highly flexible — ideal for lifelong learning.",
      details: "We maintain a close partnership with industry and the tech economy, ensuring that research flows into teaching, and that learning translates into real-world results. This bidirectional synergy powers both academic depth and practical relevance."
    },
    {
      icon: "fa-cogs",
      title: "Application Orientation & Knowledge Transfer",
      description: "We bridge the gap between academic insight and industry application. Our university identifies emerging impulses from professional practice and collaborates with industry partners to co-create usable AI tools, products, and methods.",
      details: "This focus on real-world integration ensures our students acquire skills that are directly applicable in their careers. As such, the University of AI is a catalyst for digital innovation and efficient, future-ready workflows."
    },
    {
      icon: "fa-balance-scale",
      title: "Educational Equity & Opportunity",
      description: "Our university creates an inclusive learning environment for a diverse and heterogeneous student body.",
      details: "We champion educational justice and ensure that students from all backgrounds — regardless of age, origin, or academic history — receive equal opportunities to reach their full potential. We commit to supporting and uplifting each learner, recognizing and valuing their unique learning journeys and life experiences."
    },
    {
      icon: "fa-globe",
      title: "Internationality",
      description: "The University of AI is a truly global academic institution. With long-standing international partnerships and a curriculum designed for the global tech stage, we attract and serve students from across the world.",
      details: "We promote cultural exchange, support international mobility, and ensure our students gain the global perspective needed to lead in AI development and innovation. Our faculty and programs are internationally oriented, interculturally open, and globally connected."
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative text-center mb-16">
          {/* Letter Glitch Background */}
          <div className="absolute inset-0 -mx-4 -my-8 rounded-lg overflow-hidden">
            <LetterGlitch
              glitchSpeed={3}
              centerVignette={true}
              outerVignette={true}
              smooth={true}
              glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
            />
          </div>
          <div className="relative z-10 py-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <i className="fas fa-id-card text-foreground-1 mr-4"></i>
              Profile of the University of AI
            </h1>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-3xl font-bold mb-8"
            >
              Profil
            </GradientText>
            {/* Logo under Profil subtitle */}
            <div className="mb-8">
              <img 
                src="/data/Logo.png" 
                alt="University of AI Logo" 
                className="h-24 md:h-32 mx-auto"
              />
            </div>
            <div className="bg-accent rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">We Stand For...</h3>
              <p className="text-white text-lg">
                At the University of AI, we are committed to excellence in education, research, and innovation. 
                Our core values guide everything we do, from curriculum design to student support, 
                ensuring we prepare the next generation of AI leaders.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <section className="mb-20">
          <div className="space-y-12">
            {coreValues.map((value, index) => (
              <div key={index} className="card">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="bg-foreground-1 rounded-full w-20 h-20 flex items-center justify-center">
                      <i className={`fas ${value.icon} text-black text-2xl`}></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      {value.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                      {value.description}
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-foreground-2">
                      <p className="text-gray-300 leading-relaxed">
                        {value.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement Summary */}
        <section className="mb-20">
          <StarBorder
            color="#61b3dc"
            speed="5s"
            className="w-full"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-8">
                <i className="fas fa-star text-foreground-2 mr-3"></i>
                Our Commitment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-brain text-black text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
                  <p className="text-gray-300">Leading the future of AI education</p>
                </div>
                <div className="text-center">
                  <div className="bg-foreground-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-users text-black text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Inclusive Excellence</h3>
                  <p className="text-gray-300">Equal opportunities for all learners</p>
                </div>
                <div className="text-center">
                  <div className="bg-foreground-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-handshake text-black text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Real-World Impact</h3>
                  <p className="text-gray-300">Bridging academia and industry</p>
                </div>
              </div>
            </div>
          </StarBorder>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">
            <i className="fas fa-compass text-foreground-1 mr-3"></i>
            Explore Our University
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/about" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-info-circle text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
              <p className="text-gray-300 mb-4">Learn more about our philosophy and approach</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Learn More
              </div>
            </Link>
            
            <Link to="/studies/admissions" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-door-open text-4xl text-foreground-2 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Admissions</h3>
              <p className="text-gray-300 mb-4">Start your journey with us</p>
              <div className="btn-secondary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Apply Now
              </div>
            </Link>
            
            <Link to="/studies/research" className="card text-center group hover:scale-105 transition-transform duration-200">
              <i className="fas fa-flask text-4xl text-foreground-1 mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Research</h3>
              <p className="text-gray-300 mb-4">Explore our cutting-edge projects</p>
              <div className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                View Research
              </div>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-accent rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            <i className="fas fa-envelope text-foreground-2 mr-3"></i>
            Get in Touch
          </h2>
          <p className="text-white text-lg mb-6">
            Want to learn more about our mission and values? We'd love to hear from you.
          </p>
          <Link to="/university/contact" className="btn-primary text-lg px-8 py-4">
            <i className="fas fa-phone mr-2"></i>
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Profil
