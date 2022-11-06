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

import ClassComponent from "./pages/ClassCompnent";
import FunctionalComponent from "./pages/FunctionalComponent";
//import route/s
import { Routes, Route } from "react-router-dom";
//hoc layout
import BaseHoc from "./hoc/BaseHoc";

function App() {
  const company = "DevTown";
  const [name, setName] = useState("");
  return (
    <Routes>
      <Route path="/" element={<ClassComponent />}></Route>
      <Route
        path="/functional-component"
        element={
          <FunctionalComponent
            name={name}
            age={20}
            company={company}
            setName={setName}
          />
        }
      ></Route>
    </Routes>
  );
}

export default App;

/* <div>
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
*/
