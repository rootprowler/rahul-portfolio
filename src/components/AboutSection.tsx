import { motion } from 'motion/react';
import { Shield, Brain, Target, Code2 } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { number: '50+', label: 'Security Audits', icon: Shield },
    { number: '2+', label: 'Years Experience', icon: Brain },
    { number: '99.9%', label: 'Threat Detection', icon: Target },
    { number: '50+', label: 'Tools Mastered', icon: Code2 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 mx-auto relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"></div>
                <div className="absolute inset-4 border-2 border-purple-500/30 rounded-full"></div>
                <div className="absolute inset-8 border-2 border-blue-500/30 rounded-full"></div>
              </motion.div>
              
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-60 h-60 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-24 h-24 text-cyan-400" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl text-white mb-6">Cybersecurity Professional</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              With years of hands-on experience in cybersecurity, I focus on offensive security, deep threat analysis,
              and designing secure infrastructures. My goal is to help organizations stay resilient against
              constantly evolving cyber risks with strategic and modern defense methodologies.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I’ve strengthened security for enterprises, tech firms, and emerging businesses. My skill set covers
              red teaming, vulnerability assessment, cloud defense, and incident handling.
            </p>
            
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {['CompTIA Security+', 'CEH', 'CompTIA Pentest+', 'EC-Council C|SA'].map((cert, index) => (
                <motion.div
                  key={cert}
                  variants={itemVariants}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-cyan-400"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}
                >
                  {cert}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="relative mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400 transition-colors">
                    <Icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-transparent"
                    whileHover={{
                      border: '2px solid rgb(34, 211, 238)',
                      boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                    }}
                  />
                </motion.div>

                <motion.h3
                  className="text-3xl text-white mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}