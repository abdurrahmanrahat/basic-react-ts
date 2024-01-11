import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log("render");

    return () => {
      console.log("inside clean up");
    };
  }, [hidden]);

  return (
    <div>
      <h2>UseEffectExample</h2>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn-secondary"
      >
        Click
      </button>
    </div>
  );
};

export default UseEffectExample;
