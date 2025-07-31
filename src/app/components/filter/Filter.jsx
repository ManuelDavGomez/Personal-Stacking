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

  const [repos, setRepos] = useState([]);

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

  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=topic:framework+stars:%3E10000&sort=stars&order=desc&per_page=20"
    )
      .then((res) => res.json())
      .then((data) => setRepos(data.items))
      .catch((err) => console.error(err));
  }, []);

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
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-white"
              key={index}
            >
              <li
                key={index}
                className="h-80 w-[300px] flex items-start flex-col justify-center p-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300"
              >
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <section className="flex items-center gap-3 mt-5">
                  <h4>Tipo: </h4>
                  <p>{item.type}</p>
                </section>

                <section className="flex gap-2 flex-wrap mt-2">
                  {item.usecases.map((usecase, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 my-3 text-sm bg-[#1a1a2e] text-white rounded-lg"
                    >
                      {usecase}
                    </span>
                  ))}
                </section>

                <section className="flex items-center gap-2 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#202944"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <p>{item.stars}</p>
                </section>
              </li>
            </a>
          ))}
        </ul>

        <hr className="my-20 overflow-hidden border-[#202944]"/>

        <section className="flex flex-col items-center justify-center mt-20">
          <h2 className="mb-10">Repositorios Populares</h2>
          <ul className="flex items-center justify-center gap-5 flex-wrap">
            {repos.map((repo) => (
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <li
                  key={repo.id}
                  className="h-110 w-[300px] flex items-start flex-col justify-start p-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300"
                >
                  <h3>{repo.name}</h3>
                  <p className="mt-3">{repo.description}</p>

                  <section className="flex items-center gap-3 flex-wrap mt-5">
                    <article className="flex items-center gap-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#202944"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
                      </svg>
                      <p>{repo.size}</p>
                    </article>

                    <article className="flex items-center gap-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#202944"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <p>{repo.stargazers_count}</p>
                    </article>

                    <article className="flex items-center gap-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#202944"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <p>{repo.watchers_count}</p>
                    </article>
                  </section>
                </li>
              </a>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};

export default Filter;
