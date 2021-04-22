import React, { useState, useEffect } from "react";

function App() {
  //usestate is a hook :fxn that lets you hook into react feature ,lets you create local state for fxn comp
  //setstate will need initial state as argument and will pass an array
  //[0] initial state ,[1] function to change state

  const [userId, setUserId] = useState("1");
  const [data, setData] = useState([]);

  // use effect will be called on first render and after every update ,setDate(),setUserId  rerenders the comp;
  // with empty array only on first render ,will act as didmount
  // with dependencies on first render and when dependencies changes   ,will act like didupdate
  // need to pass callback to useEffect
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [userId]);

  useEffect(() => {
    document.addEventListener("mouseover", onMouseMove); // add event listeneer

    // remove event listener when component is destroyed to avoid memory leak ,
    // return function part is totally optional
    // component will unmount alternative
    return () => {
      document.removeEventListener("mouseover", onMouseMove);
    };
  });
  function onMouseMove(event) {
    console.log(event.clientX);
  }
  return (
    <div>
      <h1>App</h1>
      <button
        onClick={() => {
          setUserId("2");
        }}
      >
        Change userid to 2
      </button>
      {data.map((user) => (
        <p>{user.title}</p>
      ))}
    </div>
  );
}

export default App;
