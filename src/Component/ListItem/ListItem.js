import react from "react";
import Button from "../Button/Button";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const ListItem = ({ todo, index, removeTodo, editTodo }) => {
  return (
    <div className="list-item">
      <span>{todo.value}</span>
      <div className="list-item-button">
        <Button onClick={() => removeTodo(index)}><MdDelete /></Button>
        <Button onClick={editTodo}><FiEdit /></Button>
      </div>
    </div>
  );
};

export default ListItem;
