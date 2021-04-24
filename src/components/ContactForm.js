import React, { Component } from 'react'
import './ContactForm.css'

export default class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            contactName: '',
            email: '',
            message: '',
            contactNameActive: false,
            emailActive: false
        }
    }

    handleOnChange = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    activateField=(e)=> { 
        this.setState({
            [`${e.target.name}Active`]: true
        })
    }
  
    disableField=(e)=> {
        this.setState({
            [`${e.target.name}Active`]: false
        })
    }

    disableFocus=(e)=> {
        if (e.target.value === "") {
            this.disableField(e);
        }
    }

    render() {
        return (
            <form className='contact-form' onSubmit={this.handleOnSubmit}>
                <div className='input-div'>
                    <label 
                        className={this.state.contactNameActive ? "active" : ""}
                        htmlFor='contactName'
                    >
                        Name
                    </label><br/>
                    <input 
                        type='text'
                        name='contactName'
                        id='contactName'
                        onChange={this.handleOnChange}
                        onFocus={this.activateField} 
                        onBlur={this.disableFocus}
                        value={this.state.contactName}
                        placeholder=' '
                        >
                    </input>
                </div>
                <br/>
                <div className='input-div'>
                    <label 
                        className={this.state.emailActive ? "active" : ""}
                        htmlFor='email'
                    >
                        Email
                    </label><br/>
                    <input 
                        type='email'
                        name='email'
                        id='email'
                        onChange={this.handleOnChange}
                        onFocus={this.activateField} 
                        onBlur={this.disableFocus}
                        value={this.state.email}
                        placeholder=' '
                        >
                    </input>
                </div>
                <br/><br/>
                <label
                    htmlFor='message'
                >
                    Message
                </label>
                <br/>
                <br/>
                <textarea
                    name='message'
                    id='message'
                    onChange={this.handleOnChange}
                    value={this.state.message}
                >
                </textarea>
            </form>
        )
    }
}
