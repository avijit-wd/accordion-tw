import { useEffect, useState } from "react";
import FAQList from "./components/FAQList";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto py-12">
        <header className="mb-12 text-center">
          <h1 className="mb-4 inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            FAQ Center
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Find Answers to the most common questions about Tailwind CSS and Web
            development
          </p>
        </header>
      </div>
      <FAQList toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
}

export default App;
