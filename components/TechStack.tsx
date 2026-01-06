'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { ArrowRight, Code, Database } from 'lucide-react'

const techItems = [
  { name: 'React', icon: Code, color: 'text-sky-500' },
  { name: 'TypeScript', icon: Code, color: 'text-blue-600' },
  { name: 'Tailwind', icon: Code, color: 'text-cyan-400' },
  { name: 'Node.js', icon: Database, color: 'text-green-500' }
]

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-[#151f2a] border-t border-border-light dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/3 space-y-4"
          >
            <h2 className="text-3xl font-black tracking-tight">Tech Stack</h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
              The tools and technologies I use to bring creative ideas to life on the web. I'm always learning and adapting to new standards.
            </p>
            <motion.a 
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline mt-2" 
              href="#"
            >
              View full resume <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {techItems.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(19, 127, 236, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="group flex flex-col items-center justify-center gap-3 p-6 bg-background-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-primary/50 transition-all cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <tech.icon className={`text-4xl ${tech.color}`} size={40} />
                  </motion.div>
                  <span className="font-bold text-sm">{tech.name}</span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}