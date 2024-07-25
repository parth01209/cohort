/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// A re-render means that -
//1. React did some work to calculate what all should update in this component
//2. The component actually gets called
//3. The inspector shows you a bounding box around the component

// It happens when -
// A state variable that is being used inside a component changes
// A parent component re-render triggers all children re-rendering

import React, { Fragment, useState } from "react";
// One alternative -
// In this approach, we are declaring global state variable and using it for all children components
// This re-renders all the children each time we click button

// function App() {
//   const [title, setTitle] = useState("Line 1");

//   function updateTitle() {
//     setTitle(Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update</button>
//       <Header title={title}></Header>
//       <Header title="Line 2"></Header>
//     </div>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;

// Another alternative - PUSH THE STATE DOWN TO COMPONENT
// Here, we declared state variable locally for first Header. Line 2 wont ne re-rendered

// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title={"Line 2"}></Header>
//     </div>
//   );
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState("Line 1");

//   function UpdateStuff() {
//     setTitle(Math.random());
//   }

//   return (
//     <div>
//       <button onClick={UpdateStuff}>Update</button>
//       <Header title={title}></Header>
//     </div>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;

// Next approach - using React.memo

// function App() {
//   const [title, setTitle] = useState("Line 1");

//   function updateTitle() {
//     setTitle(Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update</button>
//       <Header title={title}></Header>
//       <Header title="Line 2"></Header>
//       <Header title="Line 3"></Header>
//       <Header title="Line 4"></Header>
//     </div>
//   );
// }

// const Header = React.memo(function Header({ title }) {
//   return <div>{title}</div>;
// });

// export default App;

function App() {
  return (
    <div>
      <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper innerComponent={<TextComponent />} />
    </div>
  );
}

function TextComponent() {
  return <div>Text Component</div>;
}

function CardWrapper({ innerComponent }) {
  return <div style={{ border: "3px solid black" }}>{innerComponent}</div>;
}

export default App;
