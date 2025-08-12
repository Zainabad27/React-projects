import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts/index.js';
import TodoForm from './components/TodoForm.jsx';
import TodoItem from './components/TodoItem.jsx';
import './App.css'

function App() {
  const [todo, settodo] = useState([]);


  const addtodo = (todo_text) => {
    const Todo = {
      id: Date.now(),
      tododata: todo_text,
      completed: false
    };

    settodo((prev) => [Todo, ...prev]);
  }
  const edittodo = (id, text) => {
    settodo((prevtodo) => prevtodo.map((single_todo) =>
      single_todo.id === id
        ?
        { ...single_todo, tododata: text } : single_todo
    ))
  }
  const deletetodo = (id) => {
    settodo((prevtodo) => prevtodo.filter((single_todo) => single_todo.id !== id))
  };

  const completetodo = (id) => {

    settodo((prevtodo) => prevtodo.map((single_todo) => single_todo.id === id ? { ...single_todo, completed: !single_todo.completed } : single_todo))

  };


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      settodo(todos);
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo))
  }, [todo]);


  return (
    <TodoProvider value={{ addtodo, deletetodo, edittodo, completetodo, todo }}>
      <div className="bg-[#172842] min-h-screen py-8 rounded-lg">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todo.map((single_todo) => (
              <div key={single_todo.id} className='w-full'>
                <TodoItem  todo={single_todo} />
              </div>
            ))}
          </div>
        </div>
      </div>





    </TodoProvider >
  )
}

export default App
