import reactImage from "../../assets/react-core-concepts.png";
import "./Header.css";

let reactDescriptions = ["Fundamental", "Core", "Important"];

let getRandomNumbers = (max) => {
  return Math.floor(Math.random() * max);
};

export default function Header() {
  let description = reactDescriptions[getRandomNumbers(3)];

  return (
    <header>
      <img src={reactImage} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
