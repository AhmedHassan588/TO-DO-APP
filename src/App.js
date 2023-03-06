import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Todo from "./Pages/Todo/Todo";
import Login from "./Pages/Login/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
