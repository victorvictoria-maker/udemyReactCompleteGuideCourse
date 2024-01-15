import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [tabContent, setTabContent] = useState();

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
            {CORE_CONCEPTS.map((concept, key) => (
              <CoreConcepts key={key} {...concept} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === "components"}
              onClickTab={() => onClickTab("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onClickTab={() => onClickTab("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onClickTab={() => onClickTab("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onClickTab={() => onClickTab("state")}
            >
              State
            </TabButton>
          </menu>
          <div id='tab-content'>
            {!tabContent ? (
              <p>
                Please, select the content you want to learn about from the
                examples above.
              </p>
            ) : (
              <>
                <h3>{EXAMPLES[tabContent].title}</h3>
                <p>{EXAMPLES[tabContent].description}</p>
                <pre>
                  <code>{EXAMPLES[tabContent].code}</code>
                </pre>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
