
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import AddNew from "./containers/AddNew/AddNew";
import Catalog from "./containers/Catalog/Catalog";
import SingleAnimal from "./containers/SingleAnimal/SingleAnimal";


const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<AddNew/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/catalog/:id" element={<SingleAnimal/>}/>
            </Routes>
    );
};

export default App;
