// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe


// creare un array di oggetti per rappresentare i membri del team (nome, ruolo e foto)
const teamMembers = [
    {
        "nome": "Wayne Barnett",
        "role": "Founder & CEO",
        "photo": "wayne-barnett-founder-console.jpg"
    },


    {
        "nome": "Angela",
        "role": "Chief Editor",
        "photo": "img/angela-caroll-chief-editor.jpg"

    },

    {
        "nome": "Walter Gordon",
        "role": "Office Manager",
        "photo": "walter-gordon-office-manager.jpg"

    },

    {
        "nome": "Angela Lopez",
        "role": "Social Media Manager",
        "photo": "angela-lopez-social-media-manager.jpg"

    },

    {
        "nome": "Scott Estrada",
        "role": "Developer",
        "photo": "scott-estrada-developer.jpg"

    },

    {
        "nome": "Barbara Ramos",
        "role": "Graphic Designer",
        "photo": "barbara-ramos-graphic-designer.jpg"

    },

];

console.log(teamMembers);

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
     console.log("Nome: " + member.nome + ", Ruolo: " + member.rule + ", Foto: " + member.photo);
}
