import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "sadia.rahman160920@gmail.com",
      href: "mailto:sadia.rahman160920@gmail.com",
      color: "text-primary"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+880 1700890040",
      href: "tel:+8801234567890",
      color: "text-accent"
    },
   
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/Sadia1609",
      color: "text-slate hover:text-white"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sadiarahman1609/",
      color: "text-slate hover:text-blue-400"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      href: "mailto:sadia.rahman160920@gmail.com",
      color: "text-slate hover:text-primary"
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Initialize EmailJS (you'll need to set up your EmailJS account)
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'sadia.rahman160920@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <section id="contact" className="py-20 relative">
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-slate max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="glass-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((contact) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-navy-light/50 hover:bg-navy-light transition-colors group"
                    >
                      <div className={`p-3 rounded-full bg-navy-lighter ${contact.color}`}>
                        <contact.icon size={20} />
                      </div>
                      <div>
                        <p className="text-white font-medium">{contact.label}</p>
                        <p className="text-slate text-sm group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                    Connect With Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-4 rounded-full bg-navy-light hover:bg-navy-lighter transition-colors ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                    Send Me a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-secondary text-sm font-medium mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-navy-light border border-primary/20 rounded-lg text-white placeholder-slate focus:outline-none focus:border-primary transition-colors"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-secondary text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-navy-light border border-primary/20 rounded-lg text-white placeholder-slate focus:outline-none focus:border-primary transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-secondary text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-navy-light border border-primary/20 rounded-lg text-white placeholder-slate focus:outline-none focus:border-primary transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-secondary text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-navy-light border border-primary/20 rounded-lg text-white placeholder-slate focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>

                    {submitStatus && (
                      <div className={`p-4 rounded-lg ${
                        submitStatus === 'success' 
                          ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                          : 'bg-red-500/10 border border-red-500/20 text-red-400'
                      }`}>
                        {submitStatus === 'success' 
                          ? 'Message sent successfully! I\'ll get back to you soon.' 
                          : 'Failed to send message. Please try again or contact me directly.'}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full glow-on-hover group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-navy mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact