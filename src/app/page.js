import Image from "next/image";
import PagesLayout from "./pagesLayout";
import heroImg from "../app/assets/hero.png";
import "../app/globals.css";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-[100vh] w-full hero_bg text-center">
        <h1 className="bg-gradient-to-tl from-sky-500 to-sky-950 bg-clip-text !text-transparent">
          CONSTRUYE TU STACK EN <strong>MINUTOS</strong>
        </h1>
        <p className="text-center my-5 px-20">
          Con Stacking eliges tecnologías, frameworks y herramientas de forma
          rápida y visual. <br /> Selecciona tu stack favorito y copia los
          comandos listos para instalar
        </p>
        <button className="mx-auto block cursor-pointer px-6 py-2 bg-[#08080c73] border border-[#202944] text-white rounded-lg hover:bg-[#1b31573d] transition-colors duration-300">
          Crea tu stack
        </button>
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

        <section className="flex flex-col flex-center items-center gap-10 my-30">
          <h2 className="mb-5 text-center font-bold">¿Como Funciona?</h2>

          <article className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
            <section className="p-10 w-[400px] md:w-[33%] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-[#08080c73] bg-opacity-10 border border-[#202944] hover:bg-[#1b31573d] hover:bg-opacity-20 transition-all duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#202944"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <h3 className="font-bold my-3">Paso 3</h3>
              <p className="">Copia, pega y ejecuta en tu terminal.</p>
            </section>
          </article>
        </section>
      </PagesLayout>
    </>
  );
}
