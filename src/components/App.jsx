import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function handelSend(obj) {
    setItems((prevArr) => {
      return [...prevArr, obj];
    });
  }

  function AfterDelete(id) {
    setItems((prevArr) => {
      return prevArr.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea fun={handelSend} />
      {items.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDel={AfterDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
