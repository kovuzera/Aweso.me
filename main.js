function toggleDarkMode() {
    var element = document.body;
  
    element.classList.toggle("darkmode");
  }



const achievements = [{}]

function newAchievementPrompt() {
    let newAchievement = prompt("Conte uma pequena grande conquista de hoje! ❤️")   

    const element = `
    <li>${newAchievement} <button><img src="./assets/trash.svg" alt="Deletar item"></button></li>
    `

    if(newAchievement === '' || newAchievement == null) {
        alert("Você precisa adicionar alguma informação para ela entrar na lista")
    } else {
        document.getElementById('achievements-list').innerHTML += element;

        achievements.push(newAchievement)
    }
}

function removeAchievementFromList() {
    achievements = achievements.splice(0, 1)
}