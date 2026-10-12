# 💕 Anniversary Connection

A stunning, highly interactive 1-month anniversary application designed for long-distance couples. Built with React, Vite, Tailwind CSS, and Framer Motion, featuring a premium dark mode aesthetic with deep space blues, violet gradients, and glowing neon effects.

## ✨ Features

### 🌟 Welcome Screen ("The Connection Portal")
- Minimalist, beautiful landing with animated background
- Two distant glowing points connecting via neon line
- Smooth data-stream transition into the main dashboard

### 📊 Interactive Long-Distance Dashboard
- **Precision Counter**: Real-time ticker showing exact time together (Days, Hours, Minutes, Seconds)
- **Dual World Clocks**: Beautiful visual component showing two time zones with glowing link animation
- **Interactive Milestone Timeline**: Vertical scrollable timeline with expandable nodes for key relationship moments
- **Virtual Hug/Ping Module**: Digital button with pulse wave animation simulating sending love across the network
- **Future Loading**: Animated progress bar countdown to closing the distance with neon glow effects

### 🎮 Easter Egg Terminal
- Discrete terminal-style input field at the bottom
- Secret phrases: `zero_distance` or `i_love_you`
- Triggers full-screen digital celebration with glowing neon hearts and matrix-style effects

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd d:\surprise
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

#### Web Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

#### Electron Desktop Mode
```bash
npm run electron:dev
```
This will start both the Vite dev server and open the application in an Electron window.

#### Production Build
```bash
npm run build
```
Builds the application for production in the `dist` directory.

#### Electron Production Build
```bash
npm run electron:build
```
Creates a distributable desktop application.

## 🎨 Customization

### Set Your Anniversary Date
Edit `src/components/PrecisionCounter.jsx`:
```javascript
const ANNIVERSARY_DATE = new Date('2024-07-25T00:00:00')
```

### Configure Time Zones
Edit `src/components/DualWorldClocks.jsx`:
```javascript
const MY_TIMEZONE = 'America/New_York'
const HIS_TIMEZONE = 'Europe/London'
```

### Set Target Date for Closing Distance
Edit `src/components/FutureLoading.jsx`:
```javascript
const TARGET_DATE = new Date('2025-01-01T00:00:00')
```

### Customize Milestones
Edit the `milestones` array in `src/components/MilestoneTimeline.jsx` to add your own relationship milestones.

### Change Secret Phrases
Edit `src/components/EasterEggTerminal.jsx`:
```javascript
const SECRET_PHRASES = ['zero_distance', 'i_love_you']
```

## 📱 Responsive Design

The application is fully responsive and adapts beautifully from:
- **Desktop**: Wide monitor with full grid layout
- **Tablet**: Optimized 2-column layout
- **Mobile**: Single-column layout with touch-friendly interactions

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling with custom theme
- **Framer Motion** - Smooth animations and transitions
- **date-fns** - Date manipulation
- **Electron** - Desktop application framework

## 📦 Project Structure

```
surprise/
├── electron/
│   ├── main.js          # Electron main process
│   └── preload.js       # Electron preload script
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.jsx
│   │   ├── PrecisionCounter.jsx
│   │   ├── DualWorldClocks.jsx
│   │   ├── MilestoneTimeline.jsx
│   │   ├── VirtualHug.jsx
│   │   ├── FutureLoading.jsx
│   │   └── EasterEggTerminal.jsx
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## 🌐 Future Porting to Android

The architecture is designed for easy porting to Android via Capacitor:

1. Install Capacitor:
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init
```

2. Add Android platform:
```bash
npx cap add android
```

3. Build and sync:
```bash
npm run build
npx cap sync android
```

4. Open in Android Studio:
```bash
npx cap open android
```

## 🎨 Design Theme

- **Primary Colors**: Deep space blues (#0a0a1a, #1a1a2e, #16213e)
- **Accent Colors**: Neon pink (#ff00ff), Cyan (#00ffff), Purple (#a855f7)
- **Effects**: Glassmorphism, neon glows, floating particles, smooth transitions
- **Typography**: Modern, clean fonts with gradient text effects

## 💡 Tips

- The application uses local time calculations, so no backend is required
- All animations are hardware-accelerated for smooth performance
- The Easter egg terminal shows a hint after 10 seconds if not discovered
- Click on timeline nodes to expand milestone descriptions

## 📄 License

This project is created for personal use. Feel free to customize and share with your loved one!

## ❤️ Made with Love

Built to bridge the digital void and celebrate love across distance. Every second counts, every moment matters.

---

**Note**: Remember to customize the dates, time zones, and milestones to match your unique relationship story before sharing!
