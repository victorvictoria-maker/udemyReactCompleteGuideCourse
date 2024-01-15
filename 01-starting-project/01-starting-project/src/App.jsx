import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [tabContent, setTabContent] = useState("components");

  const onClickTab = (conceptSelected) => {
    setTabContent(conceptSelected);
  };

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, key) => {
              return <CoreConcepts key={key} {...concept} />;
            })}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onClickTab={() => onClickTab("components")}>
              Components
            </TabButton>
            <TabButton onClickTab={() => onClickTab("jsx")}>JSX</TabButton>
            <TabButton onClickTab={() => onClickTab("props")}>Props</TabButton>
            <TabButton onClickTab={() => onClickTab("state")}>State</TabButton>
          </menu>
          <div className='tab-content'>
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
