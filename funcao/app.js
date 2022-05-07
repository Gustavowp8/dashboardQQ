function chamaQuestao(){
    dropG.style.display='block'
}

const quest = document.getElementById('questao');

function toggleMenu(){
    const dropG = document.getElementById('dropG')
    dropG.classList.toggle('active')
}

quest.addEventListener('click', toggleMenu);

/*================================================*/

const simula = document.getElementById('simulados');
function chamaSimula(){
    const simulaG = document.getElementById('simulaG')
    simulaG.classList.toggle('ativado')
}
simula.addEventListener('click', chamaSimula);