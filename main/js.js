// let header1 = document.createElement("h1");
// header1.textContent = "Showmaker";
// let playerInfo = document.querySelector(".player-info")
// playerInfo.appendChild(header1);

// let header2 = document.createElement("h1");
// header2.textContent = "South Korea";
// playerInfo.appendChild(header2);

const openBtn = document.querySelector("#help-toggle");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener('click', function() {
    modalOverlay.classList.add('open-modal');
})

closeBtn.addEventListener('click', function() {
if (event.target.matches('.close-btn') && !event.target.closest('.modal-container').length) {
    modalOverlay.classList.remove('open-modal');
}})


let players = {
    "xPeke": {
      "IGN": "xPeke",
      "Country": "Spain",
      "Team": "Fnatic",
      "FavChamps": ["Kassadin", "Karthus", "LeBlanc"],
      "IsChampion": true
    },
    "LamiaZealot": {
        "IGN": "LaMiaZeaLoT",
        "Country": "Belgium",
        "Team": "Fnatic",
        "FavChamps": ["Corki", "Ezreal", "Sivir"],
        "IsChampion": true
      },
    "Shushei": {
        "IGN": "Shushei",
        "Country": "Poland",
        "Team": "Fnatic",
        "FavChamps": ["Gragas", "Lux", "Alistar"],
        "IsChampion": true
    },
    "Mellisan": {
        "IGN": "Mellisan",
        "Country": "Germany",
        "Team": "Fnatic",
        "FavChamps": ["Janna"],
        "IsChampion": true
    },
    "Cyanide": {
        "IGN": "Cyanide",
        "Country": "Finland",
        "Team": "Fnatic",
        "FavChamps": ["Jarvan", "Amumu", "Lee Sin"],
        "IsChampion": true
    },
    "Lilballz": {
        "IGN": "Lilballz",
        "Country": "Taiwan",
        "Team": "TPA",
        "FavChamps": ["Mundo", "Alistar", "Olaf"],
        "IsChampion": true
    },
    "BeBe": {
        "IGN": "BeBe",
        "Country": "Taiwan",
        "Team": "TPA",
        "FavChamps": ["Ezreal", "Tristana", "KaiSa"],
        "IsChampion": true
    },
    "MiSTakE": {
        "IGN": "MiSTakE",
        "Country": "Taiwan",
        "Team": "TPA",
        "FavChamps": ["Nunu and Willump", "Blitzcrank", "Sona"],
        "IsChampion": true
    },
    "Toyz": {
        "IGN": "Toyz",
        "Country": "Taiwan",
        "Team": "TPA",
        "FavChamps": ["Orianna", "Twisted Fate", "Anivia"],
        "IsChampion": true
    },
    "Stanley": {
        "IGN": "Stanley",
        "Country": "Taiwan",
        "Team": "TPA",
        "FavChamps": ["Shen", "Nidalee", "Jayce"],
        "IsChampion": true
    }
  };

  fetch('https://my-json-server.typicode.com/hesoed/lolesports-wordle')
  .then(response => response.json())
  .then(json => console.log(json.xPeke))