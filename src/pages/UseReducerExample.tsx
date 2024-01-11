import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    case "incrementByThree":
      return { count: currentState.count + action.payload };
    default:
      return currentState;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
    </>
  );
};

export default UseReducerExample;
