import { useRef, useState } from "react";

const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const myRef = useRef(0);

  const increment = () => {
    myRef.current = myRef.current + 1;
    setCount(count + 1);
  };

  return (
    <div>
      <h2>useRef</h2>
      <button onClick={() => increment()} className="btn-secondary">
        {myRef.current}
      </button>
    </div>
  );
};

export default UseRefExample;
