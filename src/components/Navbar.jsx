import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 mx-4 mt-4 rounded-2xl shadow-xl backdrop-blur-md"
          : "py-5 mx-0 mt-0 rounded-none shadow-md"
      }`}
      style={{
        backgroundColor: isScrolled
          ? theme === "dark"
            ? "rgba(30, 41, 59, 0.8)"
            : "rgba(255, 255, 255, 0.8)"
          : theme === "dark"
          ? "var(--bg-secondary)"
          : "#ffffff",
        borderBottom: !isScrolled ? `1px solid var(--border-color)` : "none",
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold transition-all duration-300 hover:scale-105"
          style={{
            background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          🎓 Proyecto Integrador
        </Link>

        <div className="flex items-center gap-6">
          <Link
            className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
              isActive("/")
                ? "font-semibold"
                : "hover:scale-105"
            }`}
            to="/"
            style={{
              color: isActive("/")
                ? "var(--accent-primary)"
                : "var(--text-secondary)",
              backgroundColor: isActive("/")
                ? "var(--bg-accent)"
                : "transparent",
            }}
          >
            Home
            {isActive("/") && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: "var(--accent-primary)" }}
              />
            )}
          </Link>

          <Link
            className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
              isActive("/documentacion")
                ? "font-semibold"
                : "hover:scale-105"
            }`}
            to="/documentacion"
            style={{
              color: isActive("/documentacion")
                ? "var(--accent-primary)"
                : "var(--text-secondary)",
              backgroundColor: isActive("/documentacion")
                ? "var(--bg-accent)"
                : "transparent",
            }}
          >
            Documentación
            {isActive("/documentacion") && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: "var(--accent-primary)" }}
              />
            )}
          </Link>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12"
            style={{
              backgroundColor: "var(--bg-tertiary)",
              color: "var(--text-primary)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}