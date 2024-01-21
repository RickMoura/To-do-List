// const btnCreat = document.querySelector('#CreatTask').addEventListener('click', verificar)

// function verificar(){
//     const txtTask = document.querySelector('#tasks').value
//     if(txtTask == ""){
//         alert('[ERRO] Por favor Preencha os campos.')
//     }else{
//         // Criando uma div para a tarefa
//         let referencia = document.getElementById('container-tasks');
//         let newTask = document.createElement('div');
//         newTask.text = `${txtTask}`
//         referencia.appendChild(newTask);
// }}

const todoForm = document.querySelector('#TodoForm');
const task = document.querySelector('#tasks');
const container = document.querySelector('#container-tasks')
/*
 Buscar botões
*/
const Done = document.querySelector('.DoneTask');
const Edit = document.querySelector('.Edittask');
const Remove = document.querySelector('.RemoveTask');


addEventListener('submit', (e) => {
    e.preventDefault();
    let createTask = task.value;
    // Se eu não digitar nada no Formulário o criação da task não irá ocorrer.
    if(createTask){
        safeTodo(createTask)
    }else {
        alert('[ERRO] Digite algo no campo "Adicionar Tareda".')
    }
})
/* Criação do molde com valores da Task*/

const safeTodo = (text) => {
    const todo = document.createElement('div');
    todo.classList.add('task')

    const FormTitle = document.createElement('h3');
    FormTitle.innerText = text
    todo.appendChild(FormTitle);

    const btnDone = document.createElement('button');
    btnDone.classList.add('DoneTask')
    btnDone.innerText = '✔'
    todo.appendChild(btnDone);

    const btnEdit = document.createElement('button');
    btnEdit.classList.add('EditTask');
    btnEdit.innerText = '✎'
    todo.appendChild(btnEdit);

    const btnremove = document.createElement('button');
    btnremove.classList.add('RemoveTask')
    btnremove.innerText = '✘'
    todo.appendChild(btnremove)

    container.appendChild(todo)
    
    task.focus()
    task.value = '';
}
/*Da o evento click a todo o HTML, mas ignora quem não tem as classes especificadas*/
document.addEventListener('click', (e) => {
    let btnpress = e.target
    const elementPress = btnpress.closest('div');

    if(btnpress.classList.contains("DoneTask")){
        elementPress.classList.toggle('done')
    }else if(btnpress.classList.contains('RemoveTask')){
        
        
    }else if(btnpress.classList.contains("EditTask")){
        console.log('Edit')
    }
})

