import { useEffect, useRef } from "react";

const UseRefExample = () => {
  //   const [count, setCount] = useState(0);
  const myRef = useRef<HTMLInputElement | null>(null);

  //   const increment = () => {
  //     myRef.current = myRef.current + 1;
  //     setCount(count + 1);
  //   };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     console.log(myRef.current.value);
  //   };

  useEffect(() => {
    myRef.current?.focus();
  }, []);

  return (
    <div>
      <h2>useRef</h2>
      <form>
        <input
          ref={myRef}
          type="text"
          name="name"
          id="name"
          className="border-2 border-purple-600"
        />
        <button type="submit" className="btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRefExample;
