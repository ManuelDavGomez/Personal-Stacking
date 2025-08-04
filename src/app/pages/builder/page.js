// app/page.tsx o un componente client
"use client";

import { useState } from "react";
import techData from "../../data/TechData.json";
import PagesLayout from "../../pagesLayout.jsx";

export default function Page() {
  const [selectedText, setSelectedText] = useState("npm");

  // const [addedOptions, setAddedOptions] = useState([]);

  const options = [
    { label: "npm", value: "npm" },
    { label: "pnpm", value: "pnpm" },
    { label: "yarn", value: "yarn" },
    { label: "bun", value: "bun" },
  ];

  // const handleAddOption = (value) => {
  //   if (!addedOptions.includes(value)) {
  //     setAddedOptions([...addedOptions, value]);
  //   }
  // };

  const handleClick = (value) => {
    setSelectedText(value);
  };

  return (
    <PagesLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Tecnologías disponibles</h1>

        <main>
          <div className="mb-4 bg-black text-white p-4 rounded">
            <code>{selectedText} create vite@latest --- </code>
          </div>

          <div className="flex flex-wrap gap-2">
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleClick(opt.value)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800 transition"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </main>

        {/* <main className="p-10">
          <div className="mb-4 bg-black text-white p-4 rounded">
            <code>{`${selectedText} ${addedOptions.join(" ")}`}</code>
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
        </main> */}
      </div>
    </PagesLayout>
  );
}
