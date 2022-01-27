import React, { FC } from 'react';
import ListItem from './ListItem';

interface TodosProps{
    todos: Array<Todo>,
    toggleTodo: ToggleTodo,
    deleteTodo: DeleteTodo
}

const List:FC<TodosProps> = ({todos,toggleTodo,deleteTodo}) => {
  return (
      <>
        <h3>Todos</h3>
        <ul className='list-group'>
          {todos &&
            todos.map((todo,index) => <ListItem key={index} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)
          }
            
        </ul>
      </>
  );
};

export default List;
