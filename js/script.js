// Creare l’array di oggetti con le informazioni fornite

const teamMembers = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
]

const teamDom = document.querySelector(".wrapper")

// Stampare su console le informazioni di nome, ruolo e la stringa della foto

for (let key in teamMembers) {
    console.log(teamMembers[key].nome);
    console.log(teamMembers[key].ruolo);
    console.log(teamMembers[key].foto)

    // Stampare le stesse informazioni su DOM sottoforma di stringhe

    teamDom.innerHTML +=
        `
        <div class="nome">${teamMembers[key].nome}</div> 
        <div class="ruolo">${teamMembers[key].ruolo}</div>
        <div class="ruolo">${teamMembers[key].foto}</div>
        `
}