import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초를 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '리액트의 기초를 알아보기',
      checked: true,
    },
    {
      id: 3,
      text: '리액트의 기초를 알아보기',
      checked: false,
    },
  ]);


  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
