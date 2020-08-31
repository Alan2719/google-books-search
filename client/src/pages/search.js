import React, { useEffect, useRef, useState } from 'react';
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Footer from "../components/footer";
import { Input, Button } from "../components/search";
import BookCard from "../components/renderbooks";
import Container from "../components/container";
//import "../../styles/about.css";
import API from "../utils/API";

function Search () {
    const [bookInfo, setBookinfo] = useState([]);
    const [bookName, setBook] = useState("");

    const searchRef = useRef();
    
    function handleBookSearch(event) {
        event.preventDefault();
        console.log(event.target.value);
        const book = event.target.value;
        console.log(book);
        setBook(book);
    }

    function handleSubmitBook(event) {
        event.preventDefault();
        API.searchBook(bookName)
        .then(result => {
            console.log(result.data.items);
            const bookObject = result.data.items;
            setBookinfo(bookObject);
        });
    }

    function saveBook(event) {
        event.preventDefault();
        console.log(event.target.getAttribute("data-value"));
        const id = event.target.getAttribute("data-value");
        const savedBook = bookInfo.filter(item => item.id == id);
        console.log(savedBook[0].volumeInfo.imageLinks.smallThumbnail);
        API.saveBook({    
            title: savedBook[0].volumeInfo.title,
            author: savedBook[0].volumeInfo.authors[0],
            synopsis: savedBook[0].volumeInfo.description,
            image: savedBook[0].volumeInfo.imageLinks.smallThumbnail,
            link: savedBook[0].volumeInfo.infoLink
        })
        .then(bookSaved => {
            console.log(bookSaved)
        })
        .catch(err => console.log(err));
    }

    return(
        <>
            <Navbar />
            <Jumbotron />
            <Container>
                <h4>Book Search</h4>
                <Input
                    onChange={handleBookSearch}
                    name="book"
                 />
                 <Button 
                    onClick={handleSubmitBook}
                 />
            </Container>
            <Container>
                <h3>Results</h3>
                <BookCard 
                    books={bookInfo}
                    saveBook = {saveBook}
                />
            </Container>
            <Footer />  
        </>
    )
}


export default Search;