import "./App.css";
import { useState } from "react";
import Card from "./Component/Card/Card";
import Button from "./Component/Button/Button";
import Input from "./Component/Input/Input";
import ListItem from "./Component/ListItem/ListItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [findindex, setfindindex] = useState();
  const [value, setValue] = useState("");
  const [editMode, setEditMode] = useState(false);

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (text, index) => {
    setfindindex(index);
    setEditMode(true);
    setValue(text);
  };

  const addTodo = () => {
    if (!value) return;
    const newTodos = [...todos, { value }];
    setTodos(newTodos);
    setValue("");
  };

  const updateTodo = () => {
    setTodos(
      todos.map((todo, index) =>
        index === findindex ? { value: value } : todo
      )
    );
    setEditMode(false);
    setValue("");
  };

  return (
    <div className="background">
      <Card>
        <div className="heading">
          <h1>Todo App</h1>
        </div>
        <div className="input-wrapper">
          <Input
            type="text"
            value={value}
            placeholder="add"
            onChange={(e) => setValue(e.target.value)}
          ></Input>
          <Button onclick={editMode ? updateTodo : addTodo}>
            {" "}
            {editMode ? "E" : "+"}
          </Button>
        </div>
        <div className="todos-wrapper">
          {todos.map((todo, index) => (
            <ListItem
              key={index}
              editTodo={() => editTodo(todo.value, index)}
              index={index}
              todo={todo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default App;
