import {useState} from 'react';
import Todo from './models/todo'
import Todos from './components/Todos'
import AddOnItem from './components/AddOnItem';

function App() {

  // const todos = [
  //   new Todo('learning python'),
  //   new Todo('learning react'),
  //   new Todo('learning typescript'),
  // ]
  const [todos, setTodos] = useState <Todo[]>([])

  const addTodoHandler = (text: string) =>{
    const newTodo = new Todo(text)
    setTodos((prevTodos) =>{
      return prevTodos.concat(newTodo)
    })

  }

  return (
    <div>
      <AddOnItem addItem={addTodoHandler}/>
     <Todos items ={todos}/>
    </div>
  );
}

export default App;
