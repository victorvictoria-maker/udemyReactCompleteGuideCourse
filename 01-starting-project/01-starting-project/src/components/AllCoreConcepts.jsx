import { CORE_CONCEPTS } from "../data.js";

import CoreConcept from "./CoreConcept.jsx";

export default function AllCoreConcepts() {
  return (
    <section id='core-concepts'>
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept, key) => (
          <CoreConcept key={key} {...concept} />
        ))}
      </ul>
    </section>
  );
}
