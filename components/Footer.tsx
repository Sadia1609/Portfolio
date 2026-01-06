'use client'

import { motion } from 'framer-motion'
import { Briefcase, Rss, Mail } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Briefcase, href: '#' },
    { icon: Rss, href: '#' },
    { icon: Mail, href: '#' }
  ]

  return (
    <footer className="py-12 border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex gap-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
              href={social.href}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm text-text-secondary-light dark:text-text-secondary-dark"
        >
          © 2023 Alex Morgan. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}