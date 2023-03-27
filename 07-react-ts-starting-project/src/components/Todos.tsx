import React from "react";
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{items: Todo[]; removeItem: (id: string)=>void}> = (props) =>{
  return <ul className={classes.todos}>
   {props.items.map((item) => (<TodoItem  key={item.id} text={item.text} removeItem={props.removeItem.bind(null, item.id)}></TodoItem>))}
  </ul>
}

export default Todos;