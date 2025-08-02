// app/page.tsx o un componente client
"use client";

import { useState } from "react";
import techData from "../../data/TechData.json";
import PagesLayout from "../../pagesLayout.jsx";

export default function Page() {
  const [name, setName] = useState("");
  const [techDataechList, setTechList] = useState([]);

  const handleAddTech = (e) => {
    e.preventDefault();

    const newTech = {
      name,
    };

    setName("");
  };

  setTechList([...techList, newTech]);

  return (
    <PagesLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Tecnologías disponibles</h1>

        <main className="p-8">
          <h1 className="text-2xl font-bold mb-6">Agregar Tecnología</h1>

          <form onSubmit={handleAddTech} className="space-y-4 mb-8">
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full"
              required
            />
          
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Agregar
            </button>
          </form>

          <h2 className="text-xl font-semibold mb-4">Lista de Tecnologías</h2>
          {techList.length === 0 ? (
            <p className="text-gray-500">
              Aún no has agregado ninguna tecnología.
            </p>
          ) : (
            <div className="space-y-4">
              {techList.map((tech, index) => (
                <div key={index} className="border p-4 rounded bg-gray-100">
                  <h3 className="font-bold">{tech.name}</h3>
                
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </PagesLayout>
  );
}
