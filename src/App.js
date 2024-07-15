import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GymListing from './GymListing';
import GymCreate from './GymCreate';
import EmpDetail from './GymDetail';
import Navbar from './components/Navbar';
import Contacte from './components/Contacte';
import About from './components/About';
import Home from './components/Home';
import GymEdit from './GymEdit';
import Footer1 from './components/Footer1';
import Cards from './components/Cards';






function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar/>
    
      {/* <About/>
      <Contacte/> */}
        <Routes>
        <Route path='/GymListing' element={<GymListing />}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Contacte' element={<Contacte/>}></Route>
        <Route path='/About' element={<About/>}>
        </Route>
          
          <Route path='/GymCreate' element={<GymCreate />}></Route>

          <Route path='/EmpDetail/:empid' element={<EmpDetail />}></Route>
          <Route path='/GymEdit/:empid' element={<GymEdit />}></Route>
        </Routes>
      </BrowserRouter>
      <Cards/>
      <Footer1/>
    </div>
  );

}

export default App;
