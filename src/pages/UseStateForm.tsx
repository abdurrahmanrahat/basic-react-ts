import React, { useState } from "react";

const UseStateForm = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className="border-2 border-black rounded"
        type="text"
        name="name"
        id="name"
      />
      <input
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="border-2 border-black rounded"
        type="email"
        name="email"
        id="email"
      />
      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UseStateForm;
