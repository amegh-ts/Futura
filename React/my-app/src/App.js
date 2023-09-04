// import HookUseState from "./Pages/HookUseState";
// import InternalStyling from "./Pages/InternalStyling";
// import Sample from "./Pages/Sample";
// import StyledComponent from "./Pages/StyledComponent";
import ColourButton2 from "./Pages/Button/ColourButton2";
import ColourButton3 from "./Pages/Button/ColourButton3";
import ColourButtons from "./Pages/Button/ColourButtons";
// import { HookUseContext } from "./Pages/HookUseContext";
// import HookUseContextDisplay from "./Pages/HookUseContextDisplay";
// import UseRef from "./Pages/UseRef";

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

      {/* <UseRef/> */}
    

      <ColourButtons/><br/><br/><br/><br/>
      <ColourButton2/><br/><br/><br/><br/>
      <ColourButton3/>
    </div>
  );
}

export default App;


