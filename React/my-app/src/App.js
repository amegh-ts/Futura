import HookUseState from "./Pages/HookUseState";
import InternalStyling from "./Pages/InternalStyling";
import Sample from "./Pages/Sample";
import StyledComponent from "./Pages/StyledComponent";
import { HookUseContext } from "./Pages/HookUseContext";

function App() {
  return (
    <div className="App">
      <HookUseContext.Provider value={'kasyab'}>
      {/* <Sample/>
      <br/>
      <InternalStyling/>
      <br/> 
      <StyledComponent/> */}

      <HookUseState/>
      </HookUseContext.Provider>
    </div>
  );
}

export default App;
