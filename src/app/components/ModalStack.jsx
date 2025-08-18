"use client";

import { useState } from "react";

export default function ModalStack({ stack, onClose }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (cmd, idx) => {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 1000);
    });
  };

  if (!stack) return null;

  return (
    <section
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <section
        className="bg-[#08080c73] border border-[#202944] text-[#d4d4d4] p-5 rounded-xl w-[90%] max-w-[560px] max-h-[80vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-white mb-4">{stack.name} Códigos</h2>
        <section className="space-y-2">
          {stack.commands.map((cmd, idx) => (
            <section
              key={idx}
              className="flex items-center justify-between gap-3 bg-[#08080c73] border border-[#202944] rounded-lg p-2"
            >
              <code className="text-[#9cdcfe] text-sm">{cmd}</code>
              <button
                onClick={() => handleCopy(cmd, idx)}
                className="shrink-0 px-3 py-1 rounded-md border border-[#202944] bg-[#08080c73] hover:bg-[#1b31573d] hover:border-[#1B3157] text-gray-400 cursor-pointer"
              >
                {copiedIndex === idx ? "✅ Copiado!" : "📋 Copiar"}
              </button>
            </section>
          ))}
        </section>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 rounded-md border border-[#202944] bg-[#08080c73] hover:bg-[#1b31573d] hover:border-[#1B3157] text-white cursor-pointer"
        >
          Cerrar
        </button>
      </section>
    </section>
  );
}
