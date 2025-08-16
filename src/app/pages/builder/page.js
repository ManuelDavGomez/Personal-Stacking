"use client";

import { useState } from "react";
import tech from "@/app/data/TechData.json";
import Image from "next/image";

export default function Page() {
  const [selectedStack, setSelectedStack] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const closeModal = () => setSelectedStack(null);

  const handleCopy = (cmd, idx) => {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 1000); // Se quita el mensaje después de 2s
    });
  };

  return (
    <section className="flex justify-center flex-col items-center w-full p-5 pt-32 pb-20">
      <section className="p-8 flex justify-center flex-col items-center w-[100%] min-[1150px]:w-[1100px] min-[450px]:w-[80%] min-[768px]:w-full min-[1300px]:w-[1300px] min-[1500px]:w-[1400px]">
        <h1 className="font-bold mb-10 text-center bg-gradient-to-tl from-sky-500 to-sky-950 bg-clip-text !text-transparent">
          Explora tu Stack
        </h1>

        <hr className="w-full border-t border-[#202944] mb-10" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tech.stacks.map((stack, idx) => (
            <li
              key={idx}
              className="flex flex-col items-start justify-start p-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedStack(stack)}
            >
           
              <div className="flex flex-row gap-2 mb-4">
                {stack.icons.map((url, id) => (
                  <Image key={id} alt="icon" src={url} width={25} height={25} />
                ))}
              </div>

           
              <h3 className="font-bold">{stack.name}</h3>
              <p className="mt-2 text-gray-600">{stack.description}</p>
            </li>
          ))}
        </ul>
        {selectedStack && (
          <section
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <section
              className="bg-[#08080c73] border border-[#202944] text-[#d4d4d4] p-5 rounded-xl w-[90%] max-w-[560px] max-h-[80vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-white mb-4">{selectedStack.name} Códigos</h2>
              <section className="space-y-2">
                {selectedStack.commands.map((cmd, idx) => (
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
                onClick={closeModal}
                className="mt-4 px-4 py-2 rounded-md border border-[#202944] bg-[#08080c73] hover:bg-[#1b31573d] hover:border-[#1B3157] text-white cursor-pointer"
              >
                Cerrar
              </button>
            </section>
          </section>
        )}
      </section>
    </section>
  );
}
