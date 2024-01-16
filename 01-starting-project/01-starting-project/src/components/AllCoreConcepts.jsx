import { CORE_CONCEPTS } from "../data.js";

import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

export default function AllCoreConcepts() {
  return (
    <Section sectionTitle='Core Concepts' id='core-concepts'>
      <ul>
        {CORE_CONCEPTS.map((concept, key) => (
          <CoreConcept key={key} {...concept} />
        ))}
      </ul>
    </Section>
  );
}
