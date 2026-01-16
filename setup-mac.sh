#!/bin/bash

# Routiex Website - Quick Setup Script for Mac
# Run this script to create all files automatically

echo "🚀 Creating Routiex Website..."

# Create package.json
cat > package.json << 'PACKAGE_JSON_EOF'
{
  "name": "routiex-website",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "framer-motion": "^12.26.2",
    "lucide-react": "^0.562.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.9.3",
    "vite": "^7.2.4"
  }
}
PACKAGE_JSON_EOF

echo "✅ Created package.json"

# Create tsconfig.json
cat > tsconfig.json << 'TSCONFIG_EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
TSCONFIG_EOF

echo "✅ Created tsconfig.json"

# Create vite.config.ts
cat > vite.config.ts << 'VITE_CONFIG_EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
VITE_CONFIG_EOF

echo "✅ Created vite.config.ts"

# Create tailwind.config.js
cat > tailwind.config.js << 'TAILWIND_CONFIG_EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10B981',
        dark: '#020617',
        'panel': '#0f111a',
        'border': '#1e2235',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
TAILWIND_CONFIG_EOF

echo "✅ Created tailwind.config.js"

# Create postcss.config.js
cat > postcss.config.js << 'POSTCSS_CONFIG_EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
POSTCSS_CONFIG_EOF

echo "✅ Created postcss.config.js"

# Create .gitignore
cat > .gitignore << 'GITIGNORE_EOF'
node_modules
dist
*.local
.DS_Store
GITIGNORE_EOF

echo "✅ Created .gitignore"

echo ""
echo "✨ All configuration files created!"
echo ""
echo "📋 Next steps:"
echo "   1. Run: npm install"
echo "   2. Create src/ files (I'll provide the code)"
echo "   3. Run: npm run dev"
echo ""
