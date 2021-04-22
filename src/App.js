import React, { useState } from "react";

function App() {
  //usestate is a hook :fxn that lets you hook into react feature ,lets you create local state for fxn comp
  //setstate will need initial state as argument and will pass an array
  //[0] initial state ,[1] function to change state
  const EmailState = useState("");
  const email = EmailState[0];
  const setEmail = EmailState[1];

  const [name, setname] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }
  function handleNameChange(e) {
    setname(e.target.value);
  }

  return (
    <div>
      <input value={email} onChange={handleChange} />
      <input value={name} onChange={handleNameChange} />
      <p>Email: {email}</p>
      <p>Name: {name}</p>
    </div>
  );
}

export default App;
