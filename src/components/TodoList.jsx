import React from 'react';
import TodoListItem from './TodoListItem';
import 'css/TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => (
  <div className="TodoList">
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        key={todo.id}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    ))}
  </div>
);

export default TodoList;