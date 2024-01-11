import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <UseStateExample
        counter={counter}
        setCounter={setCounter}
      ></UseStateExample>
    </div>
  );
}

export default App;
