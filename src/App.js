import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import PortfolioDev from "./pages/PortfolioDev";
import PortfolioWebdesign from "./pages/PortfolioWebdesign";


function App() {
    return(
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/websites" element={<PortfolioDev/>}/>
                <Route path="/webdesign" element={<PortfolioWebdesign/>}/>
            </Routes>
        </BrowserRouter>
    )
  
}

export default App;
