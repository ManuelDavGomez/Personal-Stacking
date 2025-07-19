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
      </section>
    </>
  );
};

export default Faq;
