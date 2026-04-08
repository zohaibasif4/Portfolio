import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { ThreeScene } from './ThreeScene';
export function HeroSection() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* 3D Background on Mobile, Right side on Desktop */}
      <div className="absolute inset-0 md:left-1/2 md:w-1/2 z-0 opacity-40 md:opacity-100">
        <ThreeScene />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start">
          
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-electric/30 mb-6">
            
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
            <span className="text-xs font-medium text-electric uppercase tracking-wider">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold font-syne leading-tight mb-4">
            
            Hi, I'm <br />
            <span className="text-gradient">Zohaib Asif</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-medium text-gray-300 mb-6 font-syne">
            
            React JS Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
            
            Result-oriented Frontend Developer specializing in building scalable
            SaaS Dashboards, Order Management Systems, and integrating AI APIs
            for smart features. I transform complex Figma designs into
            pixel-perfect, high-performance web applications.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-electric via-purple to-magenta text-white font-medium hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300 flex items-center gap-2 group">
              
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
              
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        
        <span className="text-xs text-gray-500 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-electric to-transparent"></div>
      </motion.div>
    </section>);

}