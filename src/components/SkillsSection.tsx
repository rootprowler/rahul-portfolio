import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Terminal, 
  Cloud, 
  Smartphone, 
  Network, 
  Bug,
  Database,
  Cpu,
  Wifi,
  Server
} from 'lucide-react';

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: 'Penetration Testing',
      icon: Bug,
      skills: [
        { name: 'Network Penetration Testing', level: 95 },
        { name: 'Web Application Testing', level: 92 },
        { name: 'Mobile Application Testing', level: 88 },
        { name: 'Social Engineering', level: 90 },
      ]
    },
    {
      category: 'Security Tools',
      icon: Terminal,
      skills: [
        { name: 'Metasploit', level: 96 },
        { name: 'Burp Suite', level: 94 },
        { name: 'Nmap', level: 98 },
        { name: 'Wireshark', level: 92 },
      ]
    },
    {
      category: 'Infrastructure Security',
      icon: Server,
      skills: [
        { name: 'Network Security', level: 94 },
        { name: 'Firewall Configuration', level: 91 },
        { name: 'IDS/IPS Management', level: 89 },
        { name: 'VPN Implementation', level: 93 },
      ]
    },
    {
      category: 'Cloud Security', 
      icon: Cloud,
      skills: [
        { name: 'AWS Security', level: 90 },
        { name: 'Azure Security', level: 87 },
        { name: 'Container Security', level: 85 },
        { name: 'DevSecOps', level: 88 },
      ]
    }
  ];

  const techIcons = [
    Shield, Lock, Eye, Terminal, Cloud, Smartphone, 
    Network, Bug, Database, Cpu, Wifi, Server
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* Floating Tech Icons */}
      {techIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400/10 pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            delay: index * 1.5,
          }}
          style={{
            left: `${5 + (index * 8) % 90}%`,
            top: `${10 + (index * 12) % 80}%`,
          }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      ))}

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(0, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-center mb-8">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full flex items-center justify-center mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                  <h3 className="text-2xl text-white">{category.category}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <motion.span 
                          className="text-cyan-400"
                          animate={{ 
                            scale: hoveredSkill === skill.name ? 1.1 : 1,
                            color: hoveredSkill === skill.name ? '#00ffff' : '#22d3ee'
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                        
                        {/* Glowing effect */}
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-white/30 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            ease: "easeOut"
                          }}
                          animate={{
                            opacity: hoveredSkill === skill.name ? [0.3, 0.6, 0.3] : 0.3,
                          }}
                        />

                        {/* Animated particles */}
                        {hoveredSkill === skill.name && (
                          <motion.div
                            className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                            animate={{ 
                              x: [0, `${skill.level * 3}px`, 0],
                              opacity: [1, 0.5, 1]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl text-white mb-12">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'CompTIA Security+', 'CEH', 'CompTIA Pentest+', 'EC-Council C|SA'
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)',
                  rotate: [0, -5, 5, 0]
                }}
                className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 cursor-pointer"
              >
                <span className="text-sm font-semibold">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}