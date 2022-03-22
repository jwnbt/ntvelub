import { useState } from "react";
import "./App.css";

function App() {
  const [memory, setMemory] = useState("");
  const [characteristic, setCharacteristic] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log(characteristic);
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(event) => setMemory(event.target.value)} />
      <textarea
        onChange={(event) => setCharacteristic(event.target.value.split(/\n/))}
      ></textarea>
      <input type="submit" />
    </form>
  );
}

export default App;
