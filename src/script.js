const perguntas = document.querySelectorAll("[data-pergunta] button");
const respostas = document.querySelectorAll("[data-resposta]");

function handleClick(event) {
  event.preventDefault();
  const perguntaDiv = event.target.parentNode.parentNode;
  const pergunta = event.target.getAttribute("aria-controls");
  const resposta = document.getElementById(pergunta);
  console.log(perguntaDiv);

  // Esconde todas as respostas e remove a sombra das divs que não forem da pergunta clicada
  respostas.forEach((resposta) => {
    if (resposta.getAttribute("id") !== pergunta) {
      resposta.classList.add("hidden");

      resposta.parentNode.classList.remove("shadow-md");
      resposta.parentNode.classList.remove("shadow-[#a8d4ff]");
    }
  });

  // Exibe a resposta da pergunta clicada e adiciona uma sombra
  if (resposta.classList.contains("hidden")) {
    resposta.classList.remove("hidden");

    perguntaDiv.classList.add("shadow-md");
    perguntaDiv.classList.add("shadow-[#a8d4ff]");
  } else {
    resposta.classList.add("hidden");

    perguntaDiv.classList.remove("shadow-md");
    perguntaDiv.classList.remove("shadow-[#a8d4ff]");
  }
}

if (perguntas.length && respostas.length) {
  perguntas.forEach((btn) => {
    btn.addEventListener("click", handleClick);
  });
}
