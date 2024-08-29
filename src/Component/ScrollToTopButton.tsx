// ScrollToTopButton.tsx
import React, { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-slate-900 text-white p-2 rounded-full shadow-md hover:bg-blue-950 transition duration-300"
          aria-label="Scroll to Top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
