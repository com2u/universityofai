import React from 'react'
import { Link } from 'react-router-dom'
import LetterGlitch from '../components/LetterGlitch'
import GradientText from '../components/GradientText'
import StarBorder from '../components/StarBorder'

const About = () => {
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
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/data/Logo.png" 
                alt="University of AI Logo" 
                className="h-24 md:h-32 mx-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About the <span className="text-foreground-1">University of AI</span>
            </h1>
            <GradientText
              colors={["#61b3dc", "#61dca3", "#61b3dc", "#61dca3", "#61b3dc"]}
              animationSpeed={3}
              showBorder={false}
              className="text-xl max-w-3xl mx-auto"
            >
              We are a new kind of university for a new kind of intelligence.
            </GradientText>
          </div>
        </div>

        {/* Who We Are */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Who We Are</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                The University of AI is a fully AI-centered academic institution that develops tools 
                for and with artificial intelligence. Our goal is to equip future innovators with 
                the mindset and practical skills needed to thrive in a world shaped by AI.
              </p>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-foreground-2 mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To train students not just to use AI — but to shape its future through 
                  practical learning, ethical responsibility, and innovative thinking.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 mb-6">
                We aim to train students not just to use AI — but to shape its future. 
                Whether they're building autonomous agents, exploring new data paradigms, 
                or rethinking how software is created, our students are positioned at the 
                heart of tomorrow's technological landscape.
              </p>
              <div className="flex items-center gap-3">
                <i className="fas fa-lightbulb text-foreground-1 text-xl"></i>
                <span className="text-foreground-2 font-medium">Innovation at the Core</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why AI Education Matters */}
        <section className="mb-20">
          <StarBorder
            color="#61dca3"
            speed="5s"
            className="w-full"
          >
            <div>
              <h2 className="section-title text-center mb-12">Why AI Education Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-300 mb-6">
                    AI is transforming society faster than any technology before it. And yet, 
                    its full impact on industries, labor, law, and ethics is still unfolding. 
                    That's why early and deep education in AI is crucial — not only to use it, 
                    but to understand, evaluate, guide, and evolve it responsibly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground-2 mb-4">We prepare students to:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <i className="fas fa-brain text-foreground-1 mt-1"></i>
                      <span className="text-gray-300">Understand AI's current capabilities and limitations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-balance-scale text-foreground-1 mt-1"></i>
                      <span className="text-gray-300">Analyze and respond to ethical and societal implications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-cogs text-foreground-1 mt-1"></i>
                      <span className="text-gray-300">Build meaningful, responsible, and scalable AI systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </StarBorder>
        </section>

        {/* Our Approach */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Practical Learning */}
            <div className="card text-center">
              <div className="feature-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Practical Learning First</h3>
              <p className="text-gray-300">
                From day one, students work on real tools, real datasets, and real challenges. 
                We emphasize hands-on problem solving and production-ready results.
              </p>
            </div>

            {/* Dynamic Curriculum */}
            <div className="card text-center">
              <div className="feature-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Dynamic Curriculum</h3>
              <p className="text-gray-300">
                Our course content is updated constantly, not just every semester. 
                We follow the pace of tech, not the pace of tradition.
              </p>
            </div>

            {/* Tech-Centered */}
            <div className="card text-center">
              <div className="feature-icon">
                <i className="fas fa-microchip"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tech-Centered Design</h3>
              <p className="text-gray-300">
                Courses integrate AI Agents, LLMs, automated testing, multimodal AI, 
                and responsible AI practices.
              </p>
            </div>

            {/* Global Collaboration */}
            <div className="card text-center">
              <div className="feature-icon">
                <i className="fas fa-globe-americas"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Collaboration</h3>
              <p className="text-gray-300">
                We work with startups, NGOs, and industry leaders from logistics, 
                health, education, and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Integration */}
        <section className="mb-20">
          <div className="bg-black rounded-lg p-8 border border-gray-700">
            <h2 className="section-title text-center mb-8">Tech-Centered by Design</h2>
            <p className="text-center text-gray-300 mb-8">Our courses integrate cutting-edge technologies:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <i className="fas fa-robot text-3xl text-foreground-1 mb-2"></i>
                <p className="text-sm text-gray-300">AI Agents</p>
                <p className="text-xs text-gray-400">CrewAI, LangGraph, AutoGen</p>
              </div>
              <div className="text-center">
                <i className="fas fa-brain text-3xl text-foreground-1 mb-2"></i>
                <p className="text-sm text-gray-300">LLMs</p>
                <p className="text-xs text-gray-400">Prompt Engineering</p>
              </div>
              <div className="text-center">
                <i className="fas fa-vial text-3xl text-foreground-1 mb-2"></i>
                <p className="text-sm text-gray-300">Testing</p>
                <p className="text-xs text-gray-400">AI Code Analysis</p>
              </div>
              <div className="text-center">
                <i className="fas fa-images text-3xl text-foreground-1 mb-2"></i>
                <p className="text-sm text-gray-300">Multimodal AI</p>
                <p className="text-xs text-gray-400">Text, Image, Audio, Video</p>
              </div>
              <div className="text-center">
                <i className="fas fa-shield-alt text-3xl text-foreground-1 mb-2"></i>
                <p className="text-sm text-gray-300">Responsible AI</p>
                <p className="text-xs text-gray-400">Ethics, Law, Safety</p>
              </div>
              <div className="text-center">
                <i className="fas fa-lightbulb text-3xl text-foreground-1 mb-2"></i>
                <p className="text-sm text-gray-300">Innovation</p>
                <p className="text-xs text-gray-400">AI-Powered Planning</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">What Makes Us Different</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-foreground-1 rounded-full p-2 mt-1">
                  <i className="fas fa-sync text-black text-sm"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Real-world, Evolving Curriculum</h3>
                  <p className="text-gray-300">Constantly updated content that follows industry pace</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-foreground-1 rounded-full p-2 mt-1">
                  <i className="fas fa-project-diagram text-black text-sm"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">End-to-end AI Pipelines</h3>
                  <p className="text-gray-300">From ideation to deployment in real projects</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-foreground-1 rounded-full p-2 mt-1">
                  <i className="fas fa-cogs text-black text-sm"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Integrated Technology Stack</h3>
                  <p className="text-gray-300">LLMs, agents, automation frameworks, and data tools</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-foreground-2 rounded-full p-2 mt-1">
                  <i className="fas fa-users text-black text-sm"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">International Expert Team</h3>
                  <p className="text-gray-300">Industry-active experts from around the globe</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-foreground-2 rounded-full p-2 mt-1">
                  <i className="fas fa-leaf text-black text-sm"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Sustainability & Ethics</h3>
                  <p className="text-gray-300">Commitment to responsible AI development</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-foreground-2 rounded-full p-2 mt-1">
                  <i className="fas fa-heart text-black text-sm"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Inclusion & Transparency</h3>
                  <p className="text-gray-300">Diverse, inclusive, and transparent AI practices</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability & Ethics */}
        <section className="mb-20 bg-accent rounded-lg p-8 border border-gray-700">
          <h2 className="section-title text-center mb-8 text-white">Sustainability, Ethics & Inclusion</h2>
          <p className="text-center text-gray-200 mb-8 text-lg">
            We take AI responsibility seriously. Our training includes dedicated focus areas on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <i className="fas fa-balance-scale text-3xl text-foreground-1 mb-3"></i>
              <h3 className="font-bold text-white mb-2">AI & Bias</h3>
              <p className="text-gray-200 text-sm">Understanding and mitigating algorithmic bias</p>
            </div>
            <div className="text-center">
              <i className="fas fa-leaf text-3xl text-foreground-2 mb-3"></i>
              <h3 className="font-bold text-white mb-2">Sustainable AI</h3>
              <p className="text-gray-200 text-sm">Environmentally conscious AI infrastructure</p>
            </div>
            <div className="text-center">
              <i className="fas fa-handshake text-3xl text-foreground-1 mb-3"></i>
              <h3 className="font-bold text-white mb-2">Fairness</h3>
              <p className="text-gray-200 text-sm">Ensuring fair and equitable model outcomes</p>
            </div>
            <div className="text-center">
              <i className="fas fa-globe text-3xl text-foreground-2 mb-3"></i>
              <h3 className="font-bold text-white mb-2">Global Relevance</h3>
              <p className="text-gray-200 text-sm">Cross-cultural AI application design</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Become part of the next generation of AI innovators and leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/studies/admissions" className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-graduation-cap mr-2"></i>
              Apply Now
            </Link>
            <Link to="/studies/courses" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-book mr-2"></i>
              Explore Programs
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
