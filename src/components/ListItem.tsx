import React, { FC } from 'react';

interface TodoProps {
    todo: Todo,
    toggleTodo: ToggleTodo,
    deleteTodo: DeleteTodo
}

const ListItem: FC<TodoProps> = ({ todo, toggleTodo, deleteTodo }) => {
    return (

        <>
            <li className='list-group-item' ><span className={todo.completed ? 'completed' : ''} onClick={() => toggleTodo(todo)}>  {todo.title}</span>   <button className='btn btn-sm btn-danger float-right' onClick={()=>deleteTodo(todo)}>X</button></li >
        </>
    )
};

export default ListItem;
