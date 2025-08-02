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
            <p>¿Qué es el Constructor de Stacks?</p>
          </label>
          <article class="accordion-item-desc">
            <p>
              Es una herramienta interactiva que te permite armar tu propio
              stack tecnológico eligiendo lenguajes, frameworks, bases de datos,
              herramientas de despliegue, y más.
            </p>
          </article>
        </section>

        <section class="accordion-item">
          <input type="checkbox" id="accordion2" />
          <label for="accordion2" class="accordion-item-title">
            <span class="icon"></span>
            <p>¿Qué tecnologías puedo incluir en mi stack?</p>
          </label>
          <article class="accordion-item-desc">
            <p>
              Puedes elegir entre tecnologías frontend (React, Vue, Next.js...),
              backend (Node.js, Django, Express...), bases de datos (MongoDB,
              PostgreSQL...), herramientas de CI/CD, testing, y alojamiento en
              la nube.
            </p>
          </article>
        </section>

        <section class="accordion-item">
          <input type="checkbox" id="accordion3" />
          <label for="accordion3" class="accordion-item-title">
            <span class="icon"></span>
            <p>¿Para quién está pensado este constructor?</p>
          </label>
          <article class="accordion-item-desc">
            <p>
              Está pensado para desarrolladores de todos los niveles:
              principiantes que buscan entender cómo se compone un stack
              moderno, y expertos que quieren comparar o mostrar sus tecnologías
              favoritas.
            </p>
          </article>
        </section>

        <section class="accordion-item">
          <input type="checkbox" id="accordion4" />
          <label for="accordion4" class="accordion-item-title">
            <span class="icon"></span>
            <p>¿El stack que elijo funciona realmente?</p>
          </label>
          <article class="accordion-item-desc">
            <p>
              El constructor está diseñado para combinar tecnologías compatibles
              entre sí, pero siempre es recomendable validar los detalles
              técnicos de integración para proyectos reales.
            </p>
          </article>
        </section>

        <section class="accordion-item">
          <input type="checkbox" id="accordion5" />
          <label for="accordion5" class="accordion-item-title">
            <span class="icon"></span>
            <p>¿Planean agregar más tecnologías?</p>
          </label>
          <article class="accordion-item-desc">
            <p>
              ¡Sí! Nuestro equipo está constantemente actualizando la base de
              datos con nuevas herramientas populares o emergentes en el
              ecosistema tecnológico.
            </p>
          </article>
        </section>
      </section>
    </>
  );
};

export default Faq;
