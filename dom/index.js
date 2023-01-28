const todoFormElement = document.getElementById("todo-form");
const todoListElement = document.getElementById("todo-list");

todoFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoInputTextElement = document.getElementById("todo-input-text");
  const todoText = todoInputTextElement.value;
  addNewTodo(todoText);
});

function addNewTodo(todoText) {
  const newTodoElement = document.createElement("li");
  const newTodoTextNode = document.createTextNode(todoText);

  newTodoElement.append(newTodoTextNode);
  todoListElement.append(newTodoElement);
}
