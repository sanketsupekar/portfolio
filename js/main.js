//####################### Navigation Bar ##############################
const navBarHamburger = document.getElementById("hamburger-icon");
navBarHamburger.addEventListener("click",()=>{
  if(navBarHamburger.checked)
  {
    const navItem = document.querySelectorAll(".menu-items li a");
    navItem.forEach((item)=>{
      item.addEventListener('click',()=>{
        navBarHamburger.checked = false;
      })
    })
    console.log(navItem); 
  }
})
console.log(navBarHamburger.checked);


// ############################ Skill Section ######################
function createLangScore(lang, score) {
  langScore.innerHTML += `
  <div class="lang lang-${lang}">
  <h2 class="sub-content">${lang}</h2>
  <div class="progress-wrapper">
  <div id="${lang}-bar" class="progressBar text-orange"><div></div></div>
  </div>
  </div>`;
  var elem = document.getElementById(lang + "-bar");
  elem.style.width = score +"%";
}


function moveProgressBar(lang, score) {
  var elem = document.getElementById(lang + "-bar");
  var width = 00;
  var id = setInterval(frame);
  function frame() {
    if (width >= score) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}

// ########### Languages ##############
const langScoreContainer = document.getElementById("langScoreContainer");
const langScore = document.createElement("div");
langScore.className = "lang-score";
langScoreContainer.appendChild(langScore);
const langMap = new Map([
  ["java", 80],
  ["python", 65],
  ["html", 89],
  ["css", 70],
  ["javascript", 75],
]);

langMap.forEach((lang, score) => {
  createLangScore(score, lang);
});
langMap.forEach((lang, score) => {
  moveProgressBar(score, lang);
});

//############### Technologies ##################
const techContainer = document.getElementById("techContainer");
const techScore = document.createElement("div");
techScore.className = 'tech-score';
techContainer.appendChild(techScore);

const techMap =new Map([
    ["Web Development",70],
    ["Android Development",30],]
);