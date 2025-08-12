"use client";

import { useState, useEffect } from "react";
import { getData } from "@/app/lib/githubApi.js";
import RepoList from "../RepoList";

const Filter = () => {
  const [frameworks, setFrameworks] = useState([]);
  const [reposRecientes, setReposRecientes] = useState([]);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [frameworkData, recientesData, toolsData] = await Promise.all([
          getData(
            "https://api.github.com/search/repositories?q=topic:framework+stars:%3E10000&sort=stars&order=desc&per_page=12"
          ),
          getData(
            "https://api.github.com/search/repositories?q=created:>2025-08-01&sort=stars&order=desc&per_page=12"
          ),
          getData(
            "https://api.github.com/search/repositories?q=topic:developer-tools+stars:%3E10000&sort=stars&order=desc&per_page=12"
          ),
        ]);

        setFrameworks(frameworkData.items || []);
        setReposRecientes(recientesData.items || []);
        setTools(toolsData.items || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchAll();
  }, []);

  return (
    <>
      <h1 className="mt-20 text-center">
        ENCUENTRA LO QUE <strong>NECESITES</strong>
      </h1>
      <section className="text-white">
        <hr className="my-5 overflow-hidden border-[#202944]" />

        <section className="flex flex-col items-center justify-center mt-20">
          <h2 className="mb-10">FRAMEWORKS POPULARES</h2>

          <RepoList repos={frameworks} />
        </section>

        <section className="flex flex-col items-center justify-center mt-20">
          <h2 className="mb-10">PROYECTOS TENDENCIAS DE AGOSTO</h2>
          <RepoList repos={reposRecientes} />
        </section>

        <section className="flex flex-col items-center justify-center mt-20">
          <h2 className="mb-10">HERRAMIENTAS DE DESARROLLO WEB POPULARES</h2>
          <RepoList repos={tools} />
        </section>
      </section>
    </>
  );
};

export default Filter;
