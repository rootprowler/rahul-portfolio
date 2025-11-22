import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Github, Shield, Lock, Eye, Terminal, Zap, Bug, Radar, Search, Globe } from 'lucide-react';

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Recon Automation Framework',
      description: 'Lightweight automated reconnaissance tool that performs subdomain discovery, port scanning, tech fingerprinting, and directory enumeration with structured output.',
      tech: ['Python', 'Bash', 'asyncio', 'Nmap', 'Requests'],
      icon: Radar,
      color: 'from-cyan-400 to-blue-500',
      features: ['Subdomain Enumeration', 'Port Scanning', 'Tech Detection', 'Screenshot Automation']
    },
    {
      title: 'OSINT Profile Scraper',
      description: 'Custom OSINT tool for username discovery, metadata extraction, and cross-platform identity correlation using automated scraping workflows.',
      tech: ['Python', 'Requests', 'BeautifulSoup', 'Regex'],
      icon: Search,
      color: 'from-purple-400 to-pink-500',
      features: ['Username Lookup', 'Metadata Extraction', 'Social Discovery', 'Email/Phone Patterns']
    },
    {
      title: 'Active Directory Attack Simulator',
      description: 'Local AD attack lab automating enumeration, Kerberoasting, AS-REP roasting, and SMB abuse for training and research.',
      tech: ['PowerShell', 'Python', 'Impacket'],
      icon: Shield,
      color: 'from-green-400 to-emerald-500',
      features: ['Kerberoasting', 'AS-REP Roast', 'SMB Enumeration', 'User/Group Discovery']
    },
    {
      title: 'Web Fuzzing Engine',
      description: 'High-performance HTTP fuzzing engine for reflection detection, hidden parameter discovery, and WAF behavior mapping.',
      tech: ['Python', 'Asyncio', 'Requests', 'AIOHTTP'],
      icon: Bug,
      color: 'from-orange-400 to-red-500',
      features: ['Parameter Fuzzing', 'Reflection Detection', 'Status Anomalies', 'WAF Trigger Mapping']
    },
    {
      title: 'Subdomain Takeover Scanner',
      description: 'Automated scanner that detects vulnerable CNAME records and potential subdomain takeover vectors across major cloud providers.',
      tech: ['Python', 'DNSPython', 'Requests'],
      icon: Globe,
      color: 'from-indigo-400 to-purple-500',
      features: ['CNAME Enumeration', 'Provider Identification', 'Takeover Detection', 'PoC Generator']
    },
    {
      title: 'JWT Security Toolkit',
      description: 'Comprehensive JWT analyzer that performs decoding, weak-key hunting, algorithm downgrade checks, and claim extraction.',
      tech: ['Python', 'JavaScript', 'PyJWT', 'Node.js'],
      icon: Lock,
      color: 'from-yellow-400 to-orange-500',
      features: ['JWT Decoder', 'Weak Key Detection', 'Alg Downgrade Check', 'Claim Extraction']
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Cutting-edge cybersecurity solutions that have protected organizations worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <motion.div
                  className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 h-full overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: '0 25px 50px rgba(0, 255, 255, 0.15)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    animate={hoveredProject === index ? {
                      background: [
                        `linear-gradient(135deg, ${project.color.split(' ')[1]} 0%, ${project.color.split(' ')[3]} 100%)`,
                        `linear-gradient(225deg, ${project.color.split(' ')[3]} 0%, ${project.color.split(' ')[1]} 100%)`,
                        `linear-gradient(135deg, ${project.color.split(' ')[1]} 0%, ${project.color.split(' ')[3]} 100%)`
                      ]
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Floating particles effect */}
                  {hoveredProject === index && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                          initial={{ 
                            x: Math.random() * 300,
                            y: Math.random() * 400,
                            opacity: 0 
                          }}
                          animate={{
                            y: [null, -20, -40],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </>
                  )}

                  <div className="relative z-10">
                    {/* Project Icon */}
                    <motion.div
                      className="mb-6"
                      animate={hoveredProject === index ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Project Title */}
                    <motion.h3 
                      className="text-2xl text-white mb-4"
                      animate={hoveredProject === index ? { scale: 1.05 } : { scale: 1 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Project Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <motion.div 
                      className="mb-6 space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === index ? 1 : 0.7 }}
                    >
                      {project.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center text-sm text-cyan-400"
                          initial={{ x: -10, opacity: 0 }}
                          animate={hoveredProject === index ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                          {feature}
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm border border-cyan-400/20"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ 
                            scale: 1.1,
                            boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={hoveredProject === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.button>
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>

                {/* 3D shadow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  animate={hoveredProject === index ? {
                    scale: [1, 1.05, 1],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg shadow-2xl relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 40px rgba(0, 255, 255, 0.5)' 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}