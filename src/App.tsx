import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeProvider";
import UseRefExample from "./pages/UseRefExample";

function App() {
  const { dark, setDark } = useContext(ThemeContext);

  console.log(dark);

  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      {/* <UseStateExample
        counter={counter}
        setCounter={setCounter}
      ></UseStateExample> */}

      {/* <UseStateForm></UseStateForm> */}

      {/* <UseReducerExample></UseReducerExample> */}

      {/* <UseEffectExample></UseEffectExample> */}

      <button className="btn-secondary" onClick={() => setDark(!dark)}>
        Toggle
      </button>

      <UseRefExample></UseRefExample>
    </div>
  );
}

export default App;
