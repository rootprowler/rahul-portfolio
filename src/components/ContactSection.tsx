import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Shield, Linkedin, Github, Twitter } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rahul.onsec@gmail.com',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Github,
      label: 'Github',
      value: 'https://github.com/rootprowler',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Linkedin,
      label: 'Linkedin',
      value: 'https://www.linkedin.com/in/packetrahul/',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, color: 'hover:text-blue-400', href: '#' },
    { icon: Github, color: 'hover:text-gray-400', href: '#' },
    { icon: Twitter, color: 'hover:text-sky-400', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Ready to secure your digital infrastructure? Let's discuss your cybersecurity needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl text-white mb-8">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you need a security audit, penetration testing, or custom security solutions, 
                I'm here to help protect your organization from cyber threats.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-6 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mr-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <motion.p 
                        className="text-white text-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        {info.value}
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <h4 className="text-white text-xl mb-6">Follow Me</h4>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-slate-800/50 border border-cyan-400/20 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                        rotate: 5
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 relative overflow-hidden"
              whileHover={{ boxShadow: '0 20px 40px rgba(0, 255, 255, 0.1)' }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: [
                    'linear-gradient(0deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
                    'linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
                    'linear-gradient(180deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
                    'linear-gradient(270deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl text-white mb-8 flex items-center">
                  <Shield className="w-6 h-6 text-cyan-400 mr-2" />
                  Secure Contact Form
                </h3>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Your Name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="your@example.com"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Security Consultation Request"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your security needs..."
                      required
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg shadow-2xl relative overflow-hidden group disabled:opacity-50"
                    whileHover={{ scale: isSubmitting || submitted ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting || submitted ? 1 : 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : submitted ? (
                        'Message Sent!'
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Secure Message
                        </>
                      )}
                    </span>

                    {!isSubmitting && !submitted && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl"
        >
          <h3 className="text-2xl text-white mb-4">Ready to Secure Your Future?</h3>
          <p className="text-gray-300 mb-6">
            Don't wait for a security breach. Let's implement robust cybersecurity measures today.
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}