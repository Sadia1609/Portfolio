import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  FaReact, 
  FaJs, 
  FaNodeJs
} from 'react-icons/fa'
import { 
  SiMongodb,
  SiFirebase
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: "Technologies I Work With",
      color: "primary",
      skills: [
        { name: "JavaScript", icon: FaJs },
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Firebase", icon: SiFirebase }
      ]
    }
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  const getColorClass = (color) => {
    switch (color) {
      case 'primary': return 'text-primary border-primary/20'
      case 'accent': return 'text-accent border-accent/20'
      case 'secondary': return 'text-secondary border-secondary/20'
      default: return 'text-primary border-primary/20'
    }
  }

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative">
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
              Skills & Technologies
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-slate max-w-2xl mx-auto text-sm sm:text-base">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="flex justify-center">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="w-full max-w-2xl"
              >
                <Card className={`glass-card ${getColorClass(category.color)} glow-on-hover`}>
                  <CardHeader>
                    <CardTitle className={`text-lg sm:text-xl font-bold ${getColorClass(category.color)} flex items-center justify-center`}>
                      <span className={`w-3 h-3 bg-${category.color} rounded-full mr-3`}></span>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          variants={skillVariants}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          whileHover={{ scale: 1.1, y: -5 }}
                          className="flex flex-col items-center space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-lg bg-navy-light/50 hover:bg-navy-light transition-colors group cursor-pointer"
                        >
                          <skill.icon className={`text-2xl sm:text-3xl lg:text-4xl ${getColorClass(category.color)} group-hover:scale-110 transition-transform`} />
                          <span className="text-white font-medium text-xs sm:text-sm text-center">{skill.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Currently Learning */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="glass-card border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
                  Currently Exploring
                </h3>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
                  {[
                    'Next.js',
                    'Express.js',
                    'TypeScript',
                    
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 + 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 sm:px-4 py-1 sm:py-2 bg-navy-light border border-primary/30 rounded-full text-primary font-medium text-xs sm:text-sm hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills