import React from 'react';
import Upload from './Upload';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Gallery from './Gallery';
import './style.css';

export function App(){

    return (
        <div>
            <h1 className="title">Image Gallery</h1>
            <Router>
            
                <div className="tabs">
                <button><Link to="/upload">Upload</Link></button>
                <button><Link to="/gallery">Gallery</Link></button>
                </div>
                <Switch>
                    <Route path="/upload">
                        <Upload/>
                    </Route>
                    <Route path="/gallery">
                        <Gallery />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;