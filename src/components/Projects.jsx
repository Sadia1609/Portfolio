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
      name: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      shortDescription: "A modern e-commerce platform with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveLink: "https://example-ecommerce.com",
      githubLink: "https://github.com/Sadia1609/ecommerce-platform",
      fullDescription: "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
      challenges: [
        "Implementing secure payment processing with Stripe API",
        "Optimizing database queries for large product catalogs",
        "Creating responsive design for all device sizes"
      ],
      improvements: [
        "Add real-time inventory management",
        "Implement advanced search and filtering",
        "Add multi-language support",
        "Integrate AI-powered product recommendations"
      ]
    },
    {
      id: 2,
      name: "Task Management App",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      shortDescription: "A collaborative task management application",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      liveLink: "https://example-taskmanager.com",
      githubLink: "https://github.com/Sadia1609/task-manager",
      fullDescription: "A collaborative task management application that helps teams organize and track their work efficiently. Features include project creation, task assignment, progress tracking, and team collaboration tools.",
      challenges: [
        "Implementing real-time collaboration features",
        "Managing complex state with multiple user interactions",
        "Creating intuitive drag-and-drop functionality"
      ],
      improvements: [
        "Add calendar integration",
        "Implement time tracking features",
        "Add mobile app version",
        "Integrate with popular productivity tools"
      ]
    },
    {
      id: 3,
      name: "Weather Dashboard",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      shortDescription: "A beautiful weather dashboard with forecasts",
      technologies: ["React", "JavaScript", "OpenWeather API", "Chart.js"],
      liveLink: "https://example-weather.com",
      githubLink: "https://github.com/Sadia1609/weather-dashboard",
      fullDescription: "A comprehensive weather dashboard that provides current weather conditions, 7-day forecasts, and interactive charts. Features location-based weather, multiple city tracking, and beautiful data visualizations.",
      challenges: [
        "Handling API rate limits and error states",
        "Creating responsive charts and visualizations",
        "Implementing geolocation features"
      ],
      improvements: [
        "Add weather alerts and notifications",
        "Implement historical weather data",
        "Add weather maps integration",
        "Create weather-based activity suggestions"
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
              <span className="text-primary font-mono text-lg mr-2">03.</span>
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
                      onClick={() => setSelectedProject(project)}
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="glass-card border-primary/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
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
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Projects