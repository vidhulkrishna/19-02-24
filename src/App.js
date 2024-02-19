import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Adminpanel/Home';
import Sidebar from './Components/Adminpanel/Sidebar';
import Topbar from './Components/Adminpanel/Topbar';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Plot from './Components/Plots/Plot';
import Plotdetails from './Components/Plots/Plotdetails';
import Build from './Components/Building/Build';
import Builddetails from './Components/Building/Builddetails';
// import Rent from './Components/Rentroom/Rent';
// import Rentdetails from './Components/Rentroom/Rentdetails';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>

    <Routes>

      <Route path={'/Home'}element={<Home />}></Route>
      <Route path={'/'}element={<Login/>}></Route>
      <Route path={'viewdetails'}element={<Plotdetails method='get'/>}></Route>
      <Route path='/Plot' element={<Plot method='post'/>}/>
      <Route path='/s'element={<Build method='post'/>}/>
      <Route path={'bdetails'}element={<Builddetails method='get'/>}></Route>
      {/* <Route path='/f'element={<Rent method='post'/>}/> */}
      {/* <Route path={'rdetails'}element={<Rentdetails method='get'/>}></Route> */}

    </Routes>
    
    
    
    
    </BrowserRouter>
    <Footer/>
      
    </div>
  );
}

export default App;
