import "./App.css";

import SimpleComponent from "./components/SimpleComponent";
import HelloWorld from "./components/HelloWorld";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import ElementComponent from "./components/ElementComponent";

function App() {
  return (
    <>
      <SimpleComponent />
      <HelloWorld />
      <FunctionalComponent />
      <ClassComponent />
      <ElementComponent />
    </>
  );
}

export default App;
