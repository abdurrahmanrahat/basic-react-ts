import React, { useState } from "react";

const UseStateForm = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(user);
  };

  // handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);
    const inputName = e.target.name;
    setUser({ ...user, [inputName]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className="border-2 border-black rounded"
        type="text"
        name="name"
        id="name"
      />
      <input
        onChange={handleChange}
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
