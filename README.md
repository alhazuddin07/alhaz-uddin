# ⚡ Alhaz Uddin - Personal Portfolio

[![React 19](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> A modern, responsive single-page developer portfolio showcasing full-stack web applications, technical skills, and creative projects built with **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## ✨ Features

- 🎨 **Modern Dark Aesthetic**: Sleek `#030617` dark background with subtle radial purple/blue/cyan glows, glassmorphism cards, and fluid gradients.
- ⌨️ **Typewriter Text Animation**: Dynamic letter-by-letter typing and deleting animation in the Hero section with custom glowing cursor.
- 📱 **Fully Responsive Layout**: Pixel-perfect presentation carefully optimized for mobile devices, tablets (iPads, Android tablets), and large desktop displays.
- 🚀 **Featured Projects Showcase**:
  - Interactive project cards with live preview images, technology tags, live demo links, and direct GitHub repository links.
  - Smart tablet grid layout adapting dynamically for smooth reading.
- 🛠️ **Tech Stack & Skills Grid**: Visual cards for core technologies including React, Next.js, JavaScript, TypeScript, and Tailwind CSS.
- 🎓 **Academic Background & Education**: Highlights current enrollment in Honours 2nd Year under the National University of Bangladesh and self-directed software engineering development.
- 📬 **Interactive Contact Section**: Contact form with built-in validation, feedback alerts, and quick-access contact channels (Email, WhatsApp/Phone, Location).
- 📄 **CV / Resume Download**: Seamless direct-download link integrated into the header and hero sections.
- 🧭 **Smooth Navigation & Scrollspy**: Header navbar with active state indicator and mobile-friendly hamburger overlay drawer.

---

## 💻 Featured Projects

| Project | Description | Live Demo | Repository |
| :--- | :--- | :---: | :---: |
| **BazarDor (বাজার দর)** | Daily essentials grocery price comparison web platform (rice, dal, oil, vegetables, fish, meat, spices). | [🌐 Live Demo](https://bazar-dor-teal-tau.vercel.app/) | [📁 GitHub](https://github.com/alhazuddin07/BazarDor) |
| **Bangla News 24 (বাংলা নিউজ ২৪)** | Modern Bengali online news portal featuring live breaking news tickers, categorized articles, and real-time updates. | [🌐 Live Demo](https://bangla-news-24-henna.vercel.app/) | [📁 GitHub](https://github.com/alhazuddin07/bangla-news-24) |
| **FitLog** | Dark-themed gym companion & workout library web app with routine tracking, exercise logs, and muscle targeting. | [🌐 Live Demo](https://assignment-number-6-seven.vercel.app/) | [📁 GitHub](https://github.com/alhazuddin07/assignment-number-6) |

---

## 🛠️ Tech Stack

- **Core Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) inspired design patterns with `clsx` and `tailwind-merge`
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) & [Reenie Beanie](https://fonts.google.com/specimen/Reenie+Beanie) (Handwritten accent)

---

## 📁 Project Structure

```text
my-portfolio/
├── frontend/
│   ├── public/
│   │   ├── Alhaz-Uddin-CV.pdf       # Downloadable resume document
│   │   └── favicon.svg              # Custom portfolio favicon
│   ├── src/
│   │   ├── assets/                  # Project previews & edited portrait assets
│   │   │   ├── alhaz-portrait.jpg
│   │   │   ├── project-bazardor.jpg
│   │   │   ├── project-banglanews.jpg
│   │   │   └── project-fitlog.svg
│   │   ├── components/
│   │   │   ├── ui/                  # Reusable UI primitives (Button, Card, Badge, Input)
│   │   │   ├── Navbar.tsx           # Responsive header with scrollspy & mobile menu
│   │   │   ├── Hero.tsx             # Hero section with typewriter animation & photo
│   │   │   ├── AboutMe.tsx          # Bio, highlights, and personal info card
│   │   │   ├── Skills.tsx           # Technical skills grid
│   │   │   ├── Education.tsx        # Academic background & Honours running status
│   │   │   ├── Projects.tsx         # Featured work with live demo and GitHub links
│   │   │   ├── Contact.tsx          # Direct contact info and interactive contact form
│   │   │   ├── Footer.tsx           # Footer with copyright and social links
│   │   │   └── Icons.tsx            # Custom SVG social brand icons
│   │   ├── App.tsx                  # Main single-page application layout
│   │   ├── index.css                # Global Tailwind CSS v4 styling & theme tokens
│   │   └── main.tsx                 # Application entry point
│   ├── index.html                   # HTML template with SEO metadata & Google Fonts
│   ├── package.json                 # Frontend dependencies and scripts
│   └── vite.config.ts               # Vite configuration
└── README.md                        # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio website locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/alhazuddin07/my-portfolio.git
   cd my-portfolio/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:5173
   ```

### Building for Production

To generate an optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 👤 Author

**Alhaz Uddin**
- **Role:** Full-Stack Developer
- **GitHub:** [@alhazuddin07](https://github.com/alhazuddin07)
- **WhatsApp / Phone:** `+880 1319-360019`
- **Email:** `alhazuddin365@gmail.com`
- **Location:** Bangladesh

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
