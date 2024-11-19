let todoList = [];

let filterWord = "";

// 入力された新しいTODOの値を取得し、todoList変数に代入する関数
const registerNewTodo = () => {
  const newTodoName = document.getElementById("new-todo-name");
  const newPerson = document.getElementById("new-person");
  const newDeadline = document.getElementById("new-deadline");
  todoList.push({
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
  (todoList = todoList.filter((todo) => todo.id !== id));

// TODO一覧を表示する関数
const appendTodoListElem = () => {
  // TODO一覧を全て削除
  removeTodoListElem();

  todoList
    .filter(
      (todo) =>
        todo.todoName.includes(filterWord) || todo.person.includes(filterWord)
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

document.addEventListener("DOMContentLoaded", () => {
  const registerButtonElem = document.getElementById("register");
  registerButtonElem.addEventListener("click", () => {
    // 入力されたTODOの値を取得しtodoList変数に代入
    registerNewTodo();
    // TODO一覧を表示
    appendTodoListElem();
  });

  // 絞り込みに入力された場合のイベント定義
  const filterInputElem = document.getElementById("filter");
  filterInputElem.addEventListener("input", () => {
    filterWord = filterInputElem.value;
    appendTodoListElem();
  });
});
