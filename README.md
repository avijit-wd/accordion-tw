# 🎨 Accordion FAQ - Tailwind CSS v4

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-v4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A beautiful, responsive FAQ accordion component built with React, Vite, and Tailwind CSS v4**

[🚀 Live Demo](https://accordion-tw.vercel.app/) • [📖 Documentation](#features) • [🛠️ Installation](#installation) • [💡 Usage](#usage)

</div>

---

## ✨ Features

🎯 **Modern Tech Stack**

- ⚛️ React 19.1.1 with Hooks
- ⚡ Vite 7.1.6 for lightning-fast development
- 🎨 Tailwind CSS v4 with utility-first approach
- 📱 Fully responsive design

🌟 **Advanced UI/UX**

- 🌙 Dark mode support with smooth transitions
- 🎭 Beautiful gradient animations
- 📱 Mobile-first responsive design
- ♿ Accessible keyboard navigation
- 🎪 Smooth expand/collapse animations

🔧 **Developer Experience**

- 📦 ESLint configuration
- 💅 Prettier formatting
- 🔥 Hot Module Replacement (HMR)
- 🎯 TypeScript ready (easily convertible)

---

## 🖼️ Screenshots

### Light Mode

```
┌─────────────────────────────────────────┐
│              FAQ Center                 │
│     Find Answers to Common Questions    │
│                                         │
│  ❓ What is Tailwind CSS?         [+]  │
│  ❓ How do I install Tailwind?    [+]  │
│  ❓ What are utility classes?     [+]  │
│                                         │
│              [🌙 Dark Mode]            │
└─────────────────────────────────────────┘
```

### Dark Mode

```
┌─────────────────────────────────────────┐
│              FAQ Center                 │
│     Find Answers to Common Questions    │
│                                         │
│  ❓ What is Tailwind CSS?         [+]  │
│  ❓ How do I install Tailwind?    [+]  │
│  ❓ What are utility classes?     [+]  │
│                                         │
│              [☀️ Light Mode]           │
└─────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/avijit-wd/accordion-tw.git
   cd accordion-tw
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## 📁 Project Structure

```
accordion-tw/
├── 📁 public/
│   └── vite.svg
├── 📁 src/
│   ├── 📁 components/
│   │   ├── FAQItem.jsx       # Individual FAQ item component
│   │   └── FAQList.jsx       # FAQ list container
│   ├── 📁 data/
│   │   └── faqData.js        # FAQ questions and answers
│   ├── App.jsx               # Main application component
│   ├── index.css             # Tailwind CSS imports
│   └── main.jsx              # Application entry point
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 🎯 Usage

### Basic Implementation

```jsx
import FAQList from "./components/FAQList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <FAQList />
    </div>
  );
}
```

### Adding Custom FAQ Data

Edit `src/data/faqData.js`:

```javascript
const faqData = [
  {
    id: 1,
    question: "Your custom question?",
    answer: "Your detailed answer here...",
  },
  // Add more FAQ items...
];

export default faqData;
```

### Customizing Styles

The project uses Tailwind CSS v4. You can customize:

- **Colors**: Modify gradient colors in components
- **Animations**: Adjust transition durations
- **Typography**: Change font families in `index.css`
- **Dark Mode**: Customize dark mode variants

---

## 🛠️ Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

---

## 🎨 Customization

### Tailwind Configuration

The project uses Tailwind CSS v4 with the following features:

- **Dark Mode**: Class-based dark mode switching
- **Gradients**: Beautiful gradient backgrounds and text
- **Animations**: Smooth transitions and hover effects
- **Typography**: Custom font family (Prompt)

### Component Architecture

- **FAQList**: Container component managing FAQ items
- **FAQItem**: Individual accordion item with expand/collapse functionality
- **Data Layer**: Centralized FAQ data management

---

## 🌟 Features in Detail

### Dark Mode Implementation

```jsx
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);
```

### Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

### Accessibility

- Keyboard navigation support
- Screen reader friendly
- Focus management
- ARIA attributes

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Boxicons](https://boxicons.com/) - Icon library

---

## 📧 Contact

**Avijit** - [@avijit-wd](https://github.com/avijit-wd)

Project Link: [https://github.com/avijit-wd/accordion-tw](https://github.com/avijit-wd/accordion-tw)

---

<div align="center">

**⭐ Star this repo if you find it useful! ⭐**

Made with ❤️ by [Avijit](https://github.com/avijit-wd)

</div>
