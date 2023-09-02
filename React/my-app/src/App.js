// import HookUseState from "./Pages/HookUseState";
// import InternalStyling from "./Pages/InternalStyling";
// import Sample from "./Pages/Sample";
// import StyledComponent from "./Pages/StyledComponent";
import { HookUseContext } from "./Pages/HookUseContext";
import HookUseContextDisplay from "./Pages/HookUseContextDisplay";
import UseRef from "./Pages/UseRef";

function App() {
  return (
    <div className="App">

      {/* <Sample/>
      <br/>
      <InternalStyling/>
      <br/> 
      <StyledComponent/>
      <HookUseState/> */}

      {/* <HookUseContext.Provider value={'kratos'}>
      <HookUseContextDisplay/>
      </HookUseContext.Provider> */}

      <UseRef/>
      

    </div>
  );
}

export default App;


