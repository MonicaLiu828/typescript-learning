import {useRef} from 'react';
import classes from './NewTodo.module.css';

const AddOnItem: React.FC<{addItem:(text:string)=>void}>= (props) =>{

  const todoTextRef = useRef<HTMLInputElement>(null)

  const handleInput = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = todoTextRef.current!.value

    if (enteredText.trim().length === 0) {
      return;
    }
    props.addItem(enteredText)

  }


  return(
    <form onSubmit={handleInput} className={classes.form}>
      <label htmlFor="todoinput">new todo to add on </label>
      <input type="text" id ='todoinput' ref = {todoTextRef}></input>
      <button>submit</button>
    </form>
  )

}

export default AddOnItem;