import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  TrendingUp, Shield, Zap, Globe, Users, BarChart3, 
  Brain, Sparkles, ChevronDown, Github, ExternalLink,
  CheckCircle2, Star, Code, Rocket, Award
} from 'lucide-react';

// CSS 3D Background Component
const Background3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-panel to-dark"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

// Hero Section with Animations
const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <motion.section 
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Background3D />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6"
          >
            <Sparkles className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm">Powered by Gemini AI & Advanced Trading Algorithms</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
          >
            ROUTIEX TERMINAL PRO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Revolutionary AI-Powered Trading Platform
            <br />
            <span className="text-primary">33 Advanced Components • 3 AI Models • 5 Languages</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a 
              href="https://github.com/muntaseralmuntaser/final-routiex" 
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-primary text-dark rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Github className="w-5 h-5" />
              View on GitHub
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="px-8 py-4 glass-effect rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2">
              <Rocket className="w-5 h-5 text-primary" />
              Live Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex justify-center"
          >
            <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Stats Section with Animated Numbers
const Stats = () => {
  const stats = [
    { icon: Code, value: '33', label: 'React Components', color: 'text-blue-400' },
    { icon: Brain, value: '3', label: 'AI Functions', color: 'text-green-400' },
    { icon: Globe, value: '5', label: 'Languages', color: 'text-purple-400' },
    { icon: Star, value: '92.3%', label: 'Test Pass Rate', color: 'text-yellow-400' },
    { icon: Users, value: '182', label: 'Dependencies', color: 'text-pink-400' },
    { icon: Award, value: '1.2MB', label: 'Build Size', color: 'text-cyan-400' },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-2xl p-6 text-center hover:border-primary transition-all"
            >
              <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Features Section with 3D Cards
const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced Gemini AI integration for news sentiment analysis and trading signal generation with Google Search',
      points: ['analyzeNewsImpact()', 'generateRoutiexSignal()', 'generateTradeFeedback()'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Trading Dashboard',
      description: 'Comprehensive trading terminal with 33 React components including AI Analyzer, Signals Panel, and Virtual Trading',
      points: ['33 Components', 'Real-time Charts', 'Portfolio Manager'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Secure Architecture',
      description: 'Enterprise-grade security with environment variable API keys, proper .gitignore, and no hardcoded credentials',
      points: ['API Key Security', 'Encrypted Storage', 'Secure Authentication'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Built-in translation system supporting 5 languages: English, Arabic, Chinese, Hindi, and Spanish',
      points: ['5 Languages', '50+ Translations', 'RTL Support'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized TypeScript build with Vite, completing in under 5 seconds with 1.2MB total bundle size',
      points: ['< 5s Build Time', '1.2MB Bundle', 'Zero Errors'],
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Advanced analytics dashboard with performance stats, market center, and deep analytics visualization',
      points: ['Performance Tracking', 'Market Analysis', 'Trading Insights'],
      color: 'from-indigo-500 to-violet-500'
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">Powerful Features</h2>
          <p className="text-xl text-gray-400">Everything you need for professional trading</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-2xl p-8 hover:border-primary transition-all transform-3d perspective-1000"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 animate-float`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Components Showcase
const ComponentsShowcase = () => {
  const components = [
    { name: 'AI Analyzer Widget', size: '45.9 KB', status: '✅' },
    { name: 'Virtual Trading Platform', size: '52.0 KB', status: '✅' },
    { name: 'Signals Panel', size: '30.8 KB', status: '✅' },
    { name: 'Settings Panel', size: '26.9 KB', status: '✅' },
    { name: 'Admin Panel', size: '26.3 KB', status: '✅' },
    { name: 'News Terminal', size: '25.6 KB', status: '✅' },
    { name: 'Landing Page', size: '25.7 KB', status: '✅' },
    { name: 'Market Center', size: '22.2 KB', status: '✅' },
    { name: 'Home Dashboard', size: '22.1 KB', status: '✅' },
    { name: 'Community Hub', size: '16.7 KB', status: '✅' },
    { name: 'Live Stream Studio', size: '41.5 KB', status: '✅' },
    { name: 'Marketplace', size: '17.6 KB', status: '✅' },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">33 Premium Components</h2>
          <p className="text-xl text-gray-400">All tested and verified - 100% operational</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {components.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-xl p-4 hover:border-primary transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-2xl">{component.status}</span>
                <span className="text-xs text-gray-500">{component.size}</span>
              </div>
              <h4 className="font-semibold text-sm">{component.name}</h4>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-4 flex items-center justify-center border-2 border-primary"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">+21</div>
              <div className="text-xs text-gray-400">More Components</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Technology Stack
const TechStack = () => {
  const technologies = [
    { name: 'React 18', version: '18.3.1', icon: '⚛️' },
    { name: 'TypeScript', version: '5.9.3', icon: '📘' },
    { name: 'Vite', version: '5.4.21', icon: '⚡' },
    { name: 'Gemini AI', version: '1.35.0', icon: '🤖' },
    { name: 'TailwindCSS', version: '3.4.19', icon: '🎨' },
    { name: 'Lucide React', version: '0.344.0', icon: '🎯' },
    { name: 'Recharts', version: '2.15.4', icon: '📊' },
    { name: 'Framer Motion', version: '12.x', icon: '🎬' },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">Technology Stack</h2>
          <p className="text-xl text-gray-400">Built with cutting-edge technologies</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="glass-effect rounded-2xl p-6 text-center hover:border-primary transition-all"
            >
              <div className="text-5xl mb-3">{tech.icon}</div>
              <h4 className="font-bold mb-1">{tech.name}</h4>
              <p className="text-xs text-gray-500">{tech.version}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Test Results Section
const TestResults = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/20 border border-green-500 mb-8">
            <CheckCircle2 className="w-6 h-6 text-green-500 mr-2" />
            <span className="font-semibold">System Status: OPERATIONAL</span>
          </div>

          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">92.3%</span> Pass Rate
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Comprehensive testing completed with 91 automated tests across 12 phases
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">84</div>
              <div className="text-sm text-gray-400">Tests Passed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">7</div>
              <div className="text-sm text-gray-400">Minor Issues</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-gray-400">Core Functions</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-500 text-sm">Build: SUCCESS</span>
            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-500 text-sm">Components: 33/33</span>
            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-500 text-sm">API: 3/3</span>
            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-500 text-sm">Security: ✓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">ROUTIEX TERMINAL PRO</h3>
            <p className="text-gray-400 text-sm">Powered by Bayanat Consultant Tech</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/muntaseralmuntaser/final-routiex" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://ai.studio/apps/drive/1DWma0esrvDuB0w6QrygQrPF0cPnfrAik" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Version 4.5.0 • Built with React, TypeScript, Framer Motion & Gemini AI</p>
          <p className="mt-2">© 2026 Routiex Terminal Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero />
      <Stats />
      <Features />
      <ComponentsShowcase />
      <TechStack />
      <TestResults />
      <Footer />
    </div>
  );
}

export default App;
