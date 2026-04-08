import { motion } from 'framer-motion'
import { Code, Database, Layout, Wrench, Sparkles } from 'lucide-react'
// Unique SVG patterns for each category
function CircuitPattern() {
  return (
    <svg
      className="absolute top-0 right-0 w-full h-full opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="circuit"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="20" cy="20" r="1.5" fill="currentColor" />
          <path
            d="M20 0v20M0 20h20M20 20v20M20 20h20"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
          <circle cx="0" cy="0" r="1" fill="currentColor" />
          <circle cx="40" cy="0" r="1" fill="currentColor" />
          <circle cx="0" cy="40" r="1" fill="currentColor" />
          <circle cx="40" cy="40" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#circuit)"
        className="text-electric"
      />
    </svg>
  )
}
function HexPattern() {
  return (
    <svg
      className="absolute top-0 right-0 w-full h-full opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="hex"
          x="0"
          y="0"
          width="56"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M14 0l14 8v16l-14 8L0 24V8zM42 24l14 8v16l-14 8-14-8V32z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#hex)"
        className="text-purple"
      />
    </svg>
  )
}
function WavePattern() {
  return (
    <svg
      className="absolute top-0 right-0 w-full h-full opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="waves"
          x="0"
          y="0"
          width="80"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 10c20-10 20 10 40 0s20-10 40 0"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#waves)"
        className="text-magenta"
      />
    </svg>
  )
}
function CrosshatchPattern() {
  return (
    <svg
      className="absolute top-0 right-0 w-full h-full opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="crosshatch"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 0l20 20M20 0L0 20"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#crosshatch)"
        className="text-electric"
      />
    </svg>
  )
}
const patterns = [CircuitPattern, HexPattern, WavePattern, CrosshatchPattern]
export function SkillsSection() {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6 text-electric" />,
      skills: [
        'React.js',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Hooks',
        'Context API',
      ],
    },
    {
      title: 'State & API',
      icon: <Database className="w-6 h-6 text-purple" />,
      skills: [
        'Redux',
        'Axios',
        'REST APIs',
        'CRUD Operations',
        'AI API Integration',
      ],
    },
    {
      title: 'UI/UX & Styling',
      icon: <Layout className="w-6 h-6 text-magenta" />,
      skills: [
        'Tailwind CSS',
        'Bootstrap',
        'SCSS',
        'Framer Motion',
        'Responsive Design',
      ],
    },
    {
      title: 'Tools & Others',
      icon: <Wrench className="w-6 h-6 text-electric" />,
      skills: [
        'Git/GitHub',
        'Figma to Code',
        'WordPress (Elementor)',
        'SwiftUI (Basics)',
      ],
    },
  ]
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-100px',
          }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-electric to-purple md:mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => {
            const PatternComponent = patterns[idx]
            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-50px',
                }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                }}
                className="glass-panel rounded-2xl p-6 hover:bg-white/[0.05] transition-colors duration-300 group relative overflow-hidden"
              >
                {/* SVG Background Pattern */}
                <PatternComponent />

                {/* Subtle background glow on hover */}
                <div className="absolute -inset-20 bg-gradient-to-r from-electric/20 to-purple/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 z-0"></div>

                {/* Corner accent shape */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-electric/5 to-purple/5 group-hover:from-electric/10 group-hover:to-purple/10 transition-colors duration-500 blur-xl z-0" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-syne font-semibold mb-4 text-white group-hover:text-electric transition-colors">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        <Sparkles className="w-3 h-3 text-purple opacity-50" />
                        <span className="text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
