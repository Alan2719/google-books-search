import React from 'react';
import "./styles.css"

function Jumbotron() {
return(
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <h1 className="display-4 title">Google Books Search <i class="fas fa-book"></i></h1>
        <h3 className="subtitle">Search and Save Books of Interest</h3>
        </div>
    </div>
)
}

export default Jumbotron;