import "./App.css";
import { useState } from "react";
/* return ( <
    div >
    <
    h1 > Class Component < /h1> <
    /div >
  )-----------corrected by setting>search-file associations>add new 
                          *.js ------- javascriptreact
*/

import ClassComponent from "./components/ClassCompnent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  const company = "DevTown";
  const [name, setName] = useState("");
  return (
    <div>
      <h1> Class Component </h1>
      <ClassComponent />
      <h1> Functional Component </h1>
      <FunctionalComponent
        name={name}
        age={20}
        company={company}
        setName={setName}
      ></FunctionalComponent>
    </div>
  );
}

export default App;
