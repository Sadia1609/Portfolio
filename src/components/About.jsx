import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8 sm:space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="glass-card border-primary/20">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4 text-slate leading-relaxed text-sm sm:text-base">
                    <p>
                      Hello! I'm <span className="text-primary font-semibold">Sadia Rahman</span>, 
                      a passionate Frontend Developer who loves creating digital experiences that 
                      make a difference. My journey into programming started during my university 
                      years at <span className="text-primary font-semibold">United International University</span>.
                    </p>
                    
                    <p>
                      I enjoy building applications that are not only functional but also beautiful 
                      and accessible. I believe in writing clean, maintainable code and staying 
                      up-to-date with the latest technologies.
                    </p>

                    <p>
                      When I'm not coding, you can find me spending quality time with my pets, 
                      getting lost in a good book, or experimenting with new recipes in the kitchen. 
                      I also love exploring new technologies and working on personal projects.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education & Interests */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Education */}
              <Card className="glass-card border-primary/20 glow-on-hover">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Education
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-2 border-primary/30 pl-4">
                      <h4 className="text-primary font-semibold text-sm sm:text-base">
                        Bachelor of Science in Computer Science & Engineering
                      </h4>
                      <p className="text-slate-light text-sm">United International University</p>
                      <p className="text-slate text-xs sm:text-sm">2019 - 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card className="glass-card border-primary/20 glow-on-hover">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Interests & Hobbies
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {[
                      'Web Development',
                      'UI/UX Design',
                      'Reading Books',
                      'Cooking',
                      'Pet Care',
                      'Learning New Tech'
                    ].map((interest, index) => (
                      <motion.div
                        key={interest}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="flex items-center text-slate text-sm sm:text-base"
                      >
                        <span className="text-primary mr-2">▹</span>
                        {interest}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About