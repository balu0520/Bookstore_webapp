import {React, Component} from "react"

import  Axios  from 'axios'
import './index.css'
import { Link, } from "react-router-dom"

class BookStore extends Component {
    state = {bookItems:[]}

    componentDidMount(){
        Axios.get("http://books-backend.northeurope.cloudapp.azure.com:3389/get-book-items").then((response) =>{
            let data = response.data 
            this.setState({bookItems:data})
        })
    }


    render(){
        const {bookItems} = this.state
        
        return(
            <div className='print-pdf-container'>
                <div className="header-container">
                    <h1 className="heading">Books Store</h1>
                    <Link to="/add-book" className="navigating-link">
                    <button className="add-button" type="button">ADD BOOK</button>
                    </Link>
                </div>
                <div className="container">
                <ul className="books-list">
                    {bookItems.map(item => (
                        <li key={item.title} className="book-item">
                            <div className="item-container">
                                <h1 className="item-title">{item.title}</h1>
                                <h1 className="item-author">- {item.author}</h1>
                            </div>
                            <p className="item-country">country: {item.country}</p>
                            <p className="item-language">Language: {item.language}</p>
                            <a href={item.wiki_link} target="_blank" className="item-link">{item.wiki_link}</a>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        )
    }

    
}

export default BookStore

