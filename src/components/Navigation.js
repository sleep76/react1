import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { Button } from '@material-ui/core';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/"><Button color="primary">Home</Button></Link>
            <Link to="/about">About</Link>
            <Link to="/test">Test</Link>
        </div>
    );
}

export default Navigation;