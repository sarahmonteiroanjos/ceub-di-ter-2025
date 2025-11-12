window.onload = function () {
   
    const input = document.getElementById("tarefaInput");
    const btnAdicionar = document.getElementById("btnAdicionar");
    const lista = document.getElementById("listaTarefas");

    btnAdicionar.addEventListener("click", () => {
        const texto = input.value.trim();
        
        const li = document.createElement("li");
//Adicionar o valor 
li.textContent = texto;

li.addEventListener("click", () => {
    li.classList.toggle("concluida")
})

// Criar um botão de executar
const btnRemover = this.document.createElement("button")
btnRemover.textContent = "Remover";
btnRemover.style.marginLeft = "10px";
btnRemover.classList.add("fechar");
btnRemover.addEventListener("click", (e) => {
//Deletar o item
li.remove();
});
//Adicionar o  item na lista
lista.appendChild(li);
//Adicione o botão remover
li.appendChild(btnRemover)
input.value = "";

})
};