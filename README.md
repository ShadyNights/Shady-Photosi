<p align="center">
  <img src="docs/banner.png" width="100%" alt="Shady Photos Banner">
</p>

<h1 align="center">📸 Shady Photos</h1>

<p align="center">
A modern, responsive <strong>Progressive Web App (PWA)</strong> for discovering high-quality photos and videos, powered by the <strong>Pexels API</strong> and built with <strong>Vanilla JavaScript</strong> and <strong>Netlify Functions</strong>.
</p>

<p align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?logo=netlify)
![License](https://img.shields.io/badge/License-MIT-blue)

</p>

<p align="center">
<a href="https://shadyphotosi.netlify.app/">🌐 Live Demo</a> •
<a href="https://github.com/ShadyNights/Shady-Photos">📂 Source Code</a>
</p>

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Highlights](#-key-highlights)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Install Dependencies](#-install-dependencies)
- [Environment Variables](#-environment-variables)
- [Run Locally](#-run-locally)
- [Deployment](#-deployment)
- [Performance Optimizations](#-performance-optimizations)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Acknowledgements](#-acknowledgements)
- [License](#-license)
- [Author](#-author)
  
---

## 📖 Overview

Shady Photos is a modern Progressive Web App (PWA) for discovering high-quality photos and videos powered by the Pexels API. Built with Vanilla JavaScript and Netlify Serverless Functions, it delivers a fast, responsive, and secure media browsing experience while keeping API keys protected on the server side.

The application combines modern UI principles with production-ready web technologies, offering features such as intelligent search, infinite scrolling, responsive masonry layouts, offline support, favorites, viewing history, multiple themes, and a seamless browsing experience across desktop and mobile devices.

---

## ⭐ Key Highlights

- 📸 High-quality photo and video search powered by the Pexels API
- ⚡ Fast and lightweight Vanilla JavaScript application
- 🔐 Secure API requests through Netlify Serverless Functions
- 📱 Fully responsive Progressive Web App (PWA)
- ❤️ Favorites and viewing history
- 🎨 Multiple built-in themes with persistent preferences
- ♾ Infinite scrolling with lazy loading
- 🖼 Responsive masonry gallery layout
- 🚀 Offline support using Service Workers
- 💾 LocalStorage-powered personalization

---

## ✨ Features

### 🔍 Search & Discovery

- Search high-quality photos and videos
- Dynamic search suggestions
- Trending keyword tags
- Infinite scrolling
- Smart pagination
- Date filtering
- Shuffle gallery

### 🖼 Media Experience

- Masonry gallery layout
- Responsive image loading
- Video playback support
- Fullscreen lightbox
- Keyboard navigation
- Lazy loading
- Skeleton loading placeholders

### ❤️ Personalization

- Favorites
- Viewing history
- Multiple themes
  - Light
  - Dark
  - Sepia
  - Neon
- Compact gallery mode
- Autoplay toggle
- Local preferences storage

### ⚡ Performance

- Progressive Web App (PWA)
- Offline support
- Service Worker
- Cached assets
- Debounced search
- Infinite scrolling
- Lightweight Vanilla JavaScript
- Netlify serverless API proxy

### 📱 User Experience

- Fully responsive
- Mobile-friendly
- Desktop optimized
- Keyboard accessible
- Toast notifications
- Smooth animations

---

## 🛠 Tech Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| Styling | Modern CSS3, Responsive Design |
| Backend | Netlify Serverless Functions |
| API | Pexels REST API |
| Storage | LocalStorage |
| PWA | Service Worker, Web App Manifest |
| Deployment | Netlify |
| Package Manager | npm |

---

## 🏗 Architecture

```text
                 User
                   │
                   ▼
     HTML • CSS • Vanilla JavaScript
                   │
                   ▼
      Netlify Serverless Function
                   │
                   ▼
            Pexels REST API
                   │
                   ▼
      Photos & Videos Response
                   │
                   ▼
      Responsive Progressive Web App
```

---

## 📁 Project Structure

```text
Shady-Photos/
│
├── netlify/
│   └── functions/
│       └── pexels.js
│
├── docs/
│   ├── banner.png
│   └── screenshots/
│
├── index.html
├── manifest.json
├── sw.js
├── package.json
├── netlify.toml
└── README.md
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/ShadyNights/Shady-Photos.git

cd Shady-Photos
```

---

## 📦 Install Dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file.

```env
PEXELS_API_KEY=YOUR_PEXELS_API_KEY
```

Get your free API key from **https://www.pexels.com/api/**.

---

## ▶ Run Locally

```bash
netlify dev
```

The application will be available at:

```
http://localhost:8888
```

---

## ☁ Deployment

The project is optimized for Netlify deployment.

```bash
netlify deploy
```

or

```bash
netlify deploy --prod
```

🌐 **Live Application:** https://shadyphotosi.netlify.app/

---

## ⚙ Performance Optimizations

- Lazy loading for images and videos
- Infinite scrolling with pagination
- Skeleton loading placeholders
- Debounced search input
- LocalStorage caching for user preferences
- Responsive masonry gallery layout
- Secure serverless API proxy
- Progressive Web App (PWA) support
- Service Worker asset caching
- Lightweight Vanilla JavaScript architecture

---

## 🛣 Roadmap

- [ ] AI-powered semantic media search
- [ ] Collections and albums
- [ ] User authentication
- [ ] Download manager
- [ ] Advanced search filters
- [ ] Image editing tools
- [ ] Shareable collections
- [ ] Multi-language support
- [ ] Accessibility improvements
- [ ] Performance analytics dashboard

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 🙏 Acknowledgements

This project would not have been possible without these amazing services and open-source technologies.

- **Pexels API** — High-quality royalty-free photos and videos
- **Netlify** — Hosting and Serverless Functions
- **Toastify.js** — Lightweight toast notifications

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

### Kashif Ansari

- **GitHub:** https://github.com/ShadyNights
- **LinkedIn:** https://www.linkedin.com/in/kashifansari18

If you found this project helpful, consider giving it a ⭐ on GitHub.

---

<p align="center">
Built with ❤️ by <strong>Kashif Ansari</strong><br><br>
If you found this project useful, consider giving it a ⭐ on GitHub.
</p>
