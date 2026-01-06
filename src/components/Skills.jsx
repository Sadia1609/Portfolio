import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub,
  FaFigma,
  FaNpm
} from 'react-icons/fa'
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiNextdotjs, 
  SiVite,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiPostman,
  SiVisualstudiocode
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: "Frontend",
      color: "primary",
      skills: [
        { name: "React", icon: FaReact, level: 90 },
        { name: "JavaScript", icon: FaJs, level: 85 },
        { name: "TypeScript", icon: SiTypescript, level: 80 },
        { name: "HTML5", icon: FaHtml5, level: 95 },
        { name: "CSS3", icon: FaCss3Alt, level: 90 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
        { name: "Next.js", icon: SiNextdotjs, level: 75 },
        { name: "Redux", icon: SiRedux, level: 70 }
      ]
    },
    {
      title: "Backend",
      color: "accent",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: 75 },
        { name: "Express.js", icon: SiExpress, level: 70 },
        { name: "MongoDB", icon: SiMongodb, level: 65 }
      ]
    },
    {
      title: "Tools & Others",
      color: "secondary",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 85 },
        { name: "GitHub", icon: FaGithub, level: 90 },
        { name: "VS Code", icon: SiVisualstudiocode, level: 95 },
        { name: "Vite", icon: SiVite, level: 80 },
        { name: "Figma", icon: FaFigma, level: 75 },
        { name: "Postman", icon: SiPostman, level: 70 },
        { name: "NPM", icon: FaNpm, level: 85 }
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
    <section id="skills" className="py-20 relative">
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
              <span className="text-primary font-mono text-lg mr-2">02.</span>
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-slate max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-6"
              >
                <Card className={`glass-card ${getColorClass(category.color)} glow-on-hover`}>
                  <CardHeader>
                    <CardTitle className={`text-xl font-bold ${getColorClass(category.color)} flex items-center`}>
                      <span className={`w-3 h-3 bg-${category.color} rounded-full mr-3`}></span>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <skill.icon className={`text-xl ${getColorClass(category.color)}`} />
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-slate text-sm">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-navy-lighter rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              ease: "easeOut"
                            }}
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              category.color === 'primary' ? 'from-primary to-primary/70' :
                              category.color === 'accent' ? 'from-accent to-accent/70' :
                              'from-secondary to-secondary/70'
                            }`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="glass-card border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Currently Learning & Exploring
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    'Three.js',
                    'GraphQL',
                    'Docker',
                    'AWS',
                    'React Native',
                    'Python',
                    'Machine Learning'
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 + 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-navy-light border border-primary/30 rounded-full text-primary font-medium text-sm hover:bg-primary/10 transition-colors cursor-default"
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