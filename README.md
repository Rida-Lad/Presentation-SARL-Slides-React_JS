# 📊 SARL Business Presentation

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React">
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge" alt="Vite">
  <img src="https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white&style=for-the-badge" alt="Chart.js">
</div>

## 🌍 Project Overview

An innovative, interactive presentation exploring SARL (Société à Responsabilité Limitée) business structures in Morocco, leveraging cutting-edge web technologies to deliver a compelling narrative.

## ✨ Key Features

### 🎨 Dynamic Presentation Design
- **Animated Transitions**: Smooth, professional movement between slides
- **Interactive Data Visualization**: Engaging charts and graphics
- **Responsive Layout**: Optimized for all device sizes
- **Professional Aesthetics**: Custom design with modern web technologies

## 🗂️ Slide Composition

| Slide | Focus Area | Key Components |
|-------|------------|----------------|
| `Slide0` | Introduction | Animated title and presenter details |
| `Slide1` | SARL Basics | Comprehensive overview with charts |
| `Slide2` | Formation Process | Step-by-step animated guide |
| `Slide3` | Comparative Analysis | Pros and cons exploration |
| `Slide4` | Statistical Insights | Data-driven visualizations |
| `Slide5` | Conclusion | Summary and key takeaways |

## 🛠️ Technology Stack

- **Frontend**: React
- **Animations**: Framer Motion
- **Data Visualization**: Chart.js
- **Build Tool**: Vite
- **Styling**: Custom CSS, Bootstrap

## 🚀 Quick Start Guide

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/sarl-presentation.git
cd sarl-presentation
```

2. Install dependencies
```bash
npm install
```

3. Launch development server
```bash
npm run dev
```

### Special Animation Snippet

```jsx
const techIconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5
  }
};
```

## 🔧 Customization Options

- Modify slide content in respective components
- Replace placeholder images in `src/icons/`
- Adjust color schemes and styling
- Extend animation variants

## 📦 Deployment

### Recommended Platforms
- Vercel
- Netlify
- GitHub Pages

### Build for Production
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
  🇲🇦 Crafted with ❤️ to showcase Moroccan business innovation
</div>
