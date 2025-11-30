import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  FileText,
  CheckCircle,
  ArrowRight,
  User,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden pt-28">

      {/* -------------------------- DECORACIONES DE FONDO -------------------------- */}
      <div className="bg-decoration circle-1"></div>
      <div className="bg-decoration circle-2"></div>
      <div className="bg-decoration circle-3"></div>
      <div className="bg-decoration square-1"></div>

      {/* -------------------------- SECCIÓN HERO -------------------------- */}
      <section className="relative z-10 text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Proyecto de Relevamiento y Propuesta de Sistema
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Página de presentación del trabajo final de la materia{" "}
          <strong>Análisis de Sistemas – 2K1</strong>, 2° año de la Carrera
          Ingeniería en Sistemas de Información.
        </motion.p>
      </section>

      {/* -------------------------- SECCIÓN PROBLEMA / OPORTUNIDAD -------------------------- */}
      <section className="relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white/60 dark:bg-black/30 backdrop-blur-lg p-10 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Problema Detectado
          </h2>

          <p className="text-lg mb-4" style={{ color: "var(--text-secondary)" }}>
            El sector de <strong>Customer Care</strong> atendía consultas,
            reclamos y solicitudes, pero no contaba con un sistema para{" "}
            <strong>documentar y dar seguimiento</strong> a los casos.
          </p>

          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            La comunicación dependía de herramientas externas como Slack y
            WhatsApp, generando pérdidas de información, falta de trazabilidad y
            demoras.
          </p>
        </motion.div>
      </section>

      {/* -------------------------- SECCIÓN SOLUCIÓN PROPUESTA -------------------------- */}
      <section className="relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white/60 dark:bg-black/30 backdrop-blur-xl p-10 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
            Sistema Propuesto
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 border rounded-xl shadow-sm bg-[var(--bg-secondary)]">
              <Users size={40} className="text-[var(--accent-primary)] mb-4" />
              <h3 className="font-semibold text-xl mb-2">Gestión de Reclamos</h3>
              <p className="text-[var(--text-secondary)]">
                Registro, clasificación y seguimiento completo hasta la
                resolución final.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 border rounded-xl shadow-sm bg-[var(--bg-secondary)]">
              <MessageSquare size={40} className="text-[var(--accent-secondary)] mb-4" />
              <h3 className="font-semibold text-xl mb-2">Chat Interno</h3>
              <p className="text-[var(--text-secondary)]">
                Eliminación de dependencia de terceros con un sistema propio de
                mensajería para consultas inmediatas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 border rounded-xl shadow-sm bg-[var(--bg-secondary)]">
              <CheckCircle size={40} className="text-[var(--accent-tertiary)] mb-4" />
              <h3 className="font-semibold text-xl mb-2">Trazabilidad Completa</h3>
              <p className="text-[var(--text-secondary)]">
                Historial detallado de cada caso para auditorías y métricas del servicio.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* -------------------------- TIMELINE DEL PROYECTO -------------------------- */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center" style={{ color: "var(--text-primary)" }}>
            Etapas del Proyecto
          </h2>

          <div className="space-y-6">
            {[
              "Etapa 1: Relevamiento + Nota a la empresa",
              "Etapa 2: Análisis del sistema actual",
              "Etapa 3: Propuesta de solución + Modelados",
              "Etapa 4: Documentación final + Nota de cierre",
            ].map((etapa, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-[var(--accent-primary)] pl-6 py-3"
              >
                <p className="text-lg font-medium" style={{ color: "var(--text-secondary)" }}>
                  {etapa}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- EQUIPO -------------------------- */}
      <section className="relative z-10 px-6 py-28">
        <h2
          className="text-3xl font-semibold text-center mb-12"
          style={{ color: "var(--text-primary)" }}
        >
          Nuestro Equipo
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "Reynoso, Gabriel Oscar",
              legajo: "58146",
            },
            {
              name: "Toledo, Franco Nicolás",
              legajo: "43739",
            },
            {
              name: "Solaliga Montiel, Samuel Nazareno",
              legajo: "58328",
            },
          ].map((person, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center bg-white/70 dark:bg-black/20 p-8 rounded-2xl shadow-lg backdrop-blur-xl"
            >
              {/* Avatar */}
              <div className="w-28 h-28 mb-5 rounded-full bg-[var(--deco-2)] shadow-md flex items-center justify-center">
                <User size={48} className="text-white opacity-90" />
              </div>

              {/* Texto */}
              <h3
                className="font-semibold text-xl mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {person.name}
              </h3>

              <p className="text-[var(--text-secondary)] text-base">
                Legajo: {person.legajo}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------------------- DOCENTES -------------------------- */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto bg-white/50 dark:bg-black/25 p-10 rounded-2xl backdrop-blur-xl shadow-xl">
          <h2 className="text-3xl font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
            Docentes a Cargo
          </h2>

          <ul className="space-y-3 text-lg" style={{ color: "var(--text-secondary)" }}>
            <li>• <strong>Valla Sandra Fabiana</strong> (Práctica)</li>
            <li>• <strong>Del Prado Liliana</strong> (Teoría)</li>
          </ul>
        </div>
      </section>

      {/* -------------------------- FOOTER -------------------------- */}
      <footer className="py-12 text-center" style={{ color: "var(--text-tertiary)" }}>
        © 2025 – Proyecto Académico 2K1 – Ingeniería en Sistemas de Información
      </footer>
    </div>
  );
}
