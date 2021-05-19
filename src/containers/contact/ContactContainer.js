import React from 'react'
import './ContactContainer.css'
import ContactForm from '../../components/ContactForm'

export default function ContactContainer(props) {
    return (
        <div 
        className={props.loading ? 'contact-container loading' : 'contact-container'}
            id="contact"
        >
            <ContactForm />
        </div>
    )
}
