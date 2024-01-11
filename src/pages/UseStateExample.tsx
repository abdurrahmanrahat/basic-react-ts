import React from "react";

type TCount = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const UseStateExample = ({ counter, setCounter }: TCount) => {
  //   const handleIncrement = () => {
  //     setCounter((prevState) => prevState + 1);
  //   };

  //   const handleAsyncIncrement = () => {
  //     setTimeout(() => {
  //       setCounter((prevState) => prevState + 1);
  //     }, 2000);
  //   };

  return (
    <div className="text-center">
      <h2 className="text-purple-400 text-4xl mx-auto">Count</h2>
      <h4 className="text-4xl font-semibold">{counter}</h4>
      <button onClick={() => setCounter(counter + 1)} className="btn-primary">
        Increment
      </button>
      {/* <button onClick={handleAsyncIncrement} className="btn-danger">
        Async Inc
      </button> */}
      <button onClick={() => setCounter(0)} className="btn-secondary">
        Reset
      </button>
    </div>
  );
};

export default UseStateExample;
