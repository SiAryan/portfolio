import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { PHistory } from "../components/Phistory";
import { Footer } from "../components/Footer";
import { Nav, Navbar } from 'react-bootstrap';

export const PHpage = ()  => {
    return (
        <>
        <NavBar/>
        <PHistory/>
        <Footer/>
        </>
    );
};

export default PHpage;