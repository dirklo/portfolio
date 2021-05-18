import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import './ContactForm.css'

export default class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            contactName: '',
            email: '',
            message: '',
            contactNameActive: false,
            emailActive: false,
            success: false,
            failure: false,
        }
    }

    handleOnChange = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4vc0z98', 'template_hhzaron', e.target, 'user_myH7KNeG4kPpX8Fw6Nj1u')
        .then((res) => {
            this.setState({
                ...this.state,
                success: true,
                failure: false
            });
        }, (error) => {
            this.setState({
                ...this.state,
                success: false,
                failure: true
            });
        });
        this.setState({
            ...this.state,
            contactName: '',
            email: '',
            message: '',
            contactNameActive: false,
            emailActive: false
        })
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
                        required
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
                        required
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
                    required
                >
                </textarea>
                <input type="submit" value="Send Message"/>
                {this.state.success ? 
                    <div className="success">
                        Thank you! Message sucessfully sent!
                    </div>
                : null} 
                {this.state.failure ?
                    <div className="failure">
                        Something went wrong, please try again later!
                    </div> 
                : null}
            </form>
        )
    }
}
