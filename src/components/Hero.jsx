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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
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
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="text-primary font-mono text-sm sm:text-base lg:text-lg"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            >
              Sadia Rahman
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate leading-tight"
            >
              I build things for the web.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-slate max-w-lg mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed"
            >
              I'm a passionate <span className="text-primary">Frontend Developer</span> specializing in 
              building exceptional digital experiences. Currently focused on creating 
              accessible, human-centered products.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="glow-on-hover group w-full sm:w-auto"
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
                className="glow-on-hover w-full sm:w-auto"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <FaDownload className="mr-2" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-6 sm:pt-8"
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
            className="relative order-first lg:order-last"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
              {/* Decorative border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-primary/30"
              />
              
              {/* Profile image container */}
              <div className="absolute inset-2 sm:inset-4 rounded-full overflow-hidden glass-card group">
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
                        className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border-2 border-primary/40"
                      >
                        <span className="text-4xl sm:text-5xl lg:text-6xl text-primary font-bold">S</span>
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="text-primary font-signature text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2"
                      >
                        Sadia Rahman
                      </motion.p>
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="text-secondary text-xs sm:text-sm font-medium"
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
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-full blur-sm"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-accent/20 rounded-full blur-sm"
              />
              
              {/* Additional decorative elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-6 right-6 sm:top-8 sm:right-8 w-3 h-3 sm:w-4 sm:h-4 border border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-2 h-2 sm:w-3 sm:h-3 border border-accent/30 rounded-full"
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
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero