import { useState } from "react";

const UseStateExample = () => {
  const [counter, setCounter] = useState(0);

  console.log("render");
  // handleIncrement
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="text-center">
      <h2 className="text-purple-400 text-4xl mx-auto">Count</h2>
      <h4 className="text-4xl font-semibold">{counter}</h4>
      <button onClick={handleIncrement} className="btn-primary">
        Increment
      </button>
      <button
        onClick={() => setCounter((prevStatus) => prevStatus - 1)}
        className="btn-danger"
      >
        Decrement
      </button>
      <button onClick={() => setCounter(0)} className="btn-secondary">
        Reset
      </button>
    </div>
  );
};

export default UseStateExample;
