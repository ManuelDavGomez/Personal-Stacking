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
        <p className="text-center my-5">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea
        </p>
        <button className=" mx-auto block cursor-pointer px-6 py-2 bg-[#08080c73] border border-[#202944] text-white rounded-lg hover:bg-[#1b31573d] transition-colors duration-300">
          Ver Ahora
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
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </section>
      </PagesLayout>
    </>
  );
}
