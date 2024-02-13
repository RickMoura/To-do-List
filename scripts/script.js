/*
 Buscar botões
*/
const todoForm = document.querySelector('#TodoForm');
const task = document.querySelector('#tasks');
const container = document.querySelector('#container-tasks')
const Done = document.querySelector('.DoneTask');
const Edit = document.querySelector('.Edittask');
const Remove = document.querySelector('.RemoveTask');
const cancelEditBtn = document.querySelector('#BtnCancel');
const EditForm = document.querySelector('#EditForm');
const EditControl = document.querySelector('#edit-control');
let oldInputValue;

/* Verifica se algo foi digitado e encia a Create task que é o valor do input*/

todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // não recarrega a página
    let createTask = task.value;
    // Se eu não digitar nada no Formulário o criação da task não irá ocorrer.
    if(createTask){
        safeTodo(createTask)
    }else {
        alert('[ERRO] Digite algo no campo "Adicionar Tareda".')
    }
})

const formEdit = () => {
    document.querySelector('#edit-control').classList.toggle('hide');
    document.querySelector('#form-control').classList.toggle('hide');
}

/* Verifica se o valor clicado la em baixo é igual ao do valor procurado pelo forEach, e caso for ele da um todoTitle = text que é o valor novo digitado*/

const updateTodo = (text) => {
    const todos = document.querySelectorAll('.task');

    todos.forEach((task) => {
        let todoTitle = task.querySelector('h3')

        if(todoTitle.innerText  === oldInputValue){
            todoTitle.innerText = text;
        }
    }) 

}

/* Criação do molde com valores da Task*/

const safeTodo = (text) => {
    const todo = document.createElement('div');
    todo.classList.add('task')

    const FormTitle = document.createElement('h3');
    FormTitle.innerText = text
    FormTitle.classList.add('Title')
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
    let btnpress = e.target;
    const elementPress = btnpress.closest('div');
    let chieldElement;
    if (elementPress && elementPress.querySelector('h3')){
        chieldElement = elementPress.querySelector('h3').innerText;
    }
    if(btnpress.classList.contains("DoneTask")){
        elementPress.classList.toggle('done')
    }else if(btnpress.classList.contains('RemoveTask')){
        elementPress.remove()
        
    }else if(btnpress.classList.contains("EditTask")){
        formEdit();
        EditForm.value = chieldElement;
        oldInputValue = chieldElement;
    }
})
/* Botão de cancelamento co ID */
cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault()
    formEdit()
})

/* Pegando o submit do Fomulário. Quando vamos pegar dados de um form não usamos o click, mas o submit*/
EditControl.addEventListener('submit', (e) => {
    e.preventDefault();
    let editTitle = EditForm.value;
    if(editTitle){
        updateTodo(editTitle)
    }

    formEdit();
})