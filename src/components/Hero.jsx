import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Sadia1609', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sadiarahman1609/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:sadia.rahman160920@gmail.com', label: 'Email' }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-primary font-mono text-base sm:text-lg"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Sadia Rahman
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate leading-tight"
            >
              I build things for the web.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-slate max-w-lg text-lg leading-relaxed"
            >
              I'm a passionate <span className="text-primary">Frontend Developer</span> specializing in 
              building exceptional digital experiences. Currently focused on creating 
              accessible, human-centered products.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                className="glow-on-hover group"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <motion.span
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                >
                  →
                </motion.span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="glow-on-hover"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <FaDownload className="mr-2" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-slate hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Decorative border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-primary/30"
              />
              
              {/* Profile image container */}
              <div className="absolute inset-4 rounded-full overflow-hidden glass-card group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative"
                >
                  {/* Beautiful Profile Design */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-navy-light to-accent/20 rounded-full flex items-center justify-center relative">
                    {/* Profile Content */}
                    <div className="text-center z-10">
                      <motion.div 
                        animate={{ 
                          boxShadow: [
                            "0 0 20px rgba(100, 255, 218, 0.3)",
                            "0 0 40px rgba(100, 255, 218, 0.5)",
                            "0 0 20px rgba(100, 255, 218, 0.3)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary/40"
                      >
                        <span className="text-6xl text-primary font-bold">S</span>
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="text-primary font-signature text-3xl mb-2"
                      >
                        Sadia Rahman
                      </motion.p>
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="text-secondary text-sm font-medium"
                      >
                        Frontend Developer
                      </motion.p>
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-full"></div>
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full blur-sm"
              />
              
              {/* Additional decorative elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-8 right-8 w-4 h-4 border border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-8 left-8 w-3 h-3 border border-accent/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero