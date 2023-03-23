
import Todo from './models/todo'
import Todos from './components/Todos'
function App() {

  const todos = [
    new Todo('learning python'),
    new Todo('learning react'),
    new Todo('learning typescript'),
  ]
  return (
    <div>
     <Todos items ={todos}/>
    </div>
  );
}

export default App;
