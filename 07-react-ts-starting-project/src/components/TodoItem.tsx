import React from "react";
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{text: string; removeItem:()=>void}> = (props) =>{
  return <li className={classes.item} onClick={props.removeItem}>{props.text} </li>
}

export default TodoItem;