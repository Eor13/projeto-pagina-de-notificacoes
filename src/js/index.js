//- passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

let notificacoes = document.querySelectorAll('.notificacao')
const mensagemAberta = document.querySelectorAll('.mensagem-aberta')


//- passo 2 - dar um jeito de identificar o clique no elemento da aba
notificacoes.forEach(function(notificacao, indice){
    selecionadaMensagem(notificacao)
    verificadorDeTexto(notificacao, indice)
})

//- passo 3 - quando o usuário clicar, desmarcar a aba selecionada
function selecionadaMensagem(notificacao){
        notificacao.addEventListener("click", () =>{
            if(notificacao.classList.contains("nova")){
                notificacao.classList.remove('nova')
                contadorDeMensagemNova()
            }
        })
    }
// passo 4 - mostra e esconder a caixa de mensagem da notificação
let mensagemDaNotificacao = document.querySelectorAll('.notificacao .mensagem')

function verificadorDeTexto(notificacao,indice){
    notificacao.addEventListener("click",() =>{
        if(!mensagemDaNotificacao[indice].classList.contains('mensagem-aberta')){
            mensagemDaNotificacao[indice].classList.add('mensagem-aberta')
        }else {
            mensagemDaNotificacao[indice].classList.remove('mensagem-aberta')
        }
    })
}
    
//- passo 5 - diminuir o número de notificação ao clicar para abri uma nova notificação
let quantidadeNotificacoesNovas = document.querySelector('.quantidade-nova')
let mensagemNova = document.querySelectorAll('.nova')
let quantidade = mensagemNova.length

// passo 5.1 - mostrar na tela a quantidad de novas notificações
mostrarNaTelaContagemMensagemNova()
function mostrarNaTelaContagemMensagemNova(){
    quantidadeNotificacoesNovas.innerText =`${quantidade}`
    
}

// passo 5.2 - alterar na tela a quantidade de novas notificações ao clicar na notificação
function contadorDeMensagemNova(){
    if(quantidade > 0.1){
        quantidade= quantidade-1
        mostrarNaTelaContagemMensagemNova()
    }
    zerarContadorDeNotificacaoClicandoNela()
}

//passo 5.3 - zerar e retirar o CSS quando não tiver Novas notificações
function zerarContadorDeNotificacaoClicandoNela() {
    if(quantidade == 0){
        quantidadeNotificacoesNovas.classList.remove('quantidade-nova')
        quantidade = quantidadeNotificacoesNovas.innerText=``
        mostrarNaTelaContagemMensagemNova()
    }
}
function zerarContadorDeNotificacaoClicandoDesmarcarTodas() {
    if(quantidade){
        quantidadeNotificacoesNovas.classList.remove('quantidade-nova')
        quantidade = quantidadeNotificacoesNovas.innerText=``
        mostrarNaTelaContagemMensagemNova()
    }

}

//- passo 6 - mao clicar no "Marca como lidas" retirar a classe nova
const desmarcarTodasMensagem = document.querySelector('.selecionar-todas')
desmarcarTodasMensagem.addEventListener('click', () =>{
    notificacoes.forEach(function(desmarcarNotificacao){
        desmarcarNotificacao.classList.remove('nova')
        zerarContadorDeNotificacaoClicandoDesmarcarTodas()
    })
})