import axios from "axios";
const APIKey = "AIzaSyANEf3BZpRJiv5Izb20X-Zwc7wXYrEus5Y";

export default {
    searchBook: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "epub&partial=" + APIKey);
    },
    getBooks: function() {
        return axios.get("/api/books");
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
    }
}