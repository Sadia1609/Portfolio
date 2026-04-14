import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      name: "PawMart",
      image: "paw.png",
      shortDescription:
        "A full-stack pet adoption & supply marketplace with CRUD operations and secure authentication",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Auth",
        "Tailwind CSS",
      ],
      liveLink: "https://pet-care-8ba14.web.app/",
      githubLink: "https://github.com/Sadia1609/paw-mart",
      fullDescription:
        "PawMart is a community-driven platform built for pet owners, breeders, and pet shops to list pets for adoption and sell pet-related products. Features include secure authentication, full CRUD operations, order management with PDF reports, dark/light mode toggle, and 100% responsive design.",
      challenges: [
        "Building full-stack application with React frontend and Node.js backend",
        "Implementing secure Firebase authentication with Google Sign-in",
        "Creating CRUD operations for pet listings and order management",
        "Generating PDF reports using jsPDF and AutoTable for order history",
      ],
      improvements: [
        "Add real-time chat between buyers and sellers",
        "Implement advanced search with location-based filtering",
        "Add payment gateway integration for secure transactions",
        "Create admin dashboard for platform management",
      ],
    },
    {
      id: 2,
      name: "SecureExam",
      projectType: "Team Project",
      teamSize: 5,
      myRole: "Frontend Developer & Admin Module Lead",
      image: "exam.png",
      shortDescription:
        "A complete full-stack online examination platform developed by a team of 4 developers.",
      technologies: [
        "Next.js",
        "React",
        "MongoDB",
        "NextAuth.js",
        "Tailwind CSS",
        "Chart.js",
        "Recharts",
        "Nodemailer",
        "JWT",
        "Cloudinary",
        "Stripe",
        "Framer Motion",
      ],
      liveLink: "https://online-secure-exam-one.vercel.app/",
      githubLink: "https://github.com/abir-11/online-secure-exam",
      fullDescription:
        "SecureExam is a comprehensive online examination platform developed collaboratively by a team of 4 developers. The platform features three distinct user roles (Admin, Instructor, Student) with role-based access control. As the Frontend Developer and Admin Module Lead, I built the complete Admin Dashboard, User Management System, Analytics Dashboard, and 4 Comprehensive Reports Modules. Other team members handled the Instructor Dashboard, Student Exam System, Security Features, Payment Integration, UI/UX Design, and GitHub management.",

      teamContributions: {
        myContributions: [
          "Built complete Admin Dashboard with real-time stats, revenue charts, and user analytics",
          "Developed User Management system with Active, Inactive, and Deleted users functionality",
          "Created 4 comprehensive reports: Student Performance, Exam Reports, Batch Analytics, and Course Progress",
          "Implemented secure JWT-based password reset with email notifications",
          "Designed responsive UI ensuring 100% mobile compatibility",
          "Led code reviews and maintained Git workflow for admin module",
        ],
        teamMember1: {
          name: "Team Member 1",
          role: "Instructor Module Developer",
          contributions: [
            "Developed Instructor Dashboard for batch management, exam creation, question bank, and publishing workflow",
            "Built Student Exam System with MCQ & theory exams and real-time result calculation",
            "Implemented gamified reward system and exam attempt tracking",
          ],
        },
        teamMember2: {
          name: "Team Member 2",
          role: "Security & Payment Developer",
          contributions: [
            "Added exam security features (copy-paste prevention & tab switching detection)",
            "Integrated Stripe payment gateway with transaction history tracking",
            "Implemented user profile lock after 3 failed login attempts",
          ],
        },
        teamMember3: {
          name: "Team Member 3",
          role: "UI/UX & GitHub Manager",
          contributions: [
            "Managed GitHub repository and version control workflow",
            "Designed overall UI/UX of the application",
            "Implemented contact page and user feedback system",
          ],
        },
      },

      challenges: [
        "Creating complete user management system with 3 states: Active, Inactive, and Deleted users with 30-day retention policy",
        "Developing 4 comprehensive reports modules with pagination and filtering",
        "Implementing secure JWT-based password reset system with 1-hour token expiration",
        "Coordinating with 3 team members on Git workflow and resolving merge conflicts",
        "Ensuring consistent UI/UX across all modules developed by different team members",
      ],

      improvements: [
        "Add AI-based proctoring with real-time tab switching blur detection",
        "Implement screen recording functionality to save exam sessions",
        "Add facial recognition and identity verification using WebRTC",
        "Implement live video streaming for real-time exam proctoring",
        "Add bulk user import/export via Excel/CSV files",
        "Implement certificate generation with QR code verification",
        "Add email notifications for exam schedules and result publications",
        "Develop mobile application (React Native) for better accessibility",
      ],
    },
    {
      id: 3,
      name: "HERO.IO",
      image: "apps.png",
      shortDescription:
        "A responsive app marketplace web application with dynamic app listing and installation features",
      technologies: [
        "React",
        "React Router",
        "Tailwind CSS",
        "JavaScript",
        "Recharts",
        "LocalStorage API",
      ],
      liveLink: "https://hero-apps-react-js.netlify.app/",
      githubLink: "https://github.com/Sadia1609/hero-apps",
      fullDescription:
        "Hero Apps is a responsive app marketplace web application where users can explore popular apps, view detailed ratings and reviews, install apps using localStorage, and manage their installed applications with a smooth user experience.",
      challenges: [
        "Implementing dynamic app listing with live search functionality",
        "Creating app installation & uninstall using localStorage",
        "Building responsive design for all devices with smooth user experience",
        "Integrating Recharts for review analytics and data visualization",
      ],
      improvements: [
        "Add user authentication and personalized recommendations",
        "Implement real-time app updates and notifications",
        "Add app categories and advanced filtering options",
        "Integrate payment system for premium apps",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative">
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
              Featured Projects
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-slate max-w-2xl mx-auto text-sm sm:text-base">
              Here are some of my projects that showcase my skills and passion
              for development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="glass-card border-primary/20 glow-on-hover h-full overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 sm:space-x-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.liveLink, "_blank")}
                        className="text-primary border-primary hover:bg-primary hover:text-navy text-xs sm:text-sm"
                      >
                        <FaExternalLinkAlt className="mr-1 sm:mr-2" size={12} />
                        Live
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          window.open(project.githubLink, "_blank")
                        }
                        className="text-primary border-primary hover:bg-primary hover:text-navy text-xs sm:text-sm"
                      >
                        <FaGithub className="mr-1 sm:mr-2" size={12} />
                        Code
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="p-3 sm:p-4 lg:p-6">
                    <CardTitle className="text-white group-hover:text-primary transition-colors text-base sm:text-lg">
                      {project.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-3 sm:space-y-4 p-3 sm:p-4 lg:p-6 pt-0">
                    <p className="text-slate text-xs sm:text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate/10 text-slate text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-3 sm:mt-4 text-xs sm:text-sm"
                      onClick={() => {
                        setSelectedProject(project);
                        // Ensure modal content starts at top with smooth animation
                        setTimeout(() => {
                          const scrollContainer = document.querySelector(
                            ".modal-content .overflow-y-auto",
                          );
                          if (scrollContainer) {
                            scrollContainer.scrollTo({
                              top: 0,
                              behavior: "smooth",
                            });
                          }
                        }, 200);
                      }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.4,
            }}
            className="glass-card border-primary/20 max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-y-auto max-h-[95vh] sm:max-h-[90vh] scroll-smooth">
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedProject.name}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-slate hover:text-primary transition-colors p-1"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>

                {/* Project Image */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-48 sm:h-64 object-cover rounded-lg"
                />

                {/* Technologies */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">
                    Project Description
                  </h4>
                  <p className="text-slate leading-relaxed text-sm sm:text-base">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* ✅ Team Contributions (শুধু SecureExam এর জন্য) */}
                {selectedProject.teamContributions && (
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-accent mb-2 sm:mb-3">
                      👥 Team Collaboration
                    </h4>

                    {/* My Contributions */}
                    <div className="mb-4">
                      <h5 className="text-sm sm:text-base font-semibold text-primary mb-2">
                        ✅ My Contributions
                      </h5>
                      <ul className="space-y-1 sm:space-y-2">
                        {selectedProject.teamContributions.myContributions.map(
                          (contribution, index) => (
                            <li
                              key={index}
                              className="text-slate flex items-start text-sm sm:text-base"
                            >
                              <span className="text-primary mr-2 mt-1">▹</span>
                              {contribution}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* Other Team Members */}
                    <div>
                      <h5 className="text-sm sm:text-base font-semibold text-secondary mb-2">
                        👨‍💻 Other Team Members
                      </h5>
                      <div className="space-y-3">
                        {Object.entries(selectedProject.teamContributions)
                          .filter(([key]) => key !== "myContributions")
                          .map(([member, data]) => (
                            <div
                              key={member}
                              className="bg-slate/5 rounded-lg p-3"
                            >
                              <p className="font-semibold text-white text-sm sm:text-base">
                                {data.name} -{" "}
                                <span className="text-primary">
                                  {data.role}
                                </span>
                              </p>
                              <ul className="mt-2 space-y-1">
                                {data.contributions.map((contribution, idx) => (
                                  <li
                                    key={idx}
                                    className="text-slate text-xs sm:text-sm flex items-start"
                                  >
                                    <span className="text-secondary mr-2">
                                      •
                                    </span>
                                    {contribution}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Challenges */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-accent mb-2 sm:mb-3">
                    Challenges Faced
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="text-slate flex items-start text-sm sm:text-base"
                      >
                        <span className="text-accent mr-2 mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Future Improvements */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-secondary mb-2 sm:mb-3">
                    Future Improvements
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {selectedProject.improvements.map((improvement, index) => (
                      <li
                        key={index}
                        className="text-slate flex items-start text-sm sm:text-base"
                      >
                        <span className="text-secondary mr-2 mt-1">•</span>
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <Button
                    onClick={() =>
                      window.open(selectedProject.liveLink, "_blank")
                    }
                    className="flex-1 text-sm sm:text-base"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    View Live Project
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(selectedProject.githubLink, "_blank")
                    }
                    className="flex-1 text-sm sm:text-base"
                  >
                    <FaGithub className="mr-2" />
                    View Source Code
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
