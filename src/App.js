
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import AddNew from "./containers/AddNew/AddNew";


const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<AddNew/>}/>
            </Routes>
    );
};

export default App;
