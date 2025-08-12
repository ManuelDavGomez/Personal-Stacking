"use client";

import { useState, useEffect } from "react";
import { getData } from "@/app/lib/githubApi.js";
import Tech from "../../data/Data.json";
import Image from "next/image";

const Filter = () => {
  const [repos, setRepos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  const showMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  useEffect(() => {
    getData(
      "https://api.github.com/search/repositories?q=topic:framework+stars:%3E10000&sort=stars&order=desc&per_page=12"
    )
      .then((data) => {
        setRepos(data.items);
      })
      .catch((err) => console.error(err));
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

          <ul className="flex items-center justify-center gap-5 flex-wrap">
            {repos.map((repo, index) => (
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <li
                  key={index}
                  className="h-130 w-[350px] flex items-start flex-col justify-start p-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300"
                >
                  <Image
                    src={repo.owner.avatar_url}
                    alt={repo.name}
                    width={50}
                    height={50}
                    className="rounded-full mb-3"
                  />
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
