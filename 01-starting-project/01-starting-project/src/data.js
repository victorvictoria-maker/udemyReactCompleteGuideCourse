import componentsImage from "./assets/components.png";
import propsImage from "./assets/config.png";
import jsxImage from "./assets/jsx-ui.png";
import stateImage from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImage,
    title: "Components",
    description:
      "The core UI bulding block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImage,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: propsImage,
    title: "Props",
    description:
      "Make components comfigurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: stateImage,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];
