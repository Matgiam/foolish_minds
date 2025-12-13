# Foolish Minds Band Website

A modern, interactive website for the band Foolish Minds built with React, Vite, and GSAP for smooth animations and scrolling effects.

## 🎸 About

Foolish Minds is a band website featuring:
- Hero section with band introduction
- Music player with song previews
- Band member profiles
- Video showcase
- Upcoming shows and events
- Contact section
- Smooth scrolling animations

## 🚀 Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **Deployment**: GitHub Pages

## 📦 Dependencies

### Main Dependencies
- `react` & `react-dom` - Core React library
- `gsap` & `@gsap/react` - Animation library
- `@tailwindcss/vite` - Tailwind CSS integration
- `react-responsive` - Responsive design utilities
- `@emailjs/browser` - Email functionality

### Development Dependencies
- `@vitejs/plugin-react` - React plugin for Vite
- `eslint` - Code linting
- `gh-pages` - GitHub Pages deployment

## 🛠️ Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/Matgiam/foolish_minds.git
cd foolish_minds
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## 📁 Project Structure

```
foolish_minds/
├── public/
│   ├── audio/          # Audio files (fool.wav, lost.wav, sabbi.wav)
│   ├── bandmembers/    # Band member photos
│   ├── images/         # Site images and icons
│   ├── logo/           # Band logos
│   ├── shows/          # Show promotional images
│   └── video/          # Video content
├── src/
│   ├── components/     # Reusable React components
│   │   ├── BandSlider.jsx
│   │   ├── BandTitle.jsx
│   │   ├── Navbar.jsx
│   │   ├── ShowCard.jsx
│   │   ├── SongCard.jsx
│   │   ├── SongCardItem.jsx
│   │   └── SongTitle.jsx
│   ├── constants/      # Application constants
│   ├── sections/       # Page sections
│   │   ├── BandSection.jsx
│   │   ├── FooterSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MessageSection.jsx
│   │   ├── ShowSection.jsx
│   │   ├── SongSection.jsx
│   │   └── VideoSection.jsx
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```
## 🎵 Band Members

- **Maarten** - Guitar
- **Matteo** - Drums  
- **Santo** - Bass
- **Sofie** - Vocals
