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
// import { HookUseContext } from "./Pages/HookUseContext";
// import HookUseContextDisplay from "./Pages/HookUseContextDisplay";
import UseRef from "./Pages/UseRef";

import TryCatch from "./Pages/TryCatch";
import UseReducer from "./Pages/UseReducer";

import UseEffect from "./Pages/UseEffect";
import Home from './Pages/Home';
import UseMemo from './Pages/UseMemo';
import ReactMemo from './Pages/ReactMemo';
import { UseCallback } from './Pages/UseCallback';
import Form from './Pages/Form';
import FormUseRef from './Pages/FormUseRef';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
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
        }, {
            path: 'StyledComponent',
            element: <StyledComponent />
        }, {
            path: 'HookUseState',
            element: <HookUseState />
        }, {
            path: 'UseRef',
            element: <UseRef />
        }, {
            path: 'UseEffect',
            element: <UseEffect />
        }, {
            path: 'ColourButtons',
            element: <ColourButtons />
        }, {
            path: 'ColourButton2',
            element: <ColourButton2 />
        }, {
            path: 'ColourButton3',
            element: <ColourButton3 />
        }, {
            path: 'ColourButton4',
            element: <ColourButton4 />
        }, {
            path: 'TryCatch',
            element: <TryCatch />
        }, {
            path: 'UseReducer',
            element: <UseReducer />
        }, {
            path: 'Api',
            element: <Api />
        }, {
            path: 'usememo',
            element: <UseMemo />
        }, {
            path: 'reactmemo',
            element: <ReactMemo />
        },{
            path:'usecallback',
            element:<UseCallback/>
        },{
            path:'form',
            element:<Form/>
        },{
            path:'formuseref',
            element:<FormUseRef/>
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>

        // <HookUseContext.Provider value={'Index'}>
        //     <HookUseContextDisplay/>

        // </HookUseContext.Provider>

    );
}

export default App;
