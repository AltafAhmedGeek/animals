import AnimalShow from "./AnimalShow";
import { useState } from "react";
import "./css/App.css";
function getRandomAnimal() {
  const animals = ["cat", "bird", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}
function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
    console.log(animals);
  };
  const renderedAnimals = animals.map((animal, i) => {
    return <AnimalShow key={i} type={animal} />;
  });

  return (
    <div className="app">
      <button className="button" onClick={handleClick}>
        Add Animal
      </button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
