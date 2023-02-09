import logo from './logo.svg';
import './App.css';
import Home from './Home';
import FranchiseHistory from './FranchiseHistory';
import CurrentFranchise from './CurrentFranchise';
import {Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import CfDb from './CurrentFranchise/AD/CfDb';
import CfAB from './CurrentFranchise/AB/CfAB';
import CfBO from './CurrentFranchise/BO/CfBO';
import CfBRS from './CurrentFranchise/BRS/CfBRS';
import CfCC from './CurrentFranchise/CC/CfCC';
import CfCWS from './CurrentFranchise/CWS/CfCWS';
import CfCR from './CurrentFranchise/CR/CfCR';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/franchise-history" element={<FranchiseHistory/>} />
          <Route path="/current-franchise" element={<CurrentFranchise />} />
          <Route path="/cf-ad" element={<CfDb />} />
          <Route path="/cf-ab" element={<CfAB />} />
          <Route path="/cf-bo" element={<CfBO />} />
          <Route path="/cf-brs" element={<CfBRS />} />
          <Route path="/cf-cc" element={<CfCC />} />
          <Route path="/cf-cws" element={<CfCWS />} />
          <Route path="/cf-cr" element={<CfCR />} />


        </Routes>
    </div>
  );
}

export default App;
