import { useNavigate } from "react-router-dom";
import PdfItem from "../components/PdfItem";

export default function Documentacion() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-16 relative">
      {/* Background decoration */}
      <div
        className="absolute top-20 left-0 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 rounded-full filter blur-3xl opacity-20"
        style={{ backgroundColor: "var(--accent-tertiary)" }}
      />
      <div
        className="absolute bottom-20 right-0 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 rounded-full filter blur-3xl opacity-20"
        style={{ backgroundColor: "var(--accent-secondary)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 px-4 sm:px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
          style={{
            backgroundColor: "var(--bg-secondary)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-color)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver
        </button>

        {/* Header */}
        <div
          className="p-6 sm:p-8 rounded-2xl mb-10"
          style={{
            backgroundColor: "var(--bg-secondary)",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, var(--accent-tertiary), var(--accent-secondary))`,
                color: "#ffffff",
              }}
            >
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h1
                className="text-3xl sm:text-4xl font-black mb-2 leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Documentación Firmada
              </h1>
              <p className="text-sm sm:text-base" style={{ color: "var(--text-tertiary)" }}>
                Documentos oficiales del proyecto
              </p>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div
          className="p-5 sm:p-6 rounded-xl mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            backgroundColor: "var(--bg-accent)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: "var(--accent-primary)",
              color: "#ffffff",
            }}
          >
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3
              className="font-semibold mb-1 text-lg"
              style={{ color: "var(--text-primary)" }}
            >
              Documentos Legales
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Esta sección contiene las notas firmadas que autorizan y confirman
              el desarrollo del Proyecto Integrador.
            </p>
          </div>
        </div>

        {/* Documents List */}
        <div>
          <h2
            className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3"
            style={{ color: "var(--text-primary)" }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: "var(--bg-accent)",
                color: "var(--accent-primary)",
              }}
            >
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            Archivos Disponibles
          </h2>

          {/* ORDEN CORRECTO */}
          <PdfItem
            nombre="Nota de Presentación (Solicitud de Autorización)"
            archivo="/pdfs/documentacion/nota_presentacion.pdf"
          />

          <PdfItem
            nombre="Nota de Confirmación (Trabajo Realizado)"
            archivo="/pdfs/documentacion/nota_confirmacion.pdf"
          />
        </div>
      </div>
    </div>
  );
}
