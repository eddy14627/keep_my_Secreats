import React, { useState } from "react";

function CreateArea(props) {
  const [item, setItem] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const { value, name } = event.target;
    setItem((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
  }

  function handelClick(event) {
    props.fun(item);
    setItem({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handelChange}
          name="title"
          placeholder="Title"
          value={item.title}
        />
        <textarea
          onChange={handelChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={item.content}
        />
        <button onClick={handelClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
