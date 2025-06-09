import React from 'react'
import PageTemplate from '../components/PageTemplate'
import GradientText from '../components/GradientText'

const Video = () => {
  return (
    <PageTemplate
      title="Video Recordings"
      subtitle="Video Recordings"
      icon="fa-video"
      description="Secured area for logged-in users to view session and course recordings."
      status="Video Portal Coming Soon"
      backLink="/news/students"
      backText="Back to Student Life"
    />
  )
}

export default Video
