import Image from "next/image";
import PagesLayout from "./pagesLayout";
import heroImg from "../app/assets/hero.png";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-[100vh] w-full hero_bg">
        <h1>
          CONSTRUYE TU STACK TECNOLÓGICO EN <strong>MINUTOS</strong>
        </h1>
        <p className="text-center my-5 px-20">
          Con Stacking eliges tecnologías, frameworks y herramientas de forma
          rápida y visual. Ahorra tiempo, <br /> organiza tu desarrollo y
          comparte tu stack perfecto con el mundo.
        </p>
        <button className="mx-auto block cursor-pointer px-6 py-2 bg-[#08080c73] border border-[#202944] text-white rounded-lg hover:bg-[#1b31573d] transition-colors duration-300">
          Crea tu stack
        </button>
      </section>
      <PagesLayout>
        <section className="flex flex-row flex-center items-center gap-10 my-30 mysection">
          <section>
            <Image
              src={heroImg}
              alt="Hero Image"
              title="Image by pngtree.com"
              className="mask-b-from-20% mask-b-to-100%"
            />
          </section>

          <section>
            <h2 className="font-bold">¿Porque usar Stacking?</h2>
            <p className="text-gray-700 mt-4">
              Elimina la confusión: no más horas buscando qué tecnologías
              combinar, Stacking te muestra opciones probadas y populares para
              cada capa de tu proyecto. Todo en un solo lugar: frontend,
              backend, base de datos, herramientas de despliegue y más, todo
              organizado y listo para que elijas. Comparte y colabora: guarda tu
              stack, compártelo con tu equipo o publícalo para que otros
              desarrolladores lo usen como referencia. Inspiración instantánea:
              explora stacks creados por otros desarrolladores y descubre nuevas
              tecnologías para tus proyectos.
            </p>
          </section>
        </section>
      </PagesLayout>
    </>
  );
}
