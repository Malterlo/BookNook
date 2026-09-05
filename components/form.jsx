import { useState } from "react";

const form = () => {
    const [text, setText] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(text);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input onChange={(e) => setText(e.target.value)} type="text" id="name" name="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default form;