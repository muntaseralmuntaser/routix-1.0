import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Shield, Zap, Globe, Users, BarChart3, 
  Brain, Sparkles, ChevronDown, Github, ExternalLink,
  CheckCircle2, Star, Code, Rocket, Award, Lock, User,
  FileCode, FolderOpen, Terminal, Activity, Database,
  Settings, LogOut, Eye, Download, Copy, Play, Menu, X
} from 'lucide-react';

// Auth Context
interface AuthContextType {
  isAuthenticated: boolean;
  user: { name: string; email: string; role: string } | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

// Login Component
const LoginPage = ({ onLogin }: { onLogin: (email: string, password: string) => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-panel to-dark flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="glass-effect rounded-2xl p-8">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4"
            >
              <Lock className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="text-2xl font-bold gradient-text mb-2">
              ROUTIEX TERMINAL PRO
            </h1>
            <p className="text-gray-400">Presentation Dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-dark/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="demo@routiex.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-dark/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <button
              onClick={() => setShowDemo(!showDemo)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="text-sm font-medium text-primary">Demo Credentials</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showDemo ? 'rotate-180' : ''}`} />
            </button>
            {showDemo && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="mt-3 text-sm text-gray-300 space-y-1"
              >
                <p><strong>Admin:</strong> admin@routiex.com / admin123</p>
                <p><strong>User:</strong> demo@routiex.com / demo123</p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Sidebar Navigation
const Sidebar = ({ currentView, setCurrentView, onLogout, isMobileOpen, setMobileOpen }: any) => {
  const menuItems = [
    { id: 'dashboard', icon: Activity, label: 'Dashboard' },
    { id: 'files', icon: FolderOpen, label: 'File Browser' },
    { id: 'components', icon: Code, label: 'Components' },
    { id: 'procedures', icon: Terminal, label: 'Procedures' },
    { id: 'database', icon: Database, label: 'Database' },
    { id: 'testing', icon: CheckCircle2, label: 'Test Results' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isMobileOpen ? 0 : -280 }}
        className="lg:translate-x-0 fixed lg:relative left-0 top-0 h-screen w-64 glass-effect border-r border-border p-6 z-50 lg:z-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold gradient-text">ROUTIEX</h2>
            <p className="text-xs text-gray-400">v4.5.0</p>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-2 hover:bg-primary/10 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="space-y-2 mb-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentView(item.id);
                setMobileOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                currentView === item.id
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary/10 text-gray-300'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-red-500/10 text-red-400 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </motion.aside>
    </>
  );
};

// Dashboard View
const Dashboard = () => {
  const stats = [
    { icon: Code, label: 'Components', value: '33', color: 'text-blue-400' },
    { icon: Brain, label: 'AI Functions', value: '3', color: 'text-purple-400' },
    { icon: Globe, label: 'Languages', value: '5', color: 'text-green-400' },
    { icon: CheckCircle2, label: 'Pass Rate', value: '92.3%', color: 'text-primary' },
    { icon: Users, label: 'Dependencies', value: '182', color: 'text-yellow-400' },
    { icon: Database, label: 'Build Size', value: '1.2MB', color: 'text-pink-400' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">System Dashboard</h1>
        <p className="text-gray-400">Overview of Routiex Terminal Pro</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <stat.icon className={`w-12 h-12 ${stat.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-effect p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Activity className="w-6 h-6 text-primary mr-2" />
            System Status
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Build Status', value: 'SUCCESS', color: 'bg-green-500' },
              { label: 'TypeScript', value: 'COMPILED', color: 'bg-blue-500' },
              { label: 'Tests', value: '84/91 PASSED', color: 'bg-primary' },
              { label: 'Server', value: 'RUNNING', color: 'bg-green-500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-dark/30 rounded-lg">
                <span className="text-gray-300">{item.label}</span>
                <span className={`px-3 py-1 ${item.color} text-white text-xs font-bold rounded-full`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Rocket className="w-6 h-6 text-primary mr-2" />
            Quick Links
          </h3>
          <div className="space-y-3">
            {[
              { label: 'GitHub Repository', icon: Github, url: 'https://github.com/muntaseralmuntaser/routix-1.0' },
              { label: 'AI Studio', icon: Sparkles, url: '#' },
              { label: 'Documentation', icon: FileCode, url: '#' },
              { label: 'Live Demo', icon: ExternalLink, url: 'https://5173-ips9x5tyekc9v0tt10vx9-c81df28e.sandbox.novita.ai' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-dark/30 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <span className="flex items-center text-gray-300">
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// File Browser View
const FileBrowser = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  
  const files = [
    { name: 'App.tsx', path: 'src/', size: '467 lines', type: 'typescript' },
    { name: 'main.tsx', path: 'src/', size: '10 lines', type: 'typescript' },
    { name: 'index.css', path: 'src/', size: '55 lines', type: 'css' },
    { name: 'vite.config.ts', path: '', size: '20 lines', type: 'typescript' },
    { name: 'package.json', path: '', size: '45 lines', type: 'json' },
    { name: 'README.md', path: '', size: '150 lines', type: 'markdown' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">File Browser</h1>
        <p className="text-gray-400">Explore project files and documentation</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-effect rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border">
            <h3 className="font-bold flex items-center">
              <FolderOpen className="w-5 h-5 text-primary mr-2" />
              Project Files
            </h3>
          </div>
          <div className="divide-y divide-border max-h-96 overflow-y-auto">
            {files.map((file, i) => (
              <button
                key={i}
                onClick={() => setSelectedFile(file.name)}
                className={`w-full p-4 hover:bg-primary/5 transition-colors text-left ${
                  selectedFile === file.name ? 'bg-primary/10' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileCode className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-white">{file.name}</p>
                      <p className="text-xs text-gray-400">{file.path}{file.name}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{file.size}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="glass-effect rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h3 className="font-bold flex items-center">
              <Eye className="w-5 h-5 text-primary mr-2" />
              File Preview
            </h3>
            {selectedFile && (
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          <div className="p-4 h-96 overflow-y-auto">
            {selectedFile ? (
              <pre className="text-sm text-gray-300 font-mono">
                <code>{`// ${selectedFile}\n// File content preview\n\nimport { useState } from 'react';\n\nfunction Component() {\n  const [state, setState] = useState(0);\n  \n  return (\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  );\n}\n\nexport default Component;`}</code>
              </pre>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <div className="text-center">
                  <FileCode className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p>Select a file to preview</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Components View
const ComponentsView = () => {
  const components = [
    'App.tsx', 'Header.tsx', 'Sidebar.tsx', 'AuthFlow.tsx', 'LoginModal.tsx',
    'RegisterModal.tsx', 'AiAnalyzerWidget.tsx', 'TradingChart.tsx', 'MarketCenter.tsx',
    'NewsTerminal.tsx', 'SignalsPanel.tsx', 'VirtualTradingPlatform.tsx', 'PortfolioView.tsx',
    'OrderBook.tsx', 'TradingPanel.tsx', 'PriceChart.tsx', 'DepthChart.tsx', 'TradeHistory.tsx',
    'PositionManager.tsx', 'RiskCalculator.tsx', 'PerformanceMetrics.tsx', 'TradingJournal.tsx',
    'StrategyBuilder.tsx', 'BacktestingEngine.tsx', 'IndicatorLibrary.tsx', 'ChartPatterns.tsx',
    'TechnicalAnalysis.tsx', 'FundamentalData.tsx', 'EconomicCalendar.tsx', 'NewsAggregator.tsx',
    'SocialSentiment.tsx', 'WhaleWatch.tsx', 'TopAnalysts3D.tsx'
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Components</h1>
        <p className="text-gray-400">33 React components built with TypeScript</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((component, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.02 }}
            className="glass-effect p-4 rounded-xl hover:scale-105 transition-transform"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-white">{component}</p>
                <p className="text-xs text-gray-400">React Component</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Procedures View
const ProceduresView = () => {
  const procedures = [
    { name: 'Build Process', status: 'SUCCESS', time: '6.3s', icon: Play },
    { name: 'TypeScript Compilation', status: 'PASSED', time: '147ms', icon: CheckCircle2 },
    { name: 'ESLint Check', status: 'PASSED', time: '1.2s', icon: CheckCircle2 },
    { name: 'Test Suite', status: '84/91', time: '5.4s', icon: Activity },
    { name: 'Git Repository', status: 'SYNCED', time: '-', icon: Github },
    { name: 'Deployment', status: 'LIVE', time: '-', icon: Rocket },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Procedures & Tasks</h1>
        <p className="text-gray-400">System procedures and automation tasks</p>
      </div>

      <div className="space-y-4">
        {procedures.map((proc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-effect p-6 rounded-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <proc.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{proc.name}</h3>
                  <p className="text-sm text-gray-400">Execution time: {proc.time}</p>
                </div>
              </div>
              <span className="px-4 py-2 bg-green-500 text-white font-bold rounded-full text-sm">
                {proc.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Database View
const DatabaseView = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Database</h1>
        <p className="text-gray-400">System data and storage information</p>
      </div>

      <div className="glass-effect p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Storage Services</h3>
        <div className="space-y-4">
          <div className="p-4 bg-dark/30 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Cloudflare D1</span>
              <span className="text-primary">SQLite Database</span>
            </div>
            <p className="text-sm text-gray-400">Relational data storage</p>
          </div>
          <div className="p-4 bg-dark/30 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Cloudflare KV</span>
              <span className="text-primary">Key-Value Store</span>
            </div>
            <p className="text-sm text-gray-400">Fast key-value pairs</p>
          </div>
          <div className="p-4 bg-dark/30 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Cloudflare R2</span>
              <span className="text-primary">Object Storage</span>
            </div>
            <p className="text-sm text-gray-400">File and binary storage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Testing View
const TestingView = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Test Results</h1>
        <p className="text-gray-400">Comprehensive system testing results</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-effect p-6 rounded-xl text-center">
          <div className="text-5xl font-bold text-primary mb-2">91</div>
          <p className="text-gray-400">Total Tests</p>
        </div>
        <div className="glass-effect p-6 rounded-xl text-center">
          <div className="text-5xl font-bold text-green-400 mb-2">84</div>
          <p className="text-gray-400">Passed</p>
        </div>
        <div className="glass-effect p-6 rounded-xl text-center">
          <div className="text-5xl font-bold text-yellow-400 mb-2">92.3%</div>
          <p className="text-gray-400">Pass Rate</p>
        </div>
      </div>

      <div className="glass-effect p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Test Categories</h3>
        <div className="space-y-3">
          {[
            { name: 'Environment & Dependencies', passed: 5, total: 5 },
            { name: 'Configuration Files', passed: 4, total: 5 },
            { name: 'Dependencies', passed: 7, total: 7 },
            { name: 'Project Structure', passed: 4, total: 4 },
            { name: 'Component Validation', passed: 33, total: 33 },
            { name: 'Service Functions', passed: 6, total: 6 },
            { name: 'TypeScript Compilation', passed: 3, total: 3 },
            { name: 'Code Quality', passed: 3, total: 3 },
            { name: 'Git Validation', passed: 5, total: 5 },
            { name: 'Security', passed: 3, total: 3 },
          ].map((cat, i) => (
            <div key={i} className="p-4 bg-dark/30 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{cat.name}</span>
                <span className="text-sm text-gray-400">{cat.passed}/{cat.total}</span>
              </div>
              <div className="w-full bg-dark rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2 transition-all"
                  style={{ width: `${(cat.passed / cat.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [currentView, setCurrentView] = useState('dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // Demo authentication
    if (
      (email === 'admin@routiex.com' && password === 'admin123') ||
      (email === 'demo@routiex.com' && password === 'demo123')
    ) {
      setIsAuthenticated(true);
      setUser({
        name: email === 'admin@routiex.com' ? 'Admin User' : 'Demo User',
        email: email,
        role: email === 'admin@routiex.com' ? 'Administrator' : 'User',
      });
    } else {
      alert('Invalid credentials. Try demo@routiex.com / demo123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setCurrentView('dashboard');
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-dark text-white flex">
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onLogout={handleLogout}
        isMobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="glass-effect border-b border-border p-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 hover:bg-primary/10 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex-1 lg:flex-none">
              <h1 className="text-xl font-bold">Routiex Terminal Pro</h1>
              <p className="text-xs text-gray-400">Presentation Dashboard v4.5.0</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-400">{user.role}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentView === 'dashboard' && <Dashboard />}
              {currentView === 'files' && <FileBrowser />}
              {currentView === 'components' && <ComponentsView />}
              {currentView === 'procedures' && <ProceduresView />}
              {currentView === 'database' && <DatabaseView />}
              {currentView === 'testing' && <TestingView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default App;
