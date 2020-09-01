import React from "react";
import "./styles.css";

function SavedBookCard(props) {
    return (
        <h4>Books Saved</h4>
    )
    // console.log(props.books);
    // return (
    //     props.books.map(({volumeInfo, id}) => {
    //         return(
    //         <div className="card mb-3">
    //             <div className="row no-gutters">
    //                 <div className="col-md-4">
    //                 <img src={volumeInfo.imageLinks} className="card-img" alt="..."></img>
    //                 </div>
    //                 <div className="col-md-8">
    //                 <div className="card-body">
    //                     <h4 className="card-title">{volumeInfo.title}</h4>
    //                     <h5 className="card-title">Written by {volumeInfo.authors[0]}</h5>
    //                     <p className="card-text">{volumeInfo.description}</p>
    //                     <a href={volumeInfo.infoLink} target="_blank" className="btn btn-primary">View</a>
    //                     <button type="button" class="btn btn-success" onClick={props.saveBook} data-value={id}>Save</button>
    //                 </div>
    //                 </div>
    //             </div>
    //         </div>
    //         )
    //     })
    // )
}
    
export default SavedBookCard;