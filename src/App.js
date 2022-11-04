import "./App.css";

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
  return (
    <div>
      <h1> Class Component </h1>
      <ClassComponent></ClassComponent>
      <h1> Functional Component </h1>
      <FunctionalComponent></FunctionalComponent>
    </div>
  );
}

export default App;
