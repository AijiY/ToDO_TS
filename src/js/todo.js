export const data = {
  todoList: [],
  filterWord: "",
}

// 入力された新しいTODOの値を取得し、todoList変数に代入する関数
export const registerNewTodo = () => {
  const newTodoName = document.getElementById("new-todo-name");
  const newPerson = document.getElementById("new-person");
  const newDeadline = document.getElementById("new-deadline");
  data.todoList.push({
    id: Date.now(),
    todoName: newTodoName.value,
    person: newPerson.value,
    deadline: newDeadline.value,
  });
};

// TODO一覧を全て削除する関数
const removeTodoListElem = () => {
  const tbodyElem = document.getElementById("todo-list");
  while (tbodyElem.firstChild) {
    tbodyElem.firstChild.remove();
  }
};

// 引数にidを受け取り、todoListの中から該当するtodoを削除する関数
const removeTodoById = (id) =>
  (data.todoList = data.todoList.filter((todo) => todo.id !== id));

// TODO一覧を表示する関数
export const appendTodoListElem = () => {
  // TODO一覧を全て削除
  removeTodoListElem();

  data.todoList
    .filter(
      (todo) =>
        todo.todoName.includes(data.filterWord) || todo.person.includes(data.filterWord)
    )
    .forEach((todo) => {
      // todoNameのtd要素を生成
      const todoNameTdElem = document.createElement("td");
      todoNameTdElem.textContent = todo.todoName;
      // personのtd要素を生成
      const personTdElem = document.createElement("td");
      personTdElem.textContent = todo.person;
      // deadlineのtd要素を生成
      const deadlineTdElem = document.createElement("td");
      deadlineTdElem.textContent = todo.deadline;

      // 削除のbutton要素を生成
      const removeButtonElem = document.createElement("button");
      removeButtonElem.textContent = "削除";
      removeButtonElem.addEventListener("click", () => {
        // 削除ボタンがクリックされたときに該当のtodoを削除する
        removeTodoById(todo.id);
        appendTodoListElem();
      });

      // 削除ボタンのtd要素を生成
      const buttonTdElem = document.createElement("td");
      buttonTdElem.appendChild(removeButtonElem);

      // tr要素を生成し、td要素を挿入する
      const trElem = document.createElement("tr");
      trElem.appendChild(todoNameTdElem);
      trElem.appendChild(personTdElem);
      trElem.appendChild(deadlineTdElem);
      trElem.appendChild(buttonTdElem);

      // tdody要素の中に、tr要素を挿入する
      const tbodyElem = document.getElementById("todo-list");
      tbodyElem.appendChild(trElem);
    });
};