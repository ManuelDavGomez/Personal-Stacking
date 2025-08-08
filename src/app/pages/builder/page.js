// app/page.tsx o un componente client
"use client";

import { useState } from "react";
import techData from "../../data/TechData.json";
import PagesLayout from "../../pagesLayout.jsx";

export default function Page() {
  const [selectedText, setSelectedText] = useState("npm");
  const [copiado, setCopiado] = useState(false);

  const [addOpt, setAddOpt] = useState([]);

  const options = [
    { label: "npm", value: "npm" },
    { label: "pnpm", value: "pnpm" },
    { label: "yarn", value: "yarn" },
    { label: "bun", value: "bun" },
  ];

  const handleAddOption = (value) => {
    if (!addOpt.includes(value)) {
      setAddOpt(value);
    }
  };

  const handleClick = (value) => {
    setSelectedText(value);
  };

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(
        `${selectedText} create vite@latest ---  ${addOpt}`
      );
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error("Error al copiar al portapapeles: ", err);
    }
  };

  return (
    <>
      <section className="flex justify-center flex-col items-center w-full p-5 pt-32 pb-20">
        <section className="p-8 flex justify-center flex-col items-center w-[100%] min-[1150px]:w-[1100px] min-[450px]:w-[80%] min-[768px]:w-full min-[1300px]:w-[1300px] min-[1500px]:w-[1400px]">
          <h1 className="text-2xl font-bold mb-10 text-center">
            Crea tu Stack
          </h1>
          <hr className="w-full border-t border-[#202944] mb-10" />
          <article className="flex justify-center flex-col w-full">
            <section className="flex items-center flex-wrap gap-2">
              {options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleClick(opt.value)}
                  className=" bg-[#08080c73] border border-[#202944] text-gray-400 px-3 py-1 rounded hover:bg-[#1b31573d] hover:text-white transition cursor-pointer"
                >
                  {opt.label}
                </button>
              ))}
            </section>

            <article className="flex justify-center items-center flex-row">
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <section
                onClick={copiar}
                className="my-4 bg-[#08080c73] border border-[#202944] text-white p-3 rounded w-[100%] flex justify-between items-center cursor-pointer"
              >
                <code>
                  {selectedText} create vite@latest --- {addOpt}{" "}
                </code>

                {copiado && (
                  <span className=" top-2 right-3 text-sm text-green-400">
                    ¡Copiado!
                  </span>
                )}
              </section>
            </article>
            <section>
              {techData.map((tech) => {
                return (
                  <>
                    <button
                      key={tech.name}
                      onClick={() => handleAddOption(tech.name)}
                      className="ml-2 bg-[#08080c73] border border-[#202944] text-gray-400 px-3 py-1 rounded hover:bg-[#1b31573d] hover:text-white transition cursor-pointer"
                    >
                      {tech.name}
                    </button>
                  </>
                );
              })}
            </section>
          </article>

          {/* <main className="p-10">
          <div className="mb-4 bg-black text-white p-4 rounded">
            <code>{`${selectedText} ${addOpt.join(" ")}`}</code>
          </div>

          <div className="flex flex-wrap gap-2">
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAddOption(opt.value)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800 transition"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </main>  */}
        </section>
      </section>
    </>
  );
}
