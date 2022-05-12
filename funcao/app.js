function chamaQuestao(){
    dropG.style.display='block'
}

const quest = document.getElementById('questao');

function toggleMenu(){
    const dropG = document.getElementById('dropG')
    dropG.classList.toggle('active')
}

quest.addEventListener('click', toggleMenu);

/*==============================================*/

const simula = document.getElementById('simulados');
function chamaSimula(){
    const simulaG = document.getElementById('simulaG')
    simulaG.classList.toggle('ativado')
}
simula.addEventListener('click', chamaSimula);

/*====== Links ========*/
function IrTodasQestoes(){
    location='../paginas/01todasAsQuestoes.html'
}

function IrTodasQestoesInicial(){
    location='paginas/01todasAsQuestoes.html'
}
/*====== Links ========*/


/*========*/

const opcoes = document.getElementById('localLogo')

function abrirOpcs(){
    const menu =document.getElementById('menu')
    menu.classList.toggle('opcoesG')
}

opcoes.addEventListener('click', abrirOpcs)

/*==============*/
function fechaAcesso(){
    const nome = document.getElementById('nNome').value

    const senha = document.getElementById('tSenha').value

    console.log(nome)
    console.log(senha)

    if(nome == "" || senha == ""){
        alert('Falta dados')
    } else if(nome != "admin3636" || senha != "5153"){
        alert('Verifique os dados, acesso negado')
    } else {
        avisoAcesso.style.display='none'
    }
}