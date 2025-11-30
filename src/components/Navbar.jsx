import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

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
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const isActive = (path) => location.pathname === path;

  const navItemClasses = (path) =>
    `relative block px-3 py-2 rounded-lg transition-all duration-300 ${
      isActive(path) ? "font-semibold" : "hover:scale-105"
    }`;

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
        {/* LOGO */}
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

        {/* BOTÓN HAMBURGUESA - solo mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg transition-all duration-300"
          style={{
            backgroundColor: "var(--bg-tertiary)",
            color: "var(--text-primary)",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            /* Ícono cerrar */
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            /* Ícono menú */
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            className={navItemClasses("/")}
            to="/"
            style={{
              color: isActive("/") ? "var(--accent-primary)" : "var(--text-secondary)",
              backgroundColor: isActive("/") ? "var(--bg-accent)" : "transparent",
            }}
          >
            Home
          </Link>

          <Link
            className={navItemClasses("/acercade")}
            to="/acercade"
            style={{
              color: isActive("/acercade") ? "var(--accent-primary)" : "var(--text-secondary)",
              backgroundColor: isActive("/acercade") ? "var(--bg-accent)" : "transparent",
            }}
          >
            Acerca de
          </Link>

          <Link
            className={navItemClasses("/documentacion")}
            to="/documentacion"
            style={{
              color: isActive("/documentacion") ? "var(--accent-primary)" : "var(--text-secondary)",
              backgroundColor: isActive("/documentacion") ? "var(--bg-accent)" : "transparent",
            }}
          >
            Documentación
          </Link>

          {/* BOTÓN TEMA (desktop) */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12"
            style={{
              backgroundColor: "var(--bg-tertiary)",
              color: "var(--text-primary)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>

      {/* MENÚ MOBILE DESPLEGABLE */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-start gap-4 px-8 pb-6">

          <Link
            className={navItemClasses("/")}
            to="/"
            onClick={() => setMenuOpen(false)}
            style={{
              color: isActive("/") ? "var(--accent-primary)" : "var(--text-secondary)",
              backgroundColor: isActive("/") ? "var(--bg-accent)" : "transparent",
            }}
          >
            Home
          </Link>

          <Link
            className={navItemClasses("/acercade")}
            to="/acercade"
            onClick={() => setMenuOpen(false)}
            style={{
              color: isActive("/acercade") ? "var(--accent-primary)" : "var(--text-secondary)",
              backgroundColor: isActive("/acercade") ? "var(--bg-accent)" : "transparent",
            }}
          >
            Acerca de
          </Link>

          <Link
            className={navItemClasses("/documentacion")}
            to="/documentacion"
            onClick={() => setMenuOpen(false)}
            style={{
              color: isActive("/documentacion") ? "var(--accent-primary)" : "var(--text-secondary)",
              backgroundColor: isActive("/documentacion") ? "var(--bg-accent)" : "transparent",
            }}
          >
            Documentación
          </Link>

          {/* BOTÓN TEMA (mobile) */}
          <button
            onClick={toggleTheme}
            className="mt-2 p-2.5 rounded-xl transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: "var(--bg-tertiary)",
              color: "var(--text-primary)",
            }}
          >
            {theme === "light" ? "🌙 Tema oscuro" : "☀️ Tema claro"}
          </button>

        </div>
      </div>
    </nav>
  );
}
