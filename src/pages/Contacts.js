import './Contacts.css';
import { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contacts() {
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Field cannot be empty');
    const [telephoneError, setTelephoneError] = useState('Field cannot be empty');

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(e.target.value.toLowerCase())) {
            setEmailError('Email is incorrect');
        } else {
            setEmailError('');
        }
    }

    const telephoneHandler = (e) => {
        setTelephone(e.target.value);
        const pattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/;

        if (!pattern.test(e.target.value)) {
            setTelephoneError('Telephone is incorrect');
        } else {
            setTelephoneError('');
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            default:
                break;
        }
    }

    return (
        <div className="contacts-container">
            <div className="content">
                <div className="left-side">
                    <div className="icon"><IoHome /></div>
                    <div className="address details">
                        <div className="topic">Address:</div>
                        <div>Kyiv</div>
                        <div>Tychyny P 21-120</div>
                    </div>
                    <div className="icon"><FaPhone /></div>
                    <div className="phone details">
                        <div className="topic">Telephone:</div>
                        <div>8-800-200-00-00</div>
                    </div>
                    <div className="icon"><MdEmail /></div>
                    <div className="email details">
                        <div className="topic">Email:</div>
                        <div>support@gmail.com</div>
                        <div>admin@gmail.com</div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="title-text">Send a message</div>
                    <p>If you have questions or suggestions - fill out the form.</p>
                    <form action="#">
                        <div className="contacts-input">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="contacts-input">
                            {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="text" placeholder="Email" />
                        </div>
                        <div className="contacts-input">
                            {(telephoneError && emailDirty) && <div style={{ color: 'red' }}>{telephoneError}</div>}
                            <input onChange={e => telephoneHandler(e)} value={telephone} onBlur={e => blurHandler(e)} name='telephone' type="text" placeholder="Phone" />
                        </div>
                        <div className="contacts-input message-input">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div className="contact-button">
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}