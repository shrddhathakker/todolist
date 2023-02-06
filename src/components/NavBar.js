import React from 'react';

import {Link } from "react-router-dom";

const NavBar = ()=>{

    return (
        <nav style={{ marginBottom:20 }} className="navbar navbar-dark bg-secondary">
            <Link to="/" className="navbar-brand" >To do list</Link>
            <Link to="/addnote" className="navbar-brand">Add Note</Link>
        </nav>

    );

};
export default NavBar;
