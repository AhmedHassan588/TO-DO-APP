import "./App.css";
import { useState } from "react";
import Card from "./Component/Card/Card";
import Button from "./Component/Button/Button";
import Input from "./Component/Input/Input";

function TodoItem({ todo, index, removeTodo }) {
  return (
    <div className="todo">
      <span>{todo.value}</span>
      <div className="butt">
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const addTodo = () => {
    console.log(value, "value");
    if (!value) return;
    const newTodos = [...todos, { value }];
    setTodos(newTodos);
    setValue("");
  };
  console.log(todos, "hi");
  return (
    <div className="background">
      <Card>
        <div className="handle">
          <input
            type="text"
            value={value}
            placeholder="add"
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button onClick={() => addTodo(value)}>Add</button>
        </div>
        <div className="add-class">
          {todos.map((todo, index) => (
            <TodoItem
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
