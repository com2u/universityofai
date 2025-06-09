# University of AI Website

## 🎯 Project Overview

The University of AI (university-of-ai.org) is a revolutionary educational institution that represents the future of AI education. This project is a complete, modern website showcasing a forward-thinking university that doesn't just teach AI – it creates with it.

## 🚀 Startup Idea & Vision

### The Concept
The University of AI is designed as a virtual-first, AI-driven educational institution that bridges the gap between traditional academia and the rapidly evolving AI industry. Our vision is to create a dynamic learning environment where:

- **AI-First Education**: Students learn by building with AI tools and agents
- **Industry Integration**: Direct collaboration with AI startups and tech companies
- **Global Accessibility**: Virtual-first approach making quality AI education accessible worldwide
- **Ethical Foundation**: Strong emphasis on responsible AI development and ethics
- **Practical Application**: Focus on real-world projects and entrepreneurship

### Key Differentiators
- **Dynamic Curriculum**: Content updates in real-time with AI advancements
- **AI Agent Integration**: Students work with actual AI agents in their projects
- **Startup Incubation**: Built-in entrepreneurship programs and mentorship
- **Global Expert Network**: Access to leading AI researchers and practitioners
- **Flexible Learning**: Adaptive online learning with personalized paths

## 🌟 Website Features

- **Modern Design**: Clean, dark theme with gradient effects and animations
- **Fully Responsive**: Optimized for both desktop and mobile devices
- **Comprehensive Content**: 20+ pages covering all aspects of university life
- **Interactive Elements**: Dynamic components and engaging user experience
- **Professional Navigation**: Intuitive menu structure with Font Awesome icons
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🐳 Docker Deployment

### Quick Start

```bash
# Using Docker Compose (recommended)
docker-compose up --build

# Using Docker directly
docker build -t university-of-ai .
docker run -p 7701:7701 university-of-ai

# Using the build script
./build-docker.sh
```

### Prerequisites

- Docker installed on your system
- Docker Compose (optional, but recommended)

### Detailed Docker Instructions

1. **Clone the repository:**
```bash
git clone <repository-url>
cd universityofai
```

2. **Build and start with Docker Compose:**
```bash
docker-compose up --build
```

3. **Access the website:**
   - URL: http://localhost:7701
   - Health Check: http://localhost:7701/health

### Docker Management Commands

```bash
# Stop the container
docker-compose down

# Rebuild and restart
docker-compose up --build

# View logs
docker-compose logs -f

# Run in background
docker-compose up -d

# Check container status
docker-compose ps
```

## Development Setup (without Docker)

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
universityofai/
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/              # Page components
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── data/                   # Content data files
├── Dockerfile              # Docker configuration
├── nginx.conf              # Nginx configuration
├── docker-compose.yml      # Docker Compose configuration
└── package.json            # Dependencies and scripts
```

## 📚 Complete Website Structure

The University of AI website includes 20+ comprehensive pages organized into three main sections:

### 🏠 Home & About
- **Home (/)** - Dynamic landing page with hero section, features, and call-to-actions
- **About (/about)** - University philosophy, vision, mission, and core values

### 🎓 Studies Section
- **Studies (/studies)** - Overview of academic programs
- **Admissions (/studies/admissions)** - Application process, requirements, and FAQs
- **Pre-Courses (/studies/precourses)** - Foundational courses to level all students
- **Program (/studies/program)** - Detailed degree program framework
- **Courses (/studies/courses)** - Course catalog and descriptions
- **Faculties (/studies/faculties)** - Trainer and faculty profiles
- **Entrepreneurship (/studies/entrepreneur)** - Innovation and startup programs
- **Research (/studies/research)** - Applied research and project opportunities

### 📰 News & Events
- **Student Life (/news/students)** - Community activities and student experiences
- **Master Pitch (/news/masterpitch)** - Virtual presentations of Master's thesis work
- **Bachelor Pitch (/news/bachelorpitch)** - Virtual presentations of Bachelor's projects
- **Campus Fair (/news/campus)** - Virtual campus exploration platform
- **Research Funding (/news/research)** - Grant opportunities and funding support
- **Video Recordings (/news/video)** - Secured access to course recordings

### 🏛️ University Information
- **Profile (/university/profil)** - Core values and institutional identity
- **Careers (/university/career)** - Job opportunities and open positions
- **Cooperation (/university/cooperation)** - Partner institutions and collaborations
- **Academic Careers (/university/academic)** - Research career opportunities
- **Feedback (/university/feedback)** - Student and trainer testimonials
- **AI Policy (/university/ai-policy)** - Comprehensive AI usage guidelines
- **Contact (/university/contact)** - Support channels and contact information

## 🎨 Design & Technology

### Visual Design
- **Color Scheme**: Black background with cyan (#61b3dc) and green (#61dca3) accents
- **Typography**: JetBrains Mono for a modern, tech-focused aesthetic
- **Icons**: Font Awesome integration throughout the interface
- **Effects**: Gradient text animations and glitch effects for dynamic appeal
- **Layout**: Clean, minimal design with rounded borders and subtle shadows

### Technical Stack
- **Frontend**: React 18 with Vite for fast development and building
- **Styling**: Tailwind CSS for utility-first styling
- **Routing**: React Router for single-page application navigation
- **Icons**: Font Awesome for consistent iconography
- **Build**: Optimized production builds with code splitting
- **Deployment**: Docker containerization with nginx for production serving

## Configuration

### Environment Variables

The application supports the following environment variables:

- `NODE_ENV` - Environment mode (development/production)
- `VITE_API_URL` - API base URL (if needed)

### Nginx Configuration

The nginx configuration includes:

- Gzip compression for better performance
- Security headers
- SPA routing support for React Router
- Static asset caching
- Health check endpoint at `/health`

## Deployment

### Production Deployment

1. Build the Docker image:
```bash
docker build -t university-of-ai:latest .
```

2. Run in production:
```bash
docker run -d \
  --name university-of-ai \
  --restart unless-stopped \
  -p 7701:7701 \
  university-of-ai:latest
```

### Using Docker Compose in Production

```bash
docker-compose -f docker-compose.yml up -d
```

## Health Monitoring

The application includes a health check endpoint:

- **URL:** `http://localhost:7701/health`
- **Response:** `healthy` (200 OK)

## Support

For technical support or questions about the University of AI website, please contact:

- **Technical Support:** tech-support@university-of-ai.org
- **General Inquiries:** support@university-of-ai.org

## License

This project is proprietary to the University of AI.
