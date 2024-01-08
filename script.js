const elementResponse = document.querySelector("#response")
const inputQuestion = document.querySelector("#inputQuestion")
const buttonQuestion = document.querySelector('#buttonQuestion')
const responses = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

const sortRandom = (totalResponses) => {
  return Math.floor(Math.random() * totalResponses);
}

// clicar em fazer pergunta
function sendQuestion() {

  if(inputQuestion.value == "") {
    alert("Digite sua pergunta")
    return
  }

  // desabilitando o botão durante consulta
  buttonQuestion.setAttribute("disabled", true)

  // criando uma div com a pergunta digitada
  const question = "<div>" + inputQuestion.value + "</div>"

  // sorteando uma posição do array
  const randomNumber = sortRandom(responses.length);

  // inserindo a resposta aleatória dentro da tag com o id elementResponse
  elementResponse.innerHTML = question + responses[randomNumber]

  elementResponse.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementResponse.style.opacity = 0;
    buttonQuestion.removeAttribute("disabled")
  }, 3000)
}