import Image from "next/image";
import PagesLayout from "./pagesLayout";
import heroImg from "../app/assets/hero.png";
import "../app/globals.css";
import Stack from "@/app/data/TechData.json";
import codeImage from "@/app/assets/carbon.png";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen w-full hero_bg text-center px-4 py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-tl from-sky-500 to-sky-950 bg-clip-text !text-transparent leading-tight">
          CONSTRUYE TU STACK EN <strong>MINUTOS</strong>
        </h1>

        <p className="text-base sm:text-lg md:text-xl my-5 max-w-2xl mx-auto">
          Con Stacking eliges tecnologías, frameworks y herramientas de forma
          rápida y visual. Selecciona tu stack favorito y copia los comandos
          listos para instalar.
        </p>

        <a
          href="/pages/builder"
          className="mx-auto block cursor-pointer px-6 py-3 bg-[#08080c73] border border-[#202944] text-white rounded-lg hover:bg-[#1b31573d] transition-colors duration-300"
        >
          Crea tu stack
        </a>
      </section>

      <PagesLayout>
        <section className="flex flex-col flex-center items-center gap-10 my-30 mysection md:flex-row">
          <section>
            <Image
              src={heroImg}
              width={1200}
              alt="Hero Image"
              title="Image by pngtree.com"
              className="mask-b-from-20% mask-b-to-100%"
              loading="lazy"
            />
          </section>

          <section>
            <h2 className="font-bold">¿Porque usar Stacking?</h2>
            <p className="text-gray-700 mt-4">
              Usar Stacking significa olvidarte de buscar e instalar cada
              tecnología por separado. <br /> Con unos pocos clics, eliges tu
              stack favorito, personalizas las herramientas que necesitas y
              obtienes todos los comandos listos para copiar y ejecutar. <br />{" "}
              Así ahorras tiempo, evitas errores de configuración y te
              concentras en lo que realmente importa: desarrollar tu proyecto
              desde el primer minuto.
            </p>
          </section>
        </section>

        <section className="flex flex-col flex-center items-center gap-10 mt-60">
          <h2 className=" text-center font-bold">¿Como Funciona?</h2>

          <article className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
            <section className="p-10 w-[400px] md:w-[33%] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#202944"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
              <h3 className="font-bold my-3">Paso 1</h3>
              <p className="">Elige un stack (ej. MERN, MEAN, JAMstack).</p>
            </section>
            <section className="p-10 w-[400px] md:w-[33%] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#202944"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <h3 className="font-bold my-3">Paso 2</h3>
              <p className="">Mira los comandos listos para instalar.</p>
            </section>

            <section className="p-10 w-[400px] md:w-[33%] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#202944"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <h3 className="font-bold my-3">Paso 3</h3>
              <p className="">Copia, pega y ejecuta en tu terminal.</p>
            </section>
          </article>
        </section>

        <article className="mt-80 w-full">
          <h2 className="font-bold my-3 text-center mb-5">Stacks Recientes</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Stack.stacks.slice(-6).map((tech, idx) => (
              <a key={idx} href="/pages/builder">
                <li className="text-gray-700 h-[100%] flex flex-col items-start justify-start p-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-row gap-2 mb-4">
                    {tech.icons.map((url, id) => (
                      <Image
                        key={id}
                        alt="icon"
                        src={url}
                        width={25}
                        height={25}
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <h3 className="font-bold">{tech.name}</h3>
                  <p className="mt-2 text-gray-600">{tech.description}</p>
                </li>
              </a>
            ))}
          </ul>
        </article>

        <article className="flex flex-col flex-center items-center gap-10 mt-80">
          <h2 className="text-center font-bold">Ventajas y Beneficios</h2>

          <article className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
            <section className="p-10 w-[400px] md:w-[33%] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#202944"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <p className="my-3">¡Ahorra tiempo configurando las cosas!</p>
            </section>
            <section className="p-10 w-[400px] md:w-[33%] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#202944"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>

              <p className="my-3">
                Evita cometer errores en tus instalaciones.
              </p>
            </section>

            <section className="p-10 w-[400px] md:w-[33%] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#202944"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
              </svg>
              <p className="my-3">
                Compatible con multiples entornos y facilidad en todo
              </p>
            </section>
          </article>
        </article>

        <section className="flex flex-col flex-center items-center mt-80 gap-10 mysection md:flex-row-reverse">
          <section>
            <Image
              src={codeImage}
              width={1300}
              alt="Hero Image"
              title="Image by pngtree.com"
              className="mask-b-from-50% mask-b-to-100%"
              loading="lazy"
            />
          </section>

          <section>
            <h2 className="font-bold">Un ejemplo de uso</h2>
            <p className="text-gray-700 mt-4">
              Imagina que quieres crear una aplicación web con un stack
              específico. En lugar de buscar cada herramienta por separado,{" "}
              <br />
              simplemente seleccionas el stack que deseas en Stacking.
              <br /> Luego, personalizas las opciones según tus necesidades y,
              con un solo clic, obtienes todos los comandos necesarios para
              poner en marcha tu proyecto. ¡Así de fácil!
            </p>
          </section>
        </section>
      </PagesLayout>

      <section className="flex flex-col items-center justify-center h-[20vh] w-full hero_bg text-center my-40 gap-5">
        <h2 className="">¡Comienza y simplifica tu desarrollo!</h2>
        <a
          href="/pages/builder"
          className="mx-auto block cursor-pointer px-6 py-2 bg-[#08080c73] border border-[#202944] text-white rounded-lg hover:bg-[#1b31573d] transition-colors duration-300"
        >
          Inicia ya
        </a>
      </section>
    </>
  );
}
