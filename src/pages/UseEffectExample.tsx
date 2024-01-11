import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  //   useEffect(() => {
  //     console.log("render");

  //     return () => {
  //       console.log("inside clean up");
  //     };
  //   }, [hidden]);

  return (
    <div>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn-secondary"
      >
        {hidden ? "show" : "Hide"}
      </button>

      {hidden || <Counter></Counter>}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("render");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h2>{count}</h2>;
};

export default UseEffectExample;
