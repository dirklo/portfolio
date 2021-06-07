import React from 'react'
import './ContactContainer.css'
import ContactForm from '../../components/ContactForm'

export default function ContactContainer(props) {
    return (
        <div 
        className={props.loading ? 'contact-container loading' : 'contact-container'}
            id="contact"
        >
            <h1>Let's work together!  Feel free to send me a message!</h1>
            <ContactForm />
        </div>
    )
}
