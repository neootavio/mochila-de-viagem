const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];


itens.forEach((elemento) => {

    criaElemento(elemento)
    
})


form.addEventListener("submit", (evento) => {
 
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find(elemento => elemento.nome === nome.value);

    console.log(existe)
    
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual);

    itens.push(itemAtual);

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
    

});

function criaElemento(item){

    const novoItem = document.createElement('li');

    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');

    numeroItem.innerHTML = item.quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(botaoDeleta(item.id));

    lista.appendChild(novoItem);

}

var exibeMensagem = function() { 
    var mensagemForaDoIf = 'Caelum'; 
    if(true) { 
        var mensagemDentroDoIf = 'Alura'; 
        console.log(mensagemDentroDoIf)// Alura ;
    } 
    console.log(mensagemForaDoIf); // Caelum 

    console.log(mensagemDentroDoIf); // Alura 
}

function botaoDeleta(id){
    const elementoBotao = document.createElement("button");

    elementoBotao.innerText = "x";

    elementoBotao.addEventListener("click", ()=>{

        deletaElemento(elementoBotao.parentNode, id);
        
    });

    return elementoBotao;
}

function deletaElemento(tag, id){
    tag.remove();

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);
 
    localStorage.setItem("itens", JSON.stringify(itens));
}