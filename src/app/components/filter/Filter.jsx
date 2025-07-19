"use client";

import { useState, useEffect } from "react";
import Tech from "../../data/Data.json";

const Filter = () => {
  const [filtros, setFiltros] = useState({
    name: "",
    type: "",
    language: "",
    website: "",
    description: "",
    usecases: "",
    createdAt: "",
    lastUpdated: "",
  });

  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const filtrados = Tech.filter((item) => {
      return (
        item.name.toLowerCase().includes(filtros.name.toLowerCase()) &&
        item.type.toLowerCase().includes(filtros.type.toLowerCase()) &&
        item.language.toLowerCase().includes(filtros.language.toLowerCase()) &&
        item.website.toLowerCase().includes(filtros.website.toLowerCase()) &&
        item.description
          .toLowerCase()
          .includes(filtros.description.toLowerCase()) &&
        item.usecases
          .join(" ")
          .toLowerCase()
          .includes(filtros.usecases.toLowerCase()) &&
        item.createdAt
          .toLowerCase()
          .includes(filtros.createdAt.toLowerCase()) &&
        item.lastUpdated
          .toLowerCase()
          .includes(filtros.lastUpdated.toLowerCase())
      );
    });

    setResultados(filtrados);
  }, [filtros]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h1 className="mt-20 mb-10 text-center">
        ENCUENTRA LO QUE <strong>NECESITES</strong>
      </h1>
      <section className="text-white">
        <section className="flex items-center justify-center flex-row gap-4 mb-30">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            autoComplete="off"
            value={filtros.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="type"
            placeholder="Tipo"
            value={filtros.type}
            onChange={handleChange}
          />
          <input
            type="text"
            name="usecases"
            placeholder="Casos de uso"
            value={filtros.usecases}
            onChange={handleChange}
          />
        </section>

        <ul className="flex items-center justify-center gap-5 flex-wrap">
          {resultados.map((item, index) => (
            <li
              key={index}
              className="h-70 w-[30%] flex items-start flex-col justify-center p-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944]"
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <section className="flex items-center gap-3 mt-5">
                <h4>Tipo: </h4>
                <p>{item.type}</p>
              </section>

              <div className="flex gap-2 flex-wrap mt-2">
                {item.usecases.map((usecase, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 my-3 text-sm bg-[#1a1a2e] text-white rounded-lg"
                  >
                    {usecase}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Filter;
