import { Link } from "react-router-dom";

export default function PdfItem({ nombre, archivo }) {
  const filePath = archivo.replace("/pdfs/", "");

  return (
    <div
      className="group p-5 rounded-xl mb-4 transition-all duration-300 hover:scale-102"
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border-color)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-3 flex-1">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
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
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <span
              className="font-semibold text-lg block"
              style={{ color: "var(--text-primary)" }}
            >
              {nombre}
            </span>
            <span
              className="text-sm"
              style={{ color: "var(--text-tertiary)" }}
            >
              PDF Document
            </span>
          </div>
        </div>

        <Link
          to={`/pdf/${filePath}`}
          className="px-5 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
          style={{
            backgroundColor: "var(--accent-primary)",
            color: "#ffffff",
          }}
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
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Ver PDF
        </Link>
      </div>
    </div>
  );
}