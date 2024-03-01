
document.body.addEventListener('keydown', (event) => {
  if(event.key === "Enter"){
        addTodo();
      }
});

document.querySelector('.add-button').addEventListener('click', () => {
  addTodo();
})


    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

    const renderTodoList = () => {
      let todoListHTML = '';

      todoList.forEach((todoObject, index) => {
        const {name, dueDate} = todoObject;
        const html = `<div>${name}</div> 
                    <div>${dueDate}</div> 
                    <button class="delete-button">Delete</button>`;
      todoListHTML += html;
      });

    document.querySelector('.js-todo-display').innerHTML = todoListHTML;


    document.querySelectorAll('.delete-button').forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
        saveTodoList();
      })
    })
    };

//     const array = [1, 2, 3, 4, 5];

// // Using forEach
// array.forEach((element, index) => {
//     console.log(`Element at index ${index}: ${element}`);
//     // You can use 'element' directly within this block
// });

// // Using for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(`Element at index ${index}: ${element}`);
//     // You can use 'element' directly within this block
// }



    const addTodo = () => {
      const todoInput = document.querySelector('.js-todo-input');
      const name = todoInput.value;
      const dueDateInput = document.querySelector('.js-date-input');
      const dueDate = dueDateInput.value;
    
      if (name === '' || dueDate === '') {
        alert('Please insert data in the provided fields');
      } else {

      todoList.push({
        name,
        dueDate
      });

      todoInput.value = '';

      renderTodoList();
      saveTodoList();
    }
  };

  const saveTodoList = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  renderTodoList();