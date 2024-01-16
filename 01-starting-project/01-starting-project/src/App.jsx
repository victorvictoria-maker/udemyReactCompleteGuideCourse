import Header from "./components/Header/Header.jsx";
import AllCoreConcepts from "./components/AllCoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <AllCoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
