import { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = { name: "", email: "" };

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addEmail":
      return { ...currentState, email: action.payload };

    default:
      return currentState;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <>
      {/* <div>
        <h2>{state.count}</h2>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="btn-primary"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="btn-secondary"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "incrementByThree", payload: 3 })}
          className="btn-danger"
        >
          Increment By Three
        </button>
      </div> */}

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          className="border-2 border-black rounded"
          type="text"
          name="name"
          id="name"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
          className="border-2 border-black rounded"
          type="email"
          name="email"
          id="email"
        />
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default UseReducerExample;
