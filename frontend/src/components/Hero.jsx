import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Github, Linkedin, Twitter, Mail, ExternalLink, ArrowRight } from 'lucide-react';

export default function EnhancedPortfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

function Navbar({ isScrolled, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-500 transform rotate-45 rounded-sm"></div>
              <div className="absolute inset-2 bg-gray-950 transform rotate-45 rounded-sm flex items-center justify-center">
                <span className="text-violet-400 font-bold text-xs sm:text-sm">D</span>
              </div>
            </div>
            <span className="font-bold tracking-tight text-base sm:text-lg bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Devendra</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#about" className="text-sm font-medium hover:text-violet-400 transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium hover:text-violet-400 transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium hover:text-violet-400 transition-colors">Projects</a>
            <a href="#contact" className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center">
              Contact
              <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-1 rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-md flex flex-col justify-center transition-all ease-in-out duration-300">
          <button 
            className="absolute top-4 right-4 text-white p-1 rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>

          <div className="flex flex-col space-y-6 items-center px-6 py-8 text-center">
            <a href="#about" className="text-lg font-medium hover:text-violet-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#skills" className="text-lg font-medium hover:text-violet-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#projects" className="text-lg font-medium hover:text-violet-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-6 py-3 rounded-full text-lg font-medium transition-all flex items-center mt-4" onClick={() => setMobileMenuOpen(false)}>
              Contact
              <ChevronRight className="ml-1 w-5 h-5" />
            </a>
            
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <div className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-1/4 w-3/4 h-3/4 bg-gradient-to-b from-violet-500/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Mobile-First Hero Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
              <div className="w-2 h-2 rounded-full bg-violet-400 mr-2"></div>
              <span className="text-xs font-medium text-gray-300">Available for freelance work</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              I'm <span className="text-transparent bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text">Devendra Dilliwar</span>
            </h1>
            
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-900 px-6 py-2 rounded-lg">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">Full Stack Developer</h2>
              </div>
            </div>
            
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              I create exceptional digital experiences that blend elegant design with powerful functionality. Specializing in modern, responsive applications.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a href="#projects" className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#contact" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 px-6 py-3 rounded-full font-medium transition-all">
                Get In Touch
              </a>
            </div>
            
            <div className="flex gap-6 justify-center lg:justify-start pt-4">
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Image and Stats - Mobile-optimized */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Main Image with Card-like Design */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10"></div>
                <img 
                  src="/api/placeholder/500/650"
                  alt="Ferdous Ahmed" 
                  className="w-full object-cover aspect-[3/4]"
                />
                
                {/* Bottom Stats Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md p-4 z-20">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-sm">My Expertise</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded-full text-xs">Frontend</span>
                        <span className="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-full text-xs">Backend</span>
                        <span className="bg-gray-700/50 text-gray-300 px-2 py-0.5 rounded-full text-xs">UI/UX</span>
                      </div>
                    </div>
                    <div className="bg-violet-500/20 rounded-full p-1.5">
                      <ExternalLink size={18} className="text-violet-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Elements - Hidden on Small Mobile, Visible on Larger Screens */}
              <div className="absolute -left-4 top-1/4 hidden sm:block">
                <div className="bg-gray-900/80 backdrop-blur-md p-3 rounded-xl border border-gray-700/50 shadow-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                    <h4 className="font-medium text-xs">Client Rating</h4>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-xl font-bold text-white">5.0</span>
                    <div className="flex text-violet-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 top-2/3 hidden sm:block">
                <div className="bg-gray-900/80 backdrop-blur-md p-3 rounded-xl border border-gray-700/50 shadow-xl w-48">
                  <h4 className="font-medium text-xs mb-2">Technical Skills</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Frontend</span>
                        <span>93%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-400 to-indigo-500 rounded-full" style={{width: '93%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Backend</span>
                        <span>88%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-400 to-indigo-500 rounded-full" style={{width: '88%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const skills = [
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "React", level: 93, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "UI/UX Design", level: 85, category: "Design" },
    { name: "DevOps", level: 80, category: "Infrastructure" },
  ];

  return (
    <div id="skills" className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-violet-500/10 px-3 py-1 rounded-full mb-4">
            <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">My Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Technical Skills</h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">Continuously expanding my skillset to deliver outstanding results across the entire development stack.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-5 hover:border-violet-500/30 transition-all group">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="font-medium text-lg">{skill.name}</h3>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-0.5 rounded-full">{skill.category}</span>
                </div>
                <span className="text-lg font-bold text-transparent bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-violet-400 to-indigo-500 rounded-full transition-all duration-700 ease-out transform origin-left group-hover:scale-x-105"
                  style={{width: `${skill.level}%`}}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online store with React, Node.js and MongoDB",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio site with modern UI/UX principles",
      tags: ["React", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Task Management App",
      description: "Collaborative project management system with real-time updates",
      tags: ["TypeScript", "Firebase", "Redux"]
    }
  ];

  return (
    <div id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-violet-500/10 px-3 py-1 rounded-full mb-4">
            <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">Featured Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Recent Projects</h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">Showcasing my latest work and the technologies I've been working with.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden group hover:border-violet-500/30 transition-all">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 group-hover:opacity-75 transition-opacity"></div>
                <img 
                  src={`/api/placeholder/${300 + index}/${200 + index}`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 group-hover:text-violet-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <a href="#" className="mt-4 inline-flex items-center text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors">
                  View Project
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition-all">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}