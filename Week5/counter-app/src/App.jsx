import { useState } from "react";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // console.log(setCount);
  // let state = {
  //   count: 0,
  // }; React will not watch this state (Your own global variables)
  // Todo Application

  return (
    <div>
      <Button count={count} setCount={setCount}></Button>
      {/* Whenever u want to write JS or render JS variable inside react component, use curly braces*/}
    </div>
  );
}

//Component
function Button(props) {
  function onClickHandler() {
    props.setCount(count + 1); // Updating the DOM
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}

export default App;
