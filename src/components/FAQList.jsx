import FAQItem from "./FAQItem";
import faqData from "../data/faqData";
import { useEffect, useState } from "react";

export default function FAQList({ toggleDarkMode, darkMode }) {
  const [openId, setOpenId] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  const toggleItem = (id) => {
    if (expandAll) {
      setExpandAll(false);
    }
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const toggleExpandAll = () => {
    setExpandAll((prev) => !prev);
    setOpenId(null);
  };

  useEffect(() => {
    if (openId && typeof window !== undefined) {
      setTimeout(() => {
        const el = document.getElementById(`faq-item-${openId}`);
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [openId]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h2 className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-center text-2xl font-bold text-transparent sm:w-auto sm:text-left">
          Frequently Asked Questions
        </h2>

        <div className="flex items-center space-x-4">
          <button
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            onClick={() => toggleExpandAll()}
          >
            <i
              className={`bx bx-${expandAll ? "collapse-alt" : "expand-alt"} text-lg`}
            ></i>
            <span>{expandAll ? "Collapse All" : "Expand All"}</span>
          </button>

          <button
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 transition duration-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:from-gray-700 dark:to-gray-800 dark:text-gray-200"
            onClick={toggleDarkMode}
          >
            <i className={`bx bx-${darkMode ? "sun" : "moon"} text-xl`}></i>
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-indigo-100/50 bg-white/80 shadow-lg transition-all duration-300 dark:border-indigo-900/30 dark:bg-gray-800/80">
        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            item={item}
            onClick={toggleItem}
            isOpen={expandAll || openId === item.id}
          />
        ))}
      </div>
    </div>
  );
}
