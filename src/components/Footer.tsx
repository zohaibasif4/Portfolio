import { Mail, Phone, MapPin, Code2, ArrowUp } from 'lucide-react';
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 glass-panel bg-space-900/80">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div
              className="flex items-center gap-2 group cursor-pointer"
              onClick={scrollToTop}>
              
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric via-purple to-magenta p-[1px]">
                <div className="w-full h-full bg-space-900 rounded-lg flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="font-syne font-bold text-xl tracking-wide">
                ZOHAIB
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Transforming complex designs into pixel-perfect, high-performance
              web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-syne font-bold text-lg text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Skills', 'Projects', 'Experience'].map((link) =>
              <li key={link}>
                  <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-electric transition-colors text-sm flex items-center gap-2">
                  
                    <span className="w-1 h-1 rounded-full bg-purple"></span>
                    {link}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-syne font-bold text-lg text-white">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:zohaibasif.zohaib@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                  
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electric/20 group-hover:text-electric transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  zohaibasif.zohaib@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923219686501"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                  
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple/20 group-hover:text-purple transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  +92 321-9686501
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-magenta/20 group-hover:text-magenta transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                Ali Park, Cantt, Lahore
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Muhammad Zohaib Asif. All rights
            reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 hover:text-electric transition-all duration-300 group">
            
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>);

}