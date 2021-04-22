import React, { useState, useEffect } from "react";

// custom hook
// using react hook inside a fxn whose name starts with use is custom hook
function useFormInputs(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
}

function App() {
  const email = useFormInputs("a");

  const name = useFormInputs("Rk");

  return (
    <div>
      <input value={email.value} onChange={email.onChange} />
      <input value={name.value} onChange={name.onChange} />
      <p>Email: {email.value}</p>
      <p>Name: {name.value}</p>
    </div>
  );
}

export default App;
