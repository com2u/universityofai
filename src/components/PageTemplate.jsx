import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from './GradientText'

const PageTemplate = ({ 
  title, 
  icon, 
  subtitle, 
  description, 
  status = "Coming Soon",
  backLink = "/",
  backText = "Back to Home"
}) => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <i className={`fas ${icon} text-foreground-1 mr-4`}></i>
            {title}
          </h1>
          {subtitle && (
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-3xl font-bold mb-4"
            >
              {subtitle}
            </GradientText>
          )}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="card text-center">
          <i className="fas fa-construction text-6xl text-foreground-1 mb-6"></i>
          <h2 className="text-3xl font-bold text-white mb-4">{status}</h2>
          <p className="text-gray-300 mb-6">
            This page is under development. Check back soon for updates.
          </p>
          <Link to={backLink} className="btn-primary">
            <i className="fas fa-arrow-left mr-2"></i>
            {backText}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageTemplate
