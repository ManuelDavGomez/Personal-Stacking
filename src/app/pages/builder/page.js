// app/page.tsx o un componente client
"use client";

import { useState } from "react";
import techData from "../../data/TechData.json";
import Image from "next/image";

export default function Page() {
  const frontendCategories = techData.frontend;
  const backendCategories = techData.backend;

  const [selectedText, setSelectedText] = useState("npm");
  const [copiado, setCopiado] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState({});

  const options = [
    { label: "npm", value: "npm" },
    { label: "pnpm", value: "pnpm" },
    { label: "yarn", value: "yarn" },
    { label: "bun", value: "bun" },
  ];

  const handleSelect = (section,category, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
       [`${section}-${category}`]: value, // solo cambia esa categoría
    }));
  };

  const handleClick = (value) => {
    setSelectedText(value);
  };

  const copiar = async () => {
    try {
      const all = Object.values(selectedOptions).join(" ");

      await navigator.clipboard.writeText(
        `${selectedText} create vite@latest ---  ${all}`
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
                  {selectedText} create vite@latest ---{" "}
                  {Object.values(selectedOptions).join(" ")}
                </code>

                {copiado && (
                  <span className=" top-2 right-3 text-sm text-green-400">
                    ¡Copiado!
                  </span>
                )}
              </section>
            </article>

            <article className="flex w-full flex-row gap-5 mt-10 p-10 border border-[#202944] justify-center items-start">
              {/* ahuevo */}
              <section className="flex justify-center flex-col items-start flex-wrap gap-2 p-5 w-[50%]">
                <h2 className="font-bold mb-3">Frontend</h2>
                 <hr className="w-full border-t border-[#202944] mb-3" />
                {Object.entries(frontendCategories).map(
                  ([categoryName, items]) => (
                    <section key={categoryName}>
                      <h3 className="font-bold my-3 !text-gray-600">
                        {categoryName}
                      </h3>

                      <section className="flex gap-2 flex-wrap">
                        {items.map((item, i) => (
                          <button
                            key={i}
                            onClick={() =>
                              handleSelect("frontend",categoryName, item.name)
                            }
                            className={`px-2 hover:bg-[#1b31573d] hover:border-[#1B3157] flex items-center gap-1 py-1 rounded border cursor-pointer ${
                              selectedOptions[categoryName] === item.name
                                ? "bg-[#1b31573d] text-white"
                                : "bg-[#08080c73] border border-[#202944] text-gray-300"
                            }`}
                          >
                            <Image
                              src={item.icon}
                              alt={item.name}
                              width={15}
                              height={15}
                            />
                            {item.name}
                          </button>
                        ))}
                      </section>
                    </section>
                  )
                )}
              </section>

              {/* ---- */}

              <section className="flex justify-center flex-col items-start flex-wrap gap-2 p-5 w-[50%]">
                <h2 className="font-bold mb-3">Backend</h2>
                 <hr className="w-full border-t border-[#202944] mb-3" />
                {Object.entries(backendCategories).map(
                  ([categoryName, items]) => (
                    <section key={categoryName}>
                      <h3 className="font-bold my-3 !text-gray-600">
                        {categoryName}
                      </h3>

                      <section className="flex gap-2 flex-wrap">
                        {items.map((item, i) => (
                          <button
                            key={i}
                            onClick={() =>
                              handleSelect("backend",categoryName, item.name)
                            }
                            className={`px-2 hover:bg-[#1b31573d] hover:border-[#1B3157] flex items-center gap-1 py-1 rounded border cursor-pointer ${
                              selectedOptions[categoryName] === item.name
                                ? "bg-[#1b31573d] text-white"
                                : "bg-[#08080c73] border border-[#202944] text-gray-300"
                            }`}
                          >
                            <Image
                              src={item.icon}
                              alt={item.name}
                              width={15}
                              height={15}
                            />
                            {item.name}
                          </button>
                        ))}
                      </section>
                    </section>
                  )
                )}
              </section>
            </article>
          </article>
        </section>
      </section>
    </>
  );
}
