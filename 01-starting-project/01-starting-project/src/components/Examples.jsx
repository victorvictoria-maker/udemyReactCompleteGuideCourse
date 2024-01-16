import { useState } from "react";
import { EXAMPLES } from "../data.js";

import TabButton from "./TabButton.jsx";

export default function Examples() {
  const [tabContent, setTabContent] = useState();

  const onClickTab = (conceptSelected) => {
    setTabContent(conceptSelected);
  };

  return (
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
            Please, select the content you want to learn about from the examples
            above.
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
  );
}
