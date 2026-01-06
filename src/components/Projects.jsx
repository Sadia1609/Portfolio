import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      id: 1,
      name: "PawMart",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop",
      shortDescription: "A full-stack pet adoption & supply marketplace with CRUD operations and secure authentication",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
      liveLink: "https://pet-care-8ba14.web.app/",
      githubLink: "https://github.com/Sadia1609/paw-mart",
      fullDescription: "PawMart is a community-driven platform built for pet owners, breeders, and pet shops to list pets for adoption and sell pet-related products. Features include secure authentication, full CRUD operations, order management with PDF reports, dark/light mode toggle, and 100% responsive design.",
      challenges: [
        "Building full-stack application with React frontend and Node.js backend",
        "Implementing secure Firebase authentication with Google Sign-in",
        "Creating CRUD operations for pet listings and order management",
        "Generating PDF reports using jsPDF and AutoTable for order history"
      ],
      improvements: [
        "Add real-time chat between buyers and sellers",
        "Implement advanced search with location-based filtering",
        "Add payment gateway integration for secure transactions",
        "Create admin dashboard for platform management"
      ]
    },
    {
      id: 2,
      name: "Hero Apps",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      shortDescription: "A responsive app marketplace web application with dynamic app listing and installation features",
      technologies: ["React", "React Router", "Tailwind CSS", "JavaScript", "Recharts", "LocalStorage API"],
      liveLink: "https://hero-apps-react-js.netlify.app/",
      githubLink: "https://github.com/Sadia1609/hero-apps",
      fullDescription: "Hero Apps is a responsive app marketplace web application where users can explore popular apps, view detailed ratings and reviews, install apps using localStorage, and manage their installed applications with a smooth user experience.",
      challenges: [
        "Implementing dynamic app listing with live search functionality",
        "Creating app installation & uninstall using localStorage",
        "Building responsive design for all devices with smooth user experience",
        "Integrating Recharts for review analytics and data visualization"
      ],
      improvements: [
        "Add user authentication and personalized recommendations",
        "Implement real-time app updates and notifications",
        "Add app categories and advanced filtering options",
        "Integrate payment system for premium apps"
      ]
    },
    {
      id: 3,
      name: "Winter Pet Care",
      image: 
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop&crop=center",
      shortDescription: "A modern web application helping pet owners care for their pets during winter seasons",
      technologies: ["React", "Vite", "Tailwind CSS", "DaisyUI", "Framer Motion", "Swiper.js"],
      liveLink: "https://a9winterpetcare.netlify.app/",
      githubLink: "https://github.com/Sadia1609/A9-winter-petcare",
      fullDescription: "Winter Pet Care is designed to support pet owners with essential resources during the winter months. The platform provides expert advice, tips, and services including grooming, boarding, medical checkups, and emergency support to ensure pets stay warm, safe, and healthy in cold weather.",
      challenges: [
        "Creating seasonal-specific content and tips for pet care",
        "Implementing smooth animations with Framer Motion",
        "Building interactive sliders using Swiper.js for services showcase",
        "Designing responsive UI with Tailwind CSS and DaisyUI"
      ],
      improvements: [
        "Add real-time weather integration for location-based tips",
        "Implement appointment booking system for consultations",
        "Add user accounts for personalized pet care plans",
        "Create mobile app version for better accessibility"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-slate max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="glass-card border-primary/20 glow-on-hover h-full overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.liveLink, '_blank')}
                        className="text-primary border-primary hover:bg-primary hover:text-navy"
                      >
                        <FaExternalLinkAlt className="mr-2" size={14} />
                        Live
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubLink, '_blank')}
                        className="text-primary border-primary hover:bg-primary hover:text-navy"
                      >
                        <FaGithub className="mr-2" size={14} />
                        Code
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-slate text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate/10 text-slate text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-4"
                      onClick={() => {
                        setSelectedProject(project)
                        // Ensure modal content starts at top with smooth animation
                        setTimeout(() => {
                          const scrollContainer = document.querySelector('.modal-content .overflow-y-auto')
                          if (scrollContainer) {
                            scrollContainer.scrollTo({ 
                              top: 0, 
                              behavior: 'smooth' 
                            })
                          }
                        }, 200)
                      }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.4 
            }}
            className="glass-card border-primary/20 max-w-4xl w-full max-h-[90vh] overflow-hidden modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-y-auto max-h-[90vh] scroll-smooth">
              <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">{selectedProject.name}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate hover:text-primary transition-colors"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Project Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 object-cover rounded-lg"
              />

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Project Description</h4>
                <p className="text-slate leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-lg font-semibold text-accent mb-3">Challenges Faced</h4>
                <ul className="space-y-2">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index} className="text-slate flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Improvements */}
              <div>
                <h4 className="text-lg font-semibold text-secondary mb-3">Future Improvements</h4>
                <ul className="space-y-2">
                  {selectedProject.improvements.map((improvement, index) => (
                    <li key={index} className="text-slate flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={() => window.open(selectedProject.liveLink, '_blank')}
                  className="flex-1"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View Live Project
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(selectedProject.githubLink, '_blank')}
                  className="flex-1"
                >
                  <FaGithub className="mr-2" />
                  View Source Code
                </Button>
              </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Projects