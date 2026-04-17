import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import ProfileImage from "./ProfileImage";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Handle resume download
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/Sadia Rahman-Frontend Developer.pdf";
    link.download = "Sadia Rahman-Frontend Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Sadia1609", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/sadiarahman1609/",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: "mailto:sadia.rahman160920@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
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
              I'm a passionate{" "}
              <span className="text-primary">Frontend Developer</span>{" "}
              specializing in building exceptional digital experiences.
              Currently focused on creating accessible, human-centered products.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="glow-on-hover group w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
                <motion.span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </motion.span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="glow-on-hover w-full sm:w-auto"
                onClick={handleDownloadResume}
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
            <ProfileImage />
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
  );
};

export default Hero;
