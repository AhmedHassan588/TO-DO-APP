import react from "react";
import Button from "../Button/Button";

const ListItem = ({ todo, index, removeTodo, editTodo }) => {
  return (
    <div className="list-item">
      <span>{todo.value}</span>
      <div className="list-item-button">
        <Button onclick={() => removeTodo(index)}>X</Button>
        <Button onclick={editTodo}>E</Button>
      </div>
    </div>
  );
};

export default ListItem;
