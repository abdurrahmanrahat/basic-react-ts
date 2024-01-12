import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });

  //   useEffect(() => {
  //     console.log("render");

  //     return () => {
  //       console.log("inside clean up");
  //     };
  //   }, [hidden]);

  useEffect(() => {
    console.log("Render");
  }, [user.name, user.email]);

  return (
    <div>
      {/* <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn-secondary"
      >
        {hidden ? "show" : "Hide"}
      </button>

      {hidden || <Todo></Todo>} */}
      <input
        onBlur={(e) => setUser({ ...user, name: e.target.value })}
        className="border-2 border-black rounded"
        type="text"
        name="name"
        id="name"
      />
      <input
        onBlur={(e) => setUser({ ...user, email: e.target.value })}
        className="border-2 border-black rounded"
        type="text"
        name="email"
        id="name"
      />
    </div>
  );
};

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log("render");
//       setCount((prev) => prev + 1);
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <h2>{count}</h2>;
// };

const Todo = () => {
  const controller = new AbortController();
  const signal = controller.signal; // it is an property. that's why don't call it.

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((res) => res.json())
      .then((data) => alert(data.title));

    return () => {
      controller.abort(); // it is an method, that's why called it.
    };
  }, []);

  return (
    <div>
      <h2>Todos</h2>
    </div>
  );
};

export default UseEffectExample;
