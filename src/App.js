import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
// import { Main } from "./components/Main.js";
import { Banner } from "./components/Banner";
import { PHistory } from "./components/Phistory";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";


// const App = () => {
//   let routes = useRoutes([
//     { path: "/portfolio", element: <Banner /> },
//     { path: "/portfolio/professionalHistory", element: <PHistory /> },
//     // ...
//   ]);
//   return routes;
// };



function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
      <Routes>
        <Route path="/portfolio" element={<Banner/ >}/>
        <Route path="/portfolio/professionalHistory" element={<PHistory />}/>
      </Routes>
      </Router>
      {/* <Main /> */}
      {/* <Banner /> */}
      {/* <Testnet /> */}
      {/* <Team/> */}
      {/* <Projects /> */}
     
      <Footer />
    </div>
  );
}

export default App;
