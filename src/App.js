import AnimalShow from "./AnimalShow";
import { useState } from "react";
function App() {
  const handleClick = () => {
    setCount(count + 1)
    console.log(count);
  };
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      <AnimalShow/>
    </>
  );
}

export default App;
