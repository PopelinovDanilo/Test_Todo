import React from "react"
import { Header } from "./components/Header/Header.tsx";
import { TodoPanel } from "./components/TodoPanel/TodoPanel.tsx";
import { TodoList } from "./components/TodoList/TodoList.tsx";
import './App.module.css';


const DEFAULT_TODO_LIST = [
  { id: 1, name: "task1", description: "description1", checked: "false" },
  { id: 2, name: "task2", description: "description2", checked: "false" },
  { id: 3, name: "task3", description: "description3", checked: "true" }
]

function App() {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
  const [todoIdForEdit, setTodoIdForEdit] = React.useState<number | null>(null);
  const addTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, description, name, checked: false }]);
  };
  const selectTodoIdForEdit = (id: Todo['id']) => {
    setTodoIdForEdit(id);
  };
  const changeTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setTodoIdForEdit(null);
  };
  const checkTodo = (id: Todo["id"]) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };

      }
      return todo;
    })
    );
  }
  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  console.log("todos", "setTodos", todos, setTodos);
  return (
    <div>
      <Header todoCount={todos.length}></Header>
      <TodoPanel addTodo={addTodo}> </TodoPanel>
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} selectTodoIdForEdit={selectTodoIdForEdit}
        changeTodo={changeTodo} todoIdForEdit={todoIdForEdit}></TodoList>
    </div>
  );
}

export default App;
