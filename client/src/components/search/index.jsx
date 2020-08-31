import React from 'react';
import "./styles.css"

export function Input(props) {
    return(
        <div className="form-group row SearchInput">
            {/*<label for="inputEmail3" className="col-sm-2 col-form-label">Book</label>*/}
            <div className="col-sm-12">
            <input type="text" className="form-control input" id="inputEmail3" placeholder="Search a book" {...props}></input>
            </div>
        </div>
    )
}

export function Button(props) {
    return(
<div className="form-group row SearchBtn">
                <div className="col-sm-10">
                <button {...props} className="btn btn-primary">Search</button>
                </div>
            </div>

    )
}
