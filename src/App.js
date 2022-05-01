import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/task-1" element={<Task1 />} />
        <Route exact path="/task-2" element={<Task2 />} />
        <Route exact path="/task-3" element={<Task3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
