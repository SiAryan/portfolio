import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./pages/Home";
import { PHpage } from "./pages/PHpage";
import { 
  Routes,
  Route,
  Navigate,
} from "react-router-dom";




function App() {
  return (
    
      
      
      <Routes>
        <Route exact path="/" element={<Navigate to="/portfolio"/>}/>
        <Route exact path="/portfolio" element={<Home/>}/>
        <Route exact path="/portfolio/professionalHistory" element={<PHpage/>}/>
      </Routes>
      
  
    );
}

export default App;
