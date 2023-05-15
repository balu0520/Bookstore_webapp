import {Link} from "react-router-dom"
import { Component } from "react";
import Axios from 'axios'
import './index.css'

class AddBook extends Component {
    state = {author:'',country:'',language:'',wiki_link:'',title:''}

    onSubmitForms = async event => {
        const {author,country,language,wiki_link,title} = this.state
        event.preventDefault()
        if (title === ""){
            alert("enter title details");
        }else if(author === ""){
            alert("enter author details");
        }else if(country === ""){
            alert("enter country details");
        }else if(language === ""){
            alert("enter language details");
        }else if(wiki_link === ""){
            alert("enter wikipedia link details");
        } else {
        Axios.post('http://books-backend.northeurope.cloudapp.azure.com:3389/add-book-item',{
            author:author,
            country:country,
            language:language,
            wiki_link:wiki_link,
            title:title
        }).then((response) => {
            console.log(response)
            console.log(response.status)
            if (response.status === 200){
                alert("Entered Successfully You can go back to your Book Store")
                this.setState({author:'',country:'',language:'',wiki_link:'',title:''})
            }else{
                alert("You missed some of the details! Please Enter")
            }

        })
    }
    }

    onChangeAuthor = event => {
        this.setState({author:event.target.value})
    }

    onChangeCountry = event => {
        this.setState({country:event.target.value})
    }

    onChangeLanguage = event => {
        this.setState({language:event.target.value})
    }

    onChangeWiki = event => {
        this.setState({wiki_link:event.target.value})
    }

    onChangeTitle = event => {
        this.setState({title:event.target.value})
    }

    render() {
        const {author,country,language,wiki_link,title} = this.state

        return (

            <div className="bg-container">
                    <h1 className="heading-1">Add Book Details</h1>
                    <form className="form-container" onSubmit={this.onSubmitForms}>
                        <div className="input-container">
                            <label htmlFor="title" className="label">
                                Title 
                            </label>
                            <input type="text" value={title} onChange={this.onChangeTitle} id="title" className="input-form"/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="author" className="label">
                                Author 
                            </label>
                            <input type="text" value={author} onChange={this.onChangeAuthor} id="author" className="input-form"/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="country" className="label">
                                Country 
                            </label>
                            <input type="text" value={country} onChange={this.onChangeCountry} id="country" className="input-form"/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="language" className="label">
                                Language 
                            </label>
                            <input type="text" value={language} onChange={this.onChangeLanguage} id="language" className="input-form"/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="wiki" className="label">
                                wikipedia link 
                            </label>
                            <input type="text" value={wiki_link} onChange={this.onChangeWiki} id="wiki" className="input-form"/>
                        </div>
                        <button type="submit" className="submit-btn">submit</button>
                        <Link to="/" className="navigating-link">
                            <button className="navigating-button" type="button">Go back</button>
                        </Link>
                    </form>
                </div>
        )
        
    }
}

export default AddBook