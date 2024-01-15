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

export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components are buliding blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
    function Welcome () {
      return <h1>Hello, World!</h1>;
    }`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extention to Javascript. It is similar to a template language, but it has full power of Javascript (e.g. it may output dynamica content).",
    code: `
    <div>
      <h1>Welcome {userName}</h1>
      <p>Time to learn React!</p>
    </div>`,
  },
  props: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
    function Welcome (props) {
      return <h1>Hello, {props.name}</h1>;
    }`,
  },
  state: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
    function Counter () {
      const [isVisible, setIsVisible] = useState(false);
    }`,
  },
};
