import { motion } from 'framer-motion'
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/Sadia1609',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/sadiarahman1609/',
      label: 'LinkedIn'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:sadia.rahman160920@gmail.com',
      label: 'Email'
    }
  ]

  return (
    <footer className="py-12 border-t border-primary/20 bg-navy-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
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
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-slate text-sm flex items-center justify-center">
              Built with <FaHeart className="text-accent mx-2" size={14} /> by Sadia Rahman
            </p>
            <p className="text-slate text-xs">
              © {new Date().getFullYear()} Sadia Rahman. All rights reserved.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="pt-4 border-t border-primary/10">
            <p className="text-slate text-xs">
              Built with React, Tailwind CSS, Framer Motion & lots of ☕
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer