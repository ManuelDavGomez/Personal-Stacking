import React from "react";
import Logo from "../../app/icon1.png";
import Image from "next/image";

const Foot = () => {
  return (
    <>
      <footer class="bg-[#08080c73] mt-40 border-t border-[#202944]">
        <div class="max-w-screen-xl px-4 pt-6 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <section class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div class="flex justify-center items-center gap-2 text-teal-300 sm:justify-start">
                <Image class="w-12 h-12" src={Logo} alt="Company Logo" />
                <h2 className="bg-gradient-to-tl from-sky-500 to-sky-950 bg-clip-text !text-transparent">
                  Stacking
                </h2>
              </div>

              <p class="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
                Con Stacking eliges tecnologías, frameworks y herramientas de
                forma rápida y visual. Ahorra tiempo, organiza tu desarrollo y
                comparte tu stack perfecto con el mundo.
              </p>

              <ul class="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="text-[#0A80F7] transition hover:text-[#1B3157] hover:scale-110"
                  >
                    <span class="sr-only">GitHub</span>
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
              <div class="text-center sm:text-left">
                <p class="text-lg font-medium text-white">Sobre Nosotros</p>

                <nav class="mt-8">
                  <ul class="space-y-4 text-sm">
                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Acerca de
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="text-center sm:text-left">
                <p class="text-lg font-medium text-white">Servicios</p>

                <nav class="mt-8">
                  <ul class="space-y-4 text-sm">
                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Constructor
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Biblioteca
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="text-center sm:text-left">
                <p class="text-lg font-medium text-white">Contactame</p>

                <ul class="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      class="flex items-center justify-center sm:justify-start gap-1.5 group"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 text-white shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span class="text-white transition group-hover:text-white/75">
                        manueldavidgomez2003@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div class="pt-6 mt-12 border-t border-gray-800">
            <div class="text-center sm:flex sm:justify-between sm:text-left">
              <p class="text-sm text-gray-400">
                <span class="block sm:inline">
                  Todos los derechos reservados
                </span>
              </p>

              <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                &copy; 2025 Stacking
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Foot;
