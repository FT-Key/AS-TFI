import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function VisorPDF() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState(false);
  const containerRef = useRef(null);

  const relativePath = location.pathname.replace("/pdf/", "");
  const pdfUrl = `/pdfs/${relativePath}`;
  const fileName = relativePath.split("/").pop();

  // Verificar si el PDF existe al montar el componente
  useEffect(() => {
    const checkPdfExists = async () => {
      try {
        const response = await fetch(pdfUrl, { method: 'HEAD' });
        if (!response.ok || !response.headers.get('content-type')?.includes('pdf')) {
          setError(true);
          setIsLoading(false);
        }
      } catch (err) {
        setError(true);
        setIsLoading(false);
      }
    };

    checkPdfExists();
  }, [pdfUrl]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Listener para detectar cuando se sale de fullscreen con ESC
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <div
      className="w-full h-screen flex flex-col pt-20"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Header Controls - Solo visible cuando NO está en fullscreen */}
      {!isFullscreen && (
        <div
          className="w-full px-4 py-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          style={{
            backgroundColor: "var(--bg-secondary)",
            boxShadow: "var(--shadow-md)",
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          {/* Botón volver */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 rounded-xl font-medium transition-all hover:scale-105 flex items-center gap-2 text-sm md:text-base"
              style={{
                backgroundColor: "var(--bg-tertiary)",
                color: "var(--text-primary)",
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
          </div>

          {/* Info del archivo */}
          <div className="flex items-center gap-3 w-full md:w-auto">
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
            <div className="text-left overflow-hidden">
              <div
                className="font-semibold truncate max-w-[180px] sm:max-w-xs"
                style={{ color: "var(--text-primary)" }}
              >
                {fileName}
              </div>
              <div
                className="text-sm"
                style={{ color: "var(--text-tertiary)" }}
              >
                Visualizador de PDF
              </div>
            </div>
          </div>

          {/* Acciones (pantalla completa + descargar) */}
          <div className="flex items-center gap-2 justify-end w-full md:w-auto flex-wrap">
            <button
              onClick={toggleFullscreen}
              className="px-4 py-2 rounded-xl text-sm md:text-base font-medium transition-all hover:scale-105 flex items-center gap-2"
              style={{
                backgroundColor: "var(--bg-tertiary)",
                color: "var(--text-primary)",
              }}
              title="Pantalla completa"
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
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
              <span className="hidden sm:inline">Pantalla completa</span>
            </button>

            <a
              href={pdfUrl}
              download
              className="px-4 py-2 rounded-xl font-medium text-sm md:text-base transition-all hover:scale-105 flex items-center gap-2"
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="hidden sm:inline">Descargar</span>
            </a>
          </div>
        </div>
      )}

      {/* PDF Viewer Container */}
      <div
        ref={containerRef}
        className="w-full flex-1 relative"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        {/* Botón salir de pantalla completa - Solo visible EN fullscreen */}
        {isFullscreen && (
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 z-50 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
            style={{
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-primary)",
              border: "2px solid var(--border-color)",
            }}
            title="Salir de pantalla completa"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Salir de pantalla completa
          </button>
        )}

        {/* Loading state */}
        {isLoading && !error && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backgroundColor: "var(--bg-secondary)",
            }}
          >
            <div className="text-center">
              <div
                className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                style={{ borderColor: "var(--accent-primary)" }}
              />
              <p
                className="text-lg font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Cargando PDF...
              </p>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backgroundColor: "var(--bg-secondary)",
            }}
          >
            <div className="text-center max-w-md px-6">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  backgroundColor: "var(--bg-accent)",
                  color: "var(--accent-primary)",
                }}
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                PDF no encontrado
              </h3>
              <p
                className="mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                El archivo que intentas visualizar no existe o no está disponible.
              </p>
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--accent-primary)",
                  color: "#ffffff",
                }}
              >
                Volver atrás
              </button>
            </div>
          </div>
        )}

        {/* Iframe - solo se muestra si no hay error */}
        {!error && (
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            style={{
              backgroundColor: "var(--bg-secondary)",
            }}
            title="PDF Viewer"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        )}
      </div>
    </div>
  );
}