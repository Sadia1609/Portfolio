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
    <section id="about" className="py-20 relative">
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
              <span className="text-primary font-mono text-lg mr-2">01.</span>
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="glass-card border-primary/20">
                <CardContent className="p-6">
                  <div className="space-y-4 text-slate leading-relaxed">
                    <p>
                      Hello! I'm <span className="text-primary font-semibold">Sadia Rahman</span>, 
                      a passionate Frontend Developer who loves creating digital experiences that 
                      make a difference. My journey into programming started during my university 
                      years, and I've been fascinated by the endless possibilities of web development ever since.
                    </p>
                    
                    <p>
                      I graduated with a degree in <span className="text-primary">Computer Science and Engineering</span> from 
                      <span className="text-primary font-semibold"> United International University</span>. 
                      Throughout my academic journey, I discovered my passion for frontend development 
                      and user experience design.
                    </p>

                    <p>
                      I enjoy building applications that are not only functional but also beautiful 
                      and accessible. I believe in writing clean, maintainable code and staying 
                      up-to-date with the latest technologies and best practices.
                    </p>

                    <p>
                      When I'm not coding, you can find me exploring new technologies, reading tech blogs, 
                      or working on personal projects. I also enjoy photography and love capturing 
                      beautiful moments in nature.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education & Interests */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Education */}
              <Card className="glass-card border-primary/20 glow-on-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Education
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-2 border-primary/30 pl-4">
                      <h4 className="text-primary font-semibold">
                        Bachelor of Science in Computer Science & Engineering
                      </h4>
                      <p className="text-slate-light">United International University</p>
                      <p className="text-slate text-sm">2020 - 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card className="glass-card border-primary/20 glow-on-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Interests & Hobbies
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Web Development',
                      'UI/UX Design',
                      'Photography',
                      'Reading',
                      'Problem Solving',
                      'Learning New Tech'
                    ].map((interest, index) => (
                      <motion.div
                        key={interest}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="flex items-center text-slate"
                      >
                        <span className="text-primary mr-2">▹</span>
                        {interest}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Fun Fact */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card border-accent/20 p-6 rounded-lg"
              >
                <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                  <span className="text-accent mr-2">💡</span>
                  Fun Fact
                </h3>
                <p className="text-slate">
                  I love the problem-solving aspect of programming - there's nothing quite like 
                  the satisfaction of debugging a complex issue or optimizing code for better performance!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About