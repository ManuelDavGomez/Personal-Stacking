import React from "react";
import "./Faq.css"; // Assuming you have a CSS file for styling the FAQ component

const Faq = () => {
  return (
    <>
      <section class="accordion">
        <h2>Preguntas Frecuentes</h2>

        <section class="accordion-item">
          <input type="checkbox" id="accordion1" />
          <label for="accordion1" class="accordion-item-title">
            <span class="icon"></span>
            <p>
              ¿Cuánto tiempo debería descansar si sufro una lesión durante la
              práctica de calistenia?
            </p>
          </label>
          <article class="accordion-item-desc">
            <p>
              El tiempo de recuperación varía según la gravedad de la lesión. Si
              experimentas una lesión leve, como un esguince o una distensión
              muscular, es posible que solo necesites unos días de descanso
              seguidos de una reintroducción gradual al entrenamiento. Sin
              embargo, para lesiones más graves, como fracturas o desgarros
              musculares, es importante buscar atención médica y seguir las
              recomendaciones del profesional de la salud.
            </p>
          </article>
        </section>

        <section class="accordion-item">
          <input type="checkbox" id="accordion2" />
          <label for="accordion2" class="accordion-item-title">
            <span class="icon"></span>
            <p>¿Cual es el Objetivo de RouteSthenics?</p>
          </label>
          <article class="accordion-item-desc">
            <p>
              Este sitio se ha creado con el propósito de invitar a personas
              comunes al maravilloso mundo de la calistenia, ofreciendo una
              visión clara y accesible sobre cómo progresar desde ejercicios
              básicos hasta los más desafiantes.
            </p>
          </article>
        </section>

        <section class="accordion-item">
          <input type="checkbox" id="accordion3" />
          <label for="accordion3" class="accordion-item-title">
            <span class="icon"></span>
            <p>¿Necesito equipo especializado para practicar calistenia?</p>
          </label>
          <article class="accordion-item-desc">
            <p>
              No, la calistenia se basa en el uso del peso corporal como
              resistencia, por lo que no se necesita equipo especializado. Sin
              embargo, algunos accesorios como barras de dominadas o bandas de
              resistencia pueden ser útiles para ciertos ejercicios, pero no son
              indispensables para comenzar.
            </p>
          </article>
        </section>

        <section class="accordion-item">
          <input type="checkbox" id="accordion4" />
          <label for="accordion4" class="accordion-item-title">
            <span class="icon"></span>
            <p>
              ¿Es la calistenia adecuada para personas principiantes o de
              cualquier nivel de condición física?
            </p>
          </label>
          <article class="accordion-item-desc">
            <p>
              Sí, la calistenia es adecuada para personas de todos los niveles
              de condición física, desde principiantes hasta avanzados. Los
              ejercicios pueden adaptarse fácilmente para satisfacer las
              necesidades individuales y se pueden progresar gradualmente a
              medida que mejora la fuerza y la habilidad.
            </p>
          </article>
        </section>

        <section class="accordion-item">
          <input type="checkbox" id="accordion5" />
          <label for="accordion5" class="accordion-item-title">
            <span class="icon"></span>
            <p>
              ¿En cada ejercicio, debo hacer todas las progresiones presentes?
            </p>
          </label>
          <article class="accordion-item-desc">
            <p>
              No es necesario seguir cada progresión al pie de la letra. Puedes
              elegir las progresiones que más te interesen. Si bien algunas son
              más esenciales y directas que otras, la clave es encontrar las que
              mejor se adapten a tus gustos y necesidades. ¡Escoge las que más
              te motiven y comencemos, campeones!
            </p>
          </article>
        </section>

        <section class="accordion-item">
          <input type="checkbox" id="accordion6" />
          <label for="accordion6" class="accordion-item-title">
            <span class="icon"></span>
            <p>
              ¿Cuánto tiempo se necesita para ver resultados en la calistenia?
            </p>
          </label>
          <article class="accordion-item-desc">
            <p>
              El tiempo necesario para ver resultados en la calistenia varía
              según varios factores, incluida la consistencia del entrenamiento,
              la dieta y el nivel inicial de condición física. Sin embargo,
              muchos usuarios notan mejoras significativas en fuerza, ​​tono
              muscular y resistencia en unas pocas semanas de práctica regular.
            </p>
          </article>
        </section>

        <section class="accordion-item">
          <input type="checkbox" id="accordion7" />
          <label for="accordion7" class="accordion-item-title">
            <span class="icon"></span>
            <p>¿Cuáles son los beneficios de la calistenia?</p>
          </label>
          <article class="accordion-item-desc">
            <p>
              Los beneficios de la calistenia incluyen el desarrollo de fuerza
              muscular, mejora de la resistencia, aumento de la flexibilidad,
              mejora del equilibrio y la coordinación, y aumento de la masa
              muscular magra. Además, es una forma de ejercicio versátil y
              accesible, ya que no requiere de equipo especializado.
            </p>
          </article>
        </section>

        <section class="accordion-item">
          <input type="checkbox" id="accordion8" />
          <label for="accordion8" class="accordion-item-title">
            <span class="icon"></span>
            <p>¿Cómo puedo prevenir lesiones al practicar calistenia?</p>
          </label>
          <article class="accordion-item-desc">
            <p>
              Para prevenir lesiones durante la práctica de calistenia, es
              importante enfocarse en la técnica adecuada y progresar
              gradualmente en los ejercicios. Asegúrate de realizar un
              calentamiento adecuado antes de cada sesión de entrenamiento y
              escuchar a tu cuerpo, deteniéndote si sientes algún dolor o
              molestia.
            </p>
          </article>
        </section>

        <section class="accordion-item">
          <input type="checkbox" id="accordion9" />
          <label for="accordion9" class="accordion-item-title">
            <span class="icon"></span>
            <p>
              ¿Cuáles son las lesiones más comunes asociadas con la calistenia?
            </p>
          </label>
          <article class="accordion-item-desc">
            <p>
              Las lesiones más comunes en la calistenia suelen ser las
              relacionadas con el sobreuso, como tendinitis, así como lesiones
              en las articulaciones, como esguinces y distensiones musculares.
              Además, el exceso de entrenamiento sin suficiente descanso también
              puede provocar fatiga muscular y lesiones por sobreuso.
            </p>
          </article>
        </section>

        <section class="accordion-item">
          <input type="checkbox" id="accordion10" />
          <label for="accordion10" class="accordion-item-title">
            <span class="icon"></span>
            <p>
              ¿Cómo sé si debo detenerme durante un ejercicio para evitar una
              lesión?
            </p>
          </label>
          <article class="accordion-item-desc">
            <p>
              Es importante escuchar a tu cuerpo durante el entrenamiento de
              calistenia. Si experimentas un dolor agudo o una sensación de
              tensión excesiva durante un ejercicio, es mejor detenerte de
              inmediato para evitar una lesión grave. No ignores el dolor
              persistente, ya que podría ser una señal de que estás
              sobrecargando ciertos músculos o articulaciones.
            </p>
          </article>
        </section>
      </section>
    </>
  );
};

export default Faq;
