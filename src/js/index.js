import { data, registerNewTodo, appendTodoListElem } from "./todo";
import "../css/style.css";

document.addEventListener("DOMContentLoaded", () => {
  const registerButtonElem = document.getElementById("register");
  registerButtonElem.addEventListener("click", () => {
    // 入力されたTODOの値を取得しtodoList変数に代入
    registerNewTodo();
    // TODO一覧を表示
    appendTodoListElem();
  });

  console.log("test");

  // 絞り込みに入力された場合のイベント定義
  const filterInputElem = document.getElementById("filter");
  filterInputElem.addEventListener("input", () => {
    data.filterWord = filterInputElem.value;
    appendTodoListElem();
  });
});
