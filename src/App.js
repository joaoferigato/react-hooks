import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import UseState from "./components/UseState";
import UseEffect1 from "./components/UseEffect1";
import UseEffect2 from "./components/UseEffect2";
import UseEffect3 from "./components/UseEffect3";
import UseRef1 from "./components/UseRef1";
import UseRef2 from "./components/UseRef2";
import UseRef3 from "./components/UseRef3";
import UseReducer from "./components/UseReducer";
import UserContextProvider from "./contexts/UserContextProvider";
import UseContext from "./components/UseContext";

function App() {
    return (
        <>
            <BrowserRouter>
                <UserContextProvider>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/use-state" element={<UseState/>}/>
                        <Route path="/use-effect1" element={<UseEffect1/>}/>
                        <Route path="/use-effect2" element={<UseEffect2/>}/>
                        <Route path="/use-effect3" element={<UseEffect3/>}/>
                        <Route path="/use-ref1" element={<UseRef1/>}/>
                        <Route path="/use-ref2" element={<UseRef2/>}/>
                        <Route path="/use-ref3" element={<UseRef3/>}/>
                        <Route path="/use-ref3" element={<UseRef3/>}/>
                        <Route path="/use-reducer" element={<UseReducer/>}/>
                        <Route path="/use-context" element={<UseContext/>}/>
                    </Routes>
                </UserContextProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
