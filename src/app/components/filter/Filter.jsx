'use client'

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
      item.description.toLowerCase().includes(filtros.description.toLowerCase()) &&
      item.usecases.join(" ").toLowerCase().includes(filtros.usecases.toLowerCase()) &&
      item.createdAt.toLowerCase().includes(filtros.createdAt.toLowerCase()) &&
      item.lastUpdated.toLowerCase().includes(filtros.lastUpdated.toLowerCase())
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
    <div>
      <h2>Filtros</h2>
      <input type="text" name="name" placeholder="Nombre" value={filtros.name} onChange={handleChange} />
      <input type="text" name="type" placeholder="Tipo" value={filtros.type} onChange={handleChange} />
      <input type="text" name="language" placeholder="Lenguaje" value={filtros.language} onChange={handleChange} />
      <input type="text" name="website" placeholder="Sitio web" value={filtros.website} onChange={handleChange} />
      <input type="text" name="description" placeholder="Descripción" value={filtros.description} onChange={handleChange} />
      <input type="text" name="usecases" placeholder="Casos de uso" value={filtros.usecases} onChange={handleChange} />
      <input type="text" name="createdAt" placeholder="Creado en" value={filtros.createdAt} onChange={handleChange} />
      <input type="text" name="lastUpdated" placeholder="Actualizado en" value={filtros.lastUpdated} onChange={handleChange} />

      <h2>Resultados</h2>
      <ul>
        {resultados.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
