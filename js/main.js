// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


const teamContainer = document.querySelector('.team-container');

// creare un array di oggetti per rappresentare i membri del team con (nome, ruolo e foto)
const teamMembers = [
    {
        "nome": "Wayne Barnett",
        "role": "Founder & CEO",
        "photo": "img/wayne-barnett-founder-ceo.jpg"
    },


    {
        "nome": "Angela",
        "role": "Chief Editor",
        "photo": "img/angela-caroll-chief-editor.jpg"

    },

    {
        "nome": "Walter Gordon",
        "role": "Office Manager",
        "photo": "img/walter-gordon-office-manager.jpg"

    },

    {
        "nome": "Angela Lopez",
        "role": "Social Media Manager",
        "photo": "img/angela-lopez-social-media-manager.jpg"

    },

    {
        "nome": "Scott Estrada",
        "role": "Developer",
        "photo": "img/scott-estrada-developer.jpg"

    },

    {
        "nome": "Barbara Ramos",
        "role": "Graphic Designer",
        "photo": "img/barbara-ramos-graphic-designer.jpg"

    },

];

console.log(teamMembers);



// // Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// for (let i = 0; i < teamMembers.length; i++) {
//     const member = teamMembers[i];
//     // console.log("Nome: " + member.nome + ", Ruolo: " + member.rule + ", Foto: " + member.photo);
//     console.log(member.nome);
    
//     let memberName = document.createElement("div");
//     memberName.innerHTML = member.nome;
//     teamContainer.append(memberName);

//     let memberRole = document.createElement("div");
//     memberRole.innerHTML = member.role;
//     teamContainer.append(memberRole);

//     let memberImg = document.createElement("img");
//     memberImg.src = member.photo;
//     teamContainer.append(memberImg);

// }


// // Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let key in teamMembers) {
    const member = teamMembers[key];

    console.log("Nome: " + member.nome);
    console.log("Ruolo: " + member.role);
    console.log("Foto: " + member.photo);
    
    // Stampare le stesse informazioni su DOM sotto forma di stringhe
    let memberImg = document.createElement("img");
    memberImg.src = member.photo;
    teamContainer.append(memberImg);

    let memberName = document.createElement("div");
    memberName.innerHTML = member.nome;
    teamContainer.append(memberName);

    let memberRole = document.createElement("div");
    memberRole.innerHTML = member.role;
    teamContainer.append(memberRole);
}
