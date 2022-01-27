import React, { useState, FormEvent, FC } from 'react';


interface addTodoProps {
    addTodo: AddTodo
}


const Form:FC<addTodoProps> = ({addTodo}) => {
    const [title, setTitle] = useState('');
    const handleSaveTodo= (e: FormEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        if(title === ''){
            return;
        }
        addTodo(title)
        setTitle('')
    }
    return (
        <div className='card'>
            <div className='card-body shadow'>

                <form >
                    <h3>Create new</h3>
                    <fieldset>
                        <div className='form-group'>
                            <label htmlFor="title">Title:</label>
                            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className='form-control' id='title' placeholder='Enter todo title...' />
                        </div>
                        <br />
                        <button type='submit' onClick={handleSaveTodo} className='btn btn-success btn-sm'>Save</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Form;
