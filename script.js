// script.js
function calculateMBTI() {
  // Récupérer les réponses
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const q4 = document.querySelector('input[name="q4"]:checked');

  // Vérifier si toutes les questions sont répondues
  if (!q1 || !q2 || !q3 || !q4) {
    document.getElementById("result").innerText = "Veuillez répondre à toutes les questions.";
    return;
  }

  // Construire le type MBTI
  let mbti = q1.value + q2.value + q3.value + q4.value;

  // Afficher le résultat
  let description = getDescription(mbti);
  document.getElementById("result").innerText = `Votre type MBTI est : ${mbti}\n${description}`;
}

// Fonction pour obtenir une description du type MBTI
function getDescription(mbti) {
  const descriptions = {
    "ENFP": "Vous êtes un idéaliste créatif et enthousiaste, qui aime inspirer les autres.",
    "ENTP": "Vous êtes un innovateur curieux et plein de ressources, toujours à la recherche de nouvelles idées.",
    "INFP": "Vous êtes un rêveur idéaliste, guidé par vos valeurs et vos convictions profondes.",
    "INTP": "Vous êtes un penseur analytique et indépendant, toujours à la recherche de la vérité.",
    "INFJ": "Vous êtes un protecteur calme et intuitif, toujours soucieux du bien-être des autres.",
    "ENFJ": "Vous êtes un leader charismatique et attentionné, qui se soucie profondément des autres.",
    "ISTJ": "Vous êtes une personne fiable et pragmatique, qui valorise la structure et l'efficacité.",
    "ISFJ": "Vous êtes une personne attentionnée et loyale, qui se consacre à aider les autres.",
    "ESTJ": "Vous êtes un organisateur efficace et réaliste, qui aime diriger et structurer.",
    "ESFJ": "Vous êtes un aidant chaleureux et sociable, qui valorise les traditions et les relations.",
    "ISTP": "Vous êtes un artisan observateur et indépendant, toujours prêt à résoudre des problèmes pratiques.",
    "ISFP": "Vous êtes un artiste sensible et adaptable, qui apprécie la beauté et l'harmonie.",
    "ESTP": "Vous êtes un entrepreneur dynamique et audacieux, qui aime l'action et les défis.",
    "ESFP": "Vous êtes un artiste spontané et énergique, qui aime vivre dans l'instant présent.",
    "INTJ": "Vous êtes un stratège indépendant et visionnaire, toujours à la recherche d'amélioration.",
    "ENTJ": "Vous êtes un commandant charismatique et rationnel, qui aime organiser et diriger."
  };
  
  return descriptions[mbti] || "Type MBTI non reconnu.";
}