import { motion } from 'framer-motion'
import {
  CalendarDays,
  ChevronRight,
  Zap,
  Building2,
} from 'lucide-react'

/** Decorative SVG background — unique pattern ids per card to avoid duplicate defs */
function DotGridPattern({ patternId }: { patternId: number }) {
  const gridId = `exp-dotgrid-${patternId}`
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={gridId}
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" fill="currentColor" />
          <circle cx="14" cy="14" r="0.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${gridId})`}
        className="text-electric"
      />
    </svg>
  )
}

function TopoPattern({ patternId }: { patternId: number }) {
  const topoId = `exp-topo-${patternId}`
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={topoId}
          x="0"
          y="0"
          width="100"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 30c25-15 25 15 50 0s25-15 50 0"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M0 45c25-15 25 15 50 0s25-15 50 0"
            stroke="currentColor"
            strokeWidth="0.3"
            fill="none"
          />
          <path
            d="M0 15c25-15 25 15 50 0s25-15 50 0"
            stroke="currentColor"
            strokeWidth="0.3"
            fill="none"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${topoId})`}
        className="text-purple"
      />
    </svg>
  )
}

const expPatterns = [DotGridPattern, TopoPattern]

const experiences = [
  {
    role: 'Frontend Developer (React JS)',
    company: 'HATZS Dimension',
    period: {
      from: 'Oct 2025',
      to: 'April 2026',
    },
    // current: false,
    points: [
      'Engineered complex Admin Panels and Marketplace systems with dynamic data handling.',
      'Implemented sophisticated filtering (status, date range, conditions) for large-scale data sets.',
      'Integrated AI APIs for automation and prompt-based dynamic responses within web apps.',
      'Built scalable tracking systems with real-time UI updates and dynamic service/addon logic.',
      'Optimized React components to minimize re-renders and improve frontend speed.',
    ],
  },
  {
    role: 'React JS Developer',
    company: 'DAIRA Engineering Pvt Ltd',
    period: {
      from: 'Aug 2023',
      to: 'Jul 2025',
    },
    current: false,
    points: [
      'Converted high-fidelity Figma designs into responsive interfaces with 100% design accuracy.',
      'Built a library of highly optimized, reusable components to speed up development.',
      'Integrated REST APIs using Axios with robust error handling and loading states.',
      'Managed WordPress client sites and contributed to iOS frontend design using SwiftUI.',
    ],
  },
]
function ExperienceCard({
  exp,
  idx,
}: {
  exp: (typeof experiences)[0]
  idx: number
}) {
  const PatternComponent = expPatterns[idx % expPatterns.length]
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-80px',
      }}
      transition={{
        duration: 0.6,
        delay: idx * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative group"
    >
      {/* Outer glow on hover */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-electric/0 via-purple/0 to-magenta/0 group-hover:from-electric/40 group-hover:via-purple/40 group-hover:to-magenta/40 blur-sm transition-all duration-500 opacity-0 group-hover:opacity-100" />

      {/* Card with gradient border */}
      <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-[1px] overflow-hidden">
        <div className="relative overflow-hidden rounded-3xl bg-space-900/80 backdrop-blur-xl">
          <PatternComponent patternId={idx} />

          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-electric via-purple to-magenta transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

          <div className="relative z-10 p-6 sm:p-8">
            {/* Header area */}
            <div className="flex flex-col gap-4 mb-6">
              {/* Date + Status row */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <CalendarDays className="w-3.5 h-3.5 text-purple" />
                  <span>{exp.period.from}</span>
                  <ChevronRight className="w-3 h-3 text-gray-600" />
                  <span>{exp.period.to}</span>
                </div>
                {exp.current && (
                  <div className="flex items-center gap-1.5 text-xs font-medium text-electric bg-electric/10 px-3 py-1.5 rounded-lg border border-electric/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                    Current Role
                  </div>
                )}
              </div>

              {/* Role */}
              <h3 className="text-xl sm:text-2xl font-syne font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-electric group-hover:to-purple transition-all duration-300">
                {exp.role}
              </h3>

              {/* Company */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-4 h-4 text-purple" />
                </div>
                <span className="text-base text-gray-300 font-medium">
                  {exp.company}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

            {/* Bullet points with staggered animation */}
            <ul className="space-y-4">
              {exp.points.map((point, pIdx) => (
                <motion.li
                  key={pIdx}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + pIdx * 0.08,
                  }}
                  className="flex items-start gap-3 group/item"
                >
                  <div className="mt-1 w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-electric/10 group-hover/item:border-electric/30 transition-colors duration-300">
                    <Zap className="w-3 h-3 text-magenta group-hover/item:text-electric transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors duration-300">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
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
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-magenta to-electric md:mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing vertical line — hidden on mobile, visible md+ */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-[2px]">
            <div className="absolute inset-0 bg-gradient-to-b from-electric via-purple to-magenta opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-electric via-purple to-magenta opacity-20 blur-[3px]" />
          </div>

          <div className="flex flex-col gap-10 md:pl-16">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline node — aligns with date row (card padding + header), not card top edge */}
                <div className="hidden md:flex absolute -left-16 top-[3.25rem] w-12 h-10 items-center justify-center z-10">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-electric bg-space-900 shadow-[0_0_12px_rgba(0,212,255,0.5)]">
                    <span
                      className="timeline-dot-core h-2 w-2 shrink-0 rounded-full"
                      aria-hidden
                    />
                  </div>
                </div>

                {/* Horizontal connector — vertical center matches dot (3.25rem + half of w-10) */}
                <div className="hidden md:block absolute -left-6 top-[calc(4.5rem-1px)] w-6 h-[2px] bg-gradient-to-r from-electric/50 to-transparent" />

                <ExperienceCard exp={exp} idx={idx} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
