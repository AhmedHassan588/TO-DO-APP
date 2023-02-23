import "./App.css";
import { useState } from "react";
import Card from "./Component/Card/Card";
import Button from "./Component/Button/Button";
import Input from "./Component/Input/Input";
import ListItem from "./Component/ListItem/ListItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  const addTodo = () => {
    if (!value) return;
    const newTodos = [...todos, { value }];
    setTodos(newTodos);
    setValue("");
  };

  return (
    <div className="background">
      <Card>
        <div className="input-wrapper">
          <Input
            type="text"
            value={value}
            placeholder="add"
            onChange={(e) => setValue(e.target.value)}
          ></Input>
          <Button onclick={addTodo}>+</Button>
        </div>
        <div className="todos-wrapper">
          {todos.map((todo, index) => (
            <ListItem
              key={index}
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
