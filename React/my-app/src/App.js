import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HookUseState from "./Pages/HookUseState";
import InternalStyling from "./Pages/InternalStyling";
import Sample from "./Pages/Sample";
import StyledComponent from "./Pages/StyledComponent";
import Api from "./Pages/Api";
import ColourButton2 from "./Pages/Button/ColourButton2";
import ColourButton3 from "./Pages/Button/ColourButton3";
import ColourButton4 from "./Pages/Button/ColourButton4";
import ColourButtons from "./Pages/Button/ColourButtons";
import { HookUseContext } from "./Pages/HookUseContext";
import HookUseContextDisplay from "./Pages/HookUseContextDisplay";
import UseRef from "./Pages/UseRef";

// import TryCatch from "./Pages/TryCatch";
import UseReducer from "./Pages/UseReducer";

// import UseEffect from "./Pages/UseEffect";

function App() {
  const router = createBrowserRouter([
    {
      path: 'UseReducer',
      element: <UseReducer />
    },
    {
      path: 'Sample',
      element: <Sample />
    },
    {
      path: 'InternalStyling',
      element: <InternalStyling />
    }, 
    {
      path: 'StyledComponent',
      element: <StyledComponent />
    }, 
    {
      path: 'HookUseState',
      element: <HookUseState />
    }, 
    {
      path: 'UseRef',
      element: <UseRef />
    }, 
    // {
    //   path: 'UseEffect',
    //   element: <UseEffect />
    // }, 
    {
      path: 'ColourButtons',
      element: <ColourButtons />
    }, 
    {
      path: 'Api',
      element: <Api />
    },
  ])
  return (
   

      


    //   {/* <ColourButtons/><br/><br/><br/><br/>
    //   <ColourButton2/><br/><br/><br/><br/>
    //   <ColourButton3/><br/><br/><br/><br/>
    //   <ColourButton4/> */}

    //   {/* <Api/> */}

    //   {/* <TryCatch/> */}

    //   // <UseReducer/>
    // </div>

    <HookUseContext.Provider value={'kratos'}>
      <HookUseContextDisplay/>
    <RouterProvider router={router}></RouterProvider>

      </HookUseContext.Provider>

  );
}

export default App;


