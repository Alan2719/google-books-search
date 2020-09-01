import React, { useEffect, useRef, useState } from 'react';
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Footer from "../components/footer";
import API from "../utils/API";
import SavedBooks from "../components/savedBooks";
//import "../../styles/about.css";

function Save () {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        API.getBooks()
        .then(result => {
            console.log(result);
            setAllBooks(result);
        })   
    });

    return(
        <>
            <Navbar />
            <Jumbotron />
            <SavedBooks 
                savedBooks = {allBooks}
            />
            <Footer />
        </>
    )
}


export default Save;