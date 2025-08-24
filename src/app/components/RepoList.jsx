import Image from "next/image";
import { useState } from "react";

export default function RepoList({ repos }) {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <section>
      {/* Botones de cambio de vista */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setViewMode("grid")}
          className={`p-2 rounded cursor-pointer ${
            viewMode === "grid"
              ? "bg-[#1b31573d] border border-[#202944]" 
              : "bg-[#08080c73] border border-[#202944]"
          }`}
        >
          {/* Icono Grid */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="#202944"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        </button>

        <button
          onClick={() => setViewMode("list")}
          className={`p-2 rounded cursor-pointer ${
            viewMode === "list"
              ? "bg-[#1b31573d] border border-[#202944]"
              : "bg-[#08080c73] border border-[#202944]"
          }`}
        >
          {/* Icono Lista */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="#202944"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <circle cx="4" cy="6" r="1" />
            <circle cx="4" cy="12" r="1" />
            <circle cx="4" cy="18" r="1" />
          </svg>
        </button>
      </div>

      {/* Contenedor dinámico */}
      <ul
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 "
            : "flex flex-col gap-5"
        }
      >
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex flex-col items-start justify-start p-5 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300">
              <Image
                src={repo.owner.avatar_url}
                alt={repo.name}
                width={50}
                height={50}
                className="rounded-full mb-3"
                loading="lazy"
              />
              <h3>{repo.name}</h3>
              <p className="mt-3">{repo.description}</p>

              <section className="flex items-center gap-3 flex-wrap mt-5">
                <Stat icon="arrows" value={repo.size} />
                <Stat icon="star" value={repo.stargazers_count} />
                <Stat icon="eye" value={repo.watchers_count} />
              </section>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
}

function Stat({ icon, value }) {
  const icons = {
    arrows: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="#202944"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
      </svg>
    ),
    star: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="#202944"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    eye: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="#202944"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  };

  return (
    <article className="flex items-center gap-2">
      {icons[icon]}
      <p>{value}</p>
    </article>
  );
}
