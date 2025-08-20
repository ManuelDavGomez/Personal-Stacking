"use client";
import { useState } from "react";

export default function Filter({
  search,
  setSearch,
  database,
  setDatabase,
  ecosystem,
  setEcosystem,
  category,
  setCategory,
}) {
  const baseStyle =
    "flex flex-col items-start justify-start p-3 rounded-md bg-[#08080c73] border border-[#202944] transition-all duration-300 w-full text-white";

  const databaseOptions = ["MongoDB", "PostgreSQL", "MySQL", "SQLite"];
  const ecosystemOptions = [
    "React",
    "Vue",
    "Svelte",
    "Angular",
    "Solid",
    "Node.js",
    "PHP",
    "Python",
    "Ruby",
    ".NET",
  ];
  const categoryOptions = ["frontend", "backend", "fullstack"];

  const [dbOpen, setDbOpen] = useState(false);
  const [ecoOpen, setEcoOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  const closeAll = () => {
    setDbOpen(false);
    setEcoOpen(false);
    setCatOpen(false);
  };

  const CustomSelect = ({ label, options, value, setValue, open, setOpen }) => (
    <div className="relative w-full">
      <div
        className={`${baseStyle} cursor-pointer`}
        onClick={() => setOpen(!open)}
      >
        {value || label}
      </div>
      {open && (
        <ul className="absolute z-10 w-full mt-1 max-h-60 overflow-auto rounded-md border border-[#202944] bg-[#08080c73] backdrop-blur-sm shadow-lg text-white">
          {/* Opción para resetear */}
          <li
            onClick={() => {
              setValue("");
              closeAll();
            }}
            className="p-3 cursor-pointer hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-200 font-medium"
          >
            {label}
          </li>

          {options.map((opt, idx) => (
            <li
              key={idx}
              onClick={() => {
                setValue(opt);
                closeAll();
              }}
              className="p-3 cursor-pointer hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-200"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      <input
        type="text"
        placeholder="Buscar stack..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={baseStyle}
      />

      <CustomSelect
        label="Todas las bases de datos"
        options={databaseOptions}
        value={database}
        setValue={setDatabase}
        open={dbOpen}
        setOpen={setDbOpen}
      />

      <CustomSelect
        label="Todos los ecosistemas"
        options={ecosystemOptions}
        value={ecosystem}
        setValue={setEcosystem}
        open={ecoOpen}
        setOpen={setEcoOpen}
      />

      <CustomSelect
        label="Todas las categorías"
        options={categoryOptions}
        value={category}
        setValue={setCategory}
        open={catOpen}
        setOpen={setCatOpen}
      />
    </section>
  );
}
