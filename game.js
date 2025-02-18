import {quizzitch} from './questions.js';

// Récupérer les emplacements pour injecter la question et les options et bouton suivant
const askQuestion = document.getElementById('question-text');
const answers = document.getElementById('options-text');
const buttonNext = document.getElementById('next-button');
const buttonReplay = document.getElementById('replay-button');

// Variables pour suivre l'état du quiz
let currentQuestionIndex = 0; // Commence à la première question

// Fonction pour afficher une question basée sur l'index actuel
function loadQuestion() {
  answers.innerHTML = ''; // Vider le conteneur des options
  const currentQuestion = quizzitch.questions[currentQuestionIndex]; // Récup question actuelle + réponses
  askQuestion.innerText = currentQuestion.text; // Injecter la question dans le HTML
  // Injecter les options dans le HTML 
  currentQuestion.options.forEach(options => {
    const optionButton = document.createElement('button');
    optionButton.innerText = options;
    answers.classList.add('options');
    optionButton.addEventListener("click", () => {
      alert("click")
    })
    answers.appendChild(optionButton);
  });
}
// Charger la première question au chargement de la page
loadQuestion();

// Comparer entre l'event listener et la correct answer sans sortir du callback de l'event listener.

// const correctAnswer = quizzitch.questions[0].options[0]
// Ajouter un écouteur d'événements pour le bouton "Suivant"
buttonNext.addEventListener('click', () => {
  
  currentQuestionIndex++; // Incrémenter l'index de la question
  if (currentQuestionIndex < quizzitch.questions.length) { // Vérifier s'il reste des questions
    loadQuestion(); // Afficher la question suivante
  } else {
    askQuestion.innerText = 'FIN DU QUIZZ'; // Si plus de questions, indiquer la fin du quiz
    answers.innerHTML = ''; // Effacer les options
    buttonNext.style.display = 'none'; // Cacher le bouton Suivant
    buttonReplay.style.display = 'inline-block'; // Afficher le bouton rejouer
  }
});

// Fonction pour réinitialiser le quiz
buttonReplay.addEventListener('click', () => {
  currentQuestionIndex = 0; // TODO Réinitialiser l'index 
  buttonNext.style.display = 'inline-block'; // Afficher le bouton Suivant
  buttonReplay.style.display = 'none'; // Cacher le bouton rejouer
  loadQuestion(); // TODO Recharger la première question
});

//*********** ETAPE 4 **************   
// // // Récupérer la première question ainsi que ses réponses + la bonne reponse
// const firstQuestion = quizzitch.questions[0];

// // Injecter le texte de la question dans l'emplacement dédié
// askQuestion.innerText = firstQuestion.text;

// // Pour chaque option, créer un bouton et l'ajouter au conteneur
// firstQuestion.options.forEach(options => {
//   const optionButton = document.createElement('button');
//   optionButton.innerText = options;
//   answers.classList.add('options');
//   answers.appendChild(optionButton);
// }); ******/