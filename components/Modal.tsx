"use client";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showSendButton?: boolean;
};

export default function Modal({ open, onClose, title, children,showSendButton = true, }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);  

  // lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  // close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // click outside panel to close
  function onOverlayClick(e: React.MouseEvent) {
    if (panelRef.current && !panelRef.current.contains(e.target as Node))
      onClose();
  }

  const root =
    typeof window !== "undefined"
      ? document.getElementById("modal-root")
      : null;
  if (!open || !root) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center ${inter.className}`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
        onMouseDown={onOverlayClick}
      />
      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative z-[101] w-[92vw] max-w-lg rounded-2xl text-black bg-white shadow-2xl border border-slate-200"
      >
        <div className="flex items-center justify-between px-5 py-4 ">
          <h3 className="text-base font-semibold">
            {title ?? "Rejoignez‑nous"}
          </h3>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="p-2 rounded-lg hover:bg-slate-100"
          >
            <svg viewBox="0 0 20 20" className="w-5 h-5" fill="currentColor">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>

        <div className="p-5">{children /* put your form/content here */}</div>

        <div className="px-5 py-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 cursor-pointer rounded-xl border border-slate-200 hover:bg-slate-50"
          >
            Fermer
          </button>
          {showSendButton && ( // <-- affichage conditionnel
            <button className="px-4 py-2 rounded-xl bg-blue-900 text-white hover:bg-blue-950">
              Envoyer
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
