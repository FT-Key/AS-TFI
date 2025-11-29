import { useParams, useNavigate } from "react-router-dom";
import { etapas } from "../data/etapas";
import PdfItem from "../components/PdfItem";

export default function Etapa() {
  const { id } = useParams();
  const navigate = useNavigate();
  const etapa = etapas.find((e) => e.id === parseInt(id));

  if (!etapa)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Etapa no encontrada
          </h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-lg font-medium transition-all duration-300"
            style={{
              backgroundColor: "var(--accent-primary)",
              color: "#ffffff",
            }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen pt-32 pb-16 relative">
      {/* Subtle background decoration */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-20"
        style={{ backgroundColor: "var(--accent-primary)" }}
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 rounded-full filter blur-3xl opacity-20"
        style={{ backgroundColor: "var(--accent-secondary)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
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
          className="p-8 rounded-2xl mb-10"
          style={{
            backgroundColor: "var(--bg-secondary)",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
              style={{
                background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`,
                color: "#ffffff",
              }}
            >
              {etapa.id}
            </div>
            <div>
              <h1
                className="text-4xl font-black mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {etapa.titulo}
              </h1>
              <p style={{ color: "var(--text-tertiary)" }}>
                {etapa.desarrollo.length + 1} documentos disponibles
              </p>
            </div>
          </div>
        </div>

        {/* Consigna Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
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
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Consigna
            </h2>
          </div>
          <PdfItem nombre="Consigna" archivo={etapa.consigna} />
        </div>

        {/* Desarrollo Section */}
        {etapa.desarrollo.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "var(--bg-accent)",
                  color: "var(--accent-secondary)",
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
              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Desarrollo
              </h2>
            </div>
            {etapa.desarrollo.map((pdf, i) => (
              <PdfItem key={i} nombre={pdf.nombre} archivo={pdf.archivo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}