# 🚀 Run Routiex Website on Your Mac

## 📥 METHOD 1: Download and Run (Recommended)

### Step 1: Download the website files

You have two options:

#### Option A: Download the archive I created (94MB - no node_modules)
The archive is located at:
```
/home/user/routiex-website.tar.gz
```

Download this file to your Mac.

#### Option B: Clone from this sandbox
Use a file transfer method to copy the `/home/user/routiex-website` folder to your Mac.

---

### Step 2: Extract and setup on your Mac

Open your Mac Terminal and run:

```bash
# Navigate to where you downloaded the file
cd ~/Downloads

# Extract the archive
tar -xzf routiex-website.tar.gz

# Go into the folder
cd routiex-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

### Step 3: Open in browser

After `npm run dev` runs, you'll see:
```
VITE v7.3.1  ready in 440 ms

➜  Local:   http://localhost:5173/
➜  Press h + enter to show help
```

**Open your browser to:** `http://localhost:5173`

---

## 🎯 METHOD 2: Copy Files Manually

If you want to copy the source code directly:

### 1. Create project folder on Mac
```bash
mkdir ~/routiex-website
cd ~/routiex-website
```

### 2. Initialize npm project
```bash
npm init -y
```

### 3. Install dependencies
```bash
npm install react@^19.2.0 react-dom@^19.2.0

npm install -D @types/react @types/react-dom @vitejs/plugin-react \
  typescript vite framer-motion lucide-react \
  tailwindcss@^3 autoprefixer postcss
```

### 4. Create files

Copy these files from the sandbox to your Mac:

**Core files:**
- `src/App.tsx`
- `src/main.tsx`
- `src/index.css`
- `index.html`
- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- `tailwind.config.js`
- `postcss.config.js`

---

## 🌐 EXPOSE TO NETWORK (Optional)

To access from other devices on your network:

```bash
npm run dev -- --host
```

Then access from any device using:
```
http://YOUR_MAC_IP:5173
```

To find your Mac's IP:
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

---

## 🔧 USEFUL COMMANDS

### Start development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

### Stop the server
Press `Ctrl + C` in the terminal

### Run on different port
```bash
npm run dev -- --port 3000
```

### Open automatically in browser
```bash
npm run dev -- --open
```

---

## 📱 WHAT YOU'LL SEE

When you open `http://localhost:5173`, you'll see:

✨ **Animated Hero Section**
- Gradient "ROUTIEX TERMINAL PRO" title
- Floating background effects
- GitHub and Live Demo buttons

📊 **Statistics Cards**
- 33 React Components
- 3 AI Functions
- 5 Languages
- 92.3% Pass Rate

🚀 **Feature Showcase**
- 6 interactive cards
- Hover animations
- Detailed descriptions

📦 **Components Grid**
- All 33 components
- Status and sizes

🛠️ **Tech Stack Display**
- React, TypeScript, Vite
- Gemini AI, TailwindCSS
- Framer Motion

✅ **Test Results**
- Comprehensive statistics
- System status

---

## 🎨 ANIMATIONS

The website includes:
- ✨ Fade-in on scroll
- 🎭 Scale on hover
- 🌊 Floating backgrounds
- 💫 Gradient animations
- 🎯 Smooth transitions
- 🎪 3D transforms

---

## 📱 RESPONSIVE DESIGN

Works perfectly on:
- 📱 Mobile (320px+)
- 📲 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1920px+)

---

## ⚠️ REQUIREMENTS

Before running, ensure you have:
- ✅ Node.js (v18 or higher)
- ✅ npm (comes with Node.js)

Check your versions:
```bash
node --version
npm --version
```

If you don't have Node.js, install it from:
https://nodejs.org

---

## 🎯 QUICK START (Copy/Paste All)

```bash
# Download method (if you have the archive)
cd ~/Downloads
tar -xzf routiex-website.tar.gz
cd routiex-website
npm install
npm run dev

# Then open: http://localhost:5173
```

---

## 🆘 TROUBLESHOOTING

### Port already in use?
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Permission errors?
```bash
sudo npm install
```

### Module not found?
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

---

## 📁 PROJECT STRUCTURE

```
routiex-website/
├── src/
│   ├── App.tsx          # Main component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.ts       # Vite config
├── tsconfig.json        # TypeScript config
├── tailwind.config.js   # Tailwind config
└── postcss.config.js    # PostCSS config
```

---

## 🚀 DEPLOYMENT

After testing locally, you can deploy to:
- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag `dist/` folder to netlify.com/drop
- **GitHub Pages**: Push to GitHub and enable Pages
- **Cloudflare Pages**: Connect GitHub repo

---

## ✅ DONE!

Your website should now be running on:
**http://localhost:5173**

Enjoy your beautiful animated landing page! 🎉
