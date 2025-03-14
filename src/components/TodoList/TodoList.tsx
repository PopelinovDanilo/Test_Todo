import React from 'react';

import { TodoItem } from './TodoItem/TodoItem.tsx';
import { TodoPanel } from '../TodoPanel/TodoPanel.tsx';


export const TodoList: React.FC<TodoListProps> = ({
  todos,
  todoIdForEdit,
  changeTodo,
  deleteTodo,
  checkTodo,
  selectTodoIdForEdit
}) => (
  <div>
    {todos.map((todo) => {
      if (todo.id === todoIdForEdit)
        return <TodoPanel mode='edit' changeTodo={changeTodo} editTodo={todo} />;
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
          selectTodoIdForEdit={selectTodoIdForEdit}
        />
      );
    })}
  </div>
);
