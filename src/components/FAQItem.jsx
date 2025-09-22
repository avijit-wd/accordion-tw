import { useRef } from "react";

export default function FAQItem({ item, onClick, isOpen }) {
  const answerRef = useRef(null);
  return (
    <div
      className="border-b border-gray-200 transition-colors duration-300 last:border-none hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-transparent dark:border-gray-700 dark:to-transparent dark:hover:from-gray-800/50"
      id={`faq-item-${item.id}`}
    >
      <button
        className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-5 text-left hover:bg-clip-text hover:text-transparent focus:outline-none ${
          isOpen
            ? "bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200/90 font-medium text-purple-700 dark:from-indigo-900/80 dark:via-indigo-800/80 dark:to-indigo-800/90 dark:text-white"
            : "text-gray-900 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 dark:text-white dark:hover:from-indigo-400 dark:hover:to-purple-400"
        }`}
        onClick={() => onClick(item.id)}
      >
        <span className="pr-6 text-lg font-medium">{item.question}</span>
        <div
          className={`flex aspect-square w-8 min-w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200 ${isOpen ? "bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md dark:from-indigo-500 dark:to-indigo-500" : "bg-gray-200 dark:bg-gray-700"} `}
        >
          <i
            className={`bx bx-${isOpen ? "minus" : "plus"} ${isOpen ? "text-white" : "text-gray-500 dark:text-gray-400"}`}
          ></i>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-200 ease-out"
        id={`answer-${item.id}`}
        ref={answerRef}
        style={{
          maxHeight: isOpen ? answerRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-4 pt-0 pb-5 text-gray-600 dark:text-gray-300">
          <div className="max-h-[300px] overflow-y-auto rounded-lg p-3">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}
