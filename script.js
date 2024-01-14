// const btnCreat = document.querySelector('#CreatTask').addEventListener('click', verificar)

// function verificar(){
//     const txtTask = document.querySelector('#tasks').value
//     if(txtTask == ""){
//         alert('[ERRO] Por favor Preencha os campos.')
//     }else{
//         // Criando uma div para a tarefa
//         const containertasks = document.querySelector('#container-tasks') 
//         let item = document.createElement('div')
//         item.classList.add("task")
//         containertasks.appendChild(item)
//         // Criando o h3 filho da div
//         let title = document.createElement('h3');
//         title.innerText = txtTask
//         item.appendChild(title)
//         console.log(item)

    
//     }     
// }


const formConst = document.querySelector('#TodoForm').addEventListener('submit', (e) => {
    // Esse preventDefault é apenas por enquanto que não montei o backend, evita o envio desnecessário para o BackEnd.
    e.preventDefault();
    console.log('Enviado')

})


