import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Form from './components/Form';
import './App.css'
import ListItem from './components/ListItem';
import List from './components/List';

const initialTodos: Array<Todo> = [
  { title: 'Wash clothes', completed: false },
  { title: 'Learn new things', completed: true },
  { title: 'Code all day', completed: false },
]
function App() {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = (newTodo) => {
    setTodos([...todos, {title:newTodo, completed: false}])
  }

  const deleteTodo: DeleteTodo = selectedTodo => {
    setTodos([...todos.filter(todo=> todo !== selectedTodo)])
  }
  return (
    <div className="container mt-3">
      <div className='row'>
        <div className='col-md-4 col-sm-12'>
          <Form addTodo={addTodo}/>
        </div>
        <div className='col-md col-sm-12'>
          <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

        </div>
      </div>
    </div>
  );
}

export default App;
