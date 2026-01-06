'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Code, Mail, Rocket, CheckCircle } from 'lucide-react'

export default function HeroSection() {
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

  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="space-y-2">
              <motion.span 
                variants={itemVariants}
                className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide"
              >
                Hello, I am
              </motion.span>
              
              <motion.h1 
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]"
              >
                Alex Morgan
              </motion.h1>
              
              <motion.h2 
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-bold text-slate-500 dark:text-slate-400"
              >
                <span className="text-primary typing-effect">Frontend Developer</span> <br className="hidden sm:block"/> & UI Engineer
              </motion.h2>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I build pixel-perfect, accessible, and performant web experiences. Currently focused on human-centered products that scale.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button 
                size="lg"
                className="h-12 px-8 rounded-lg bg-primary hover:bg-blue-600 text-white text-base font-bold shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5"
              >
                View Projects
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="h-12 px-8 rounded-lg border border-border-light dark:border-border-dark hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-base font-bold transition-colors"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-6 pt-6 opacity-80"
            >
              {[
                { icon: Code, href: '#' },
                { icon: Mail, href: '#' },
                { icon: Rocket, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
                  href={social.href}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 w-full max-w-[600px] lg:max-w-none"
          >
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl bg-card-dark border border-border-dark group">
              {/* Decorative glow */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
              />
              <motion.div 
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
              />
              
              {/* Main Image */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVIu7aRYONcs0DDK9RIechHZ0QBiJdC-YqFC8U3HF7yF1jiMkss6xBoRBIEhmrjJkQJiZ03ahcP4Gj2BampfbvT0-aEwGmxMraT7rbRtco0UaOFlIiuNnbax2y0upQazT_Ya4j63fes-x78cxD8_HIlNOo9YNtryYHW2kN3ocNOI8Lzm9wDGzx47Mm0nyY18JHTQvUSFtbW6Avyfb5JWQwbjbZE6OwZebv0AWfhzzmbNpTucDmRsvyCfe9Np_ntyp6AQiyuUz2qF8')"
                }}
              />

              {/* Floating Card */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-72 p-4 rounded-xl bg-background-dark/90 backdrop-blur border border-border-dark shadow-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Project Deployed</p>
                    <p className="text-xs text-text-secondary-dark">Successfully pushed to production</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}