import reactImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

let reactDescriptions = ["Fundamental", "Core", "Important"];

let getRandomNumbers = (max) => {
  return Math.floor(Math.random() * max);
};

function Header() {
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

function CoreConcepts({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, key) => {
              return (
                <CoreConcepts
                  key={key}
                  title={concept.title}
                  description={concept.description}
                  image={concept.image}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
