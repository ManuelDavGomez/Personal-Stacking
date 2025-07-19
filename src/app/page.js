import PagesLayout from "./pagesLayout";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-[100vh] w-full hero_bg">
        <h1>
          CONSTRUYE TU STACK TECNOLÓGICO EN <strong>MINUTOS</strong>
        </h1>
        <p className="text-center my-5"> lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea</p>
        <input
          type="text"
          placeholder="Ingresa el nombre de tu proyecto"
          className="border bg-white border-gray-300 rounded-2xl p-2 w-100 mt-6 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </section>
      <PagesLayout>
        <section className="flex flex-row flex-center items-center gap-10 my-30">
          <section>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </section>

          <section>
            <h2 className="font-bold">¿Porque usar Stacking?</h2>
            <p className="text-gray-700 mb-4">
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
