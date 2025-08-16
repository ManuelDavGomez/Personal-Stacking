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
      </PagesLayout>
    </>
  );
}
