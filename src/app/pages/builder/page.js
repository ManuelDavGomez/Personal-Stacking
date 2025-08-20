"use client";

import { useState } from "react";
import tech from "@/app/data/TechData.json";
import Image from "next/image";
import ModalStack from "../../components/ModalStack.jsx";
import Filter from "@/app/components/Filter.jsx";

export default function Page() {
  const [selectedStack, setSelectedStack] = useState(null);

  // Estados de filtros
  const [search, setSearch] = useState("");
  const [database, setDatabase] = useState("");
  const [ecosystem, setEcosystem] = useState("");
  const [category, setCategory] = useState("");

  // Filtrar stacks
  const filteredStacks = tech.stacks.filter((stack) => {
    const searchLower = search.toLowerCase();
    const nameMatch = stack.name.toLowerCase().includes(searchLower);
    const techMatch = stack.technology.some((tech) =>
      tech.toLowerCase().includes(searchLower)
    );
    return (
      (nameMatch || techMatch) &&
      (database ? stack.database === database : true) &&
      (ecosystem ? stack.ecosystem === ecosystem : true) &&
      (category ? stack.category === category : true)
    );
  });

  return (
    <>
      <section className="flex justify-center flex-col items-center w-full p-5 pt-32 pb-20">
        <section className="p-8 flex justify-center flex-col items-center w-[100%] min-[1150px]:w-[1100px] min-[450px]:w-[80%] min-[768px]:w-full min-[1300px]:w-[1300px] min-[1500px]:w-[1400px]">
          <h1 className="font-bold mb-5 text-center bg-gradient-to-tl from-sky-500 to-sky-950 bg-clip-text !text-transparent">
            Por si necesitas
          </h1>
          <p className="text-center">
            En esta sección encontrarás los paquetes y gestores necesarios para
            instalar y configurar diferentes tecnologías en tu entorno de
            desarrollo. Se instala en las paginas oficiales, solo copias en tu
            navegador y sigues los pasos.
          </p>

          <hr className="w-full border-t border-[#202944] my-10" />

          {/* Package Managers */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tech.packageManagers.map((pack, idx) => (
              <li
                key={idx}
                className="flex flex-col items-start justify-start p-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedStack(pack)}
              >
                <div className="flex flex-row gap-2 mb-4">
                  {pack.icons.map((url, id) => (
                    <Image
                      key={id}
                      alt="icon"
                      src={url}
                      width={25}
                      height={25}
                    />
                  ))}
                </div>
                <h3 className="font-bold">{pack.name}</h3>
                <p className="mt-2 text-gray-600">{pack.description}</p>
              </li>
            ))}
          </ul>

          <h1 className="font-bold mb-5 text-center bg-gradient-to-tl from-sky-500 to-sky-950 bg-clip-text !text-transparent mt-40">
            Stacks Tecnológicos
          </h1>
          <hr className="w-full border-t border-[#202944] mb-10" />

          {/* Pasamos handlers y valores al filtro */}
          <Filter
            search={search}
            setSearch={setSearch}
            database={database}
            setDatabase={setDatabase}
            ecosystem={ecosystem}
            setEcosystem={setEcosystem}
            category={category}
            setCategory={setCategory}
          />

          {/* Stacks */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {filteredStacks.map((stack, idx) => (
    <li
      key={idx}
      className="flex flex-col items-start justify-start p-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300 cursor-pointer relative"
      onClick={() => setSelectedStack(stack)}
    >
      <div className="flex items-center gap-2 mb-5">
        {stack.isNew && (
          <>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold text-green-500">NUEVO</span>
          </>
        )}
      </div>

      <div className="flex flex-row gap-2 mb-4">
        {stack.icons.map((url, id) => (
          <Image
            key={id}
            alt="icon"
            src={url}
            width={25}
            height={25}
          />
        ))}
      </div>
      <h3 className="font-bold">{stack.name}</h3>
      <p className="mt-2 text-gray-600">{stack.description}</p>
    </li>
  ))}
</ul>


          {/* Modal ÚNICO */}
          <ModalStack
            stack={selectedStack}
            onClose={() => setSelectedStack(null)}
          />
        </section>
      </section>
    </>
  );
}
