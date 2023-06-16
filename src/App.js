import { useRef, useState } from "react";
import MyTodo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";

function App() {
  return (
    <>
    <MyTodo></MyTodo>
    <br />
    <hr />
    <br />
      <MyRegistration />
    </>
  );
}

export default App;