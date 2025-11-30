import { Link } from "react-router-dom";
import { etapas } from "../data/etapas";

export default function Home() {
  return (
    <>
      {/* Background Decorations */}
      <div className="bg-decoration circle-1"></div>
      <div className="bg-decoration circle-2"></div>
      <div className="bg-decoration circle-3"></div>
      <div className="bg-decoration square-1"></div>

      <div className="relative z-10 min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fadeIn">
            <h1
              className="text-5xl md:text-6xl font-black mb-6 leading-tight gradient-text"
            >
              Proyecto Final Integrador
            </h1>
            <p
              className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Análisis y Propuesta de Sistema Empresarial
            </p>
            <div className="flex items-center justify-center gap-3 text-sm" style={{ color: "var(--text-tertiary)" }}>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Desarrollo Estructurado
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Documentación Completa
              </span>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div
              className="p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--bg-secondary)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "var(--accent-primary)" }}
              >
                {etapas.length}
              </div>
              <div style={{ color: "var(--text-secondary)" }}>
                Etapas del Proyecto
              </div>
            </div>
            <div
              className="p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--bg-secondary)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "var(--accent-secondary)" }}
              >
                {etapas.reduce((acc, e) => acc + e.desarrollo.length + 1, 0)}
              </div>
              <div style={{ color: "var(--text-secondary)" }}>
                Documentos Totales
              </div>
            </div>
            <div
              className="p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--bg-secondary)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "var(--accent-tertiary)" }}
              >
                100%
              </div>
              <div style={{ color: "var(--text-secondary)" }}>
                Completado
              </div>
            </div>
          </div>

          {/* Etapas Grid */}
          <div className="mb-8">
            <h2
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: "var(--text-primary)" }}
            >
              Explorar Etapas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {etapas.map((etapa, index) => (
                <Link
                  key={etapa.id}
                  to={`/etapa/${etapa.id}`}
                  className="group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className="relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      boxShadow: "var(--shadow-md)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    {/* Gradient Overlay on Hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, var(--deco-1), var(--deco-2))`,
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
                          style={{
                            backgroundColor: "var(--bg-accent)",
                            color: "var(--accent-primary)",
                          }}
                        >
                          {etapa.id}
                        </div>
                        <h3
                          className="text-xl font-bold flex-1"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {etapa.titulo}
                        </h3>
                      </div>

                      {/* Cantidad de documentos */}
                      <div
                        className="flex items-center gap-2 text-sm mb-2"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        {etapa.desarrollo.length + 1} documentos
                      </div>

                      {/* Cantidad de enlaces */}
                      <div
                        className="flex items-center gap-2 text-sm mb-4"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M12 18a6 6 0 110-12 6 6 0 010 12z"
                          />
                        </svg>
                        {etapa.enlaces?.length || 0} enlaces
                      </div>

                      <div
                        className="flex items-center gap-2 font-medium group-hover:gap-3 transition-all"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        Ver documentos
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}