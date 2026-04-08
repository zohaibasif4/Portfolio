import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink} from 'lucide-react';
const projects = [
{
  title: 'Befer Dashboard',
  link: 'app.befer.co',
  description:
  'AI-Powered CRM for Field Services. All-in-one platform for blue-collar businesses featuring live booking calendar, route optimization, AI calling agents, automated SMS, and Stripe/QuickBooks integration.',
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  tags: ['React', 'AI Integration', 'Stripe API', 'Tailwind CSS']
},
{
  title: 'Befer MarketPlace',
  link: 'app.befer.co/marketplace/',
  description:
  'Integrated Solutions Hub for field service businesses to access advanced tools, snapshots, and third-party services with seamless CRM integration.',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  tags: ['React', 'Marketplace', 'REST APIs', 'Context API']
},
{
  title: 'Minimis Ecosystem',
  link: 'minimis.life',
  description:
  'Connected ecosystem for Phone-Free Wearables with built-in OLED displays. Features a web dashboard managing health data and device settings synced with Custom Android OS.',
  image:
  'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
  tags: ['React', 'IoT Integration', 'Dashboard', 'Framer Motion']
},
{
  title: 'NAA World',
  link: 'naaworld.com',
  description:
  'Social impact platform focused on helping migrants, single mothers, and the homeless through creative healing, skill building, and social inclusion programs.',
  image:
  'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
  tags: ['React', 'Responsive Design', 'UI/UX', 'Tailwind']
},
{
  title: 'Daira Engineering',
  link: 'dairaengineering.com',
  description:
  'Corporate website for a multidisciplinary technology company specializing in OEM/ODM services, IoT, robotics, and AI-driven intelligent systems.',
  image:
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  tags: ['React', 'Corporate Site', 'Animations', 'Optimization']
}];

function ProjectCard({ project, index }: {project: any;index: number;}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1
      }}
      className="perspective-1000">
      
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        className="glass-panel rounded-2xl overflow-hidden h-full flex flex-col group border border-white/10 hover:border-electric/50 transition-colors duration-300">
        
        <div className="relative h-48 md:h-60 overflow-hidden">
          
          <div className="absolute inset-0 bg-space-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
          
          <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <a
              href={`https://${project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-electric hover:text-space-900 transition-colors">
              
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-grow flex-col p-6 subpixel-antialiased">
          
          <h3 className="text-2xl font-syne font-bold mb-2 group-hover:text-electric transition-colors">
            {project.title}
          </h3>
          <a
            href={`https://${project.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-electric mb-4 hover:underline inline-block">
            
            {project.link}
          </a>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag: string) =>
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
              
                {tag}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>);

}
export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className="mb-16 md:text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple to-magenta md:mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) =>
          <ProjectCard key={project.title} project={project} index={idx} />
          )}
        </div>
      </div>
    </section>);

}