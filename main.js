function toggleDarkMode() {
  var element = document.body;

  element.classList.toggle("darkmode");
}

const achievements = [];

function removeAchievementFromList(event) {
    

    document.getElementById('achievements-list').removeChild(event.target.parentNode.parentNode)

  console.log(event)
}

// removeAchievementFromList()

function newAchievementPrompt() {
  let newAchievement = prompt("Conte uma pequena grande conquista de hoje! ❤️");

  const element = `
    <li class="new-list-item">${newAchievement} <button><img src="./assets/trash.svg" alt="Deletar item" onclick="removeAchievementFromList(event)"></button></li>
    `;

    
    if (newAchievement === "" || newAchievement == null) {
        alert("Você precisa adicionar alguma informação para ela entrar na lista");
    } else {
        document.getElementById("achievements-list").innerHTML += element;
        
        achievements.push(newAchievement);
    }
    console.log(achievements);
}
