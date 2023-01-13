import { useState } from "react";

function Form() {
    const [firstName, setFirstName] = useState('')
    const [fNameErrors, setFNameErrors] = useState('')
    const [lastName, setLastName] = useState('')
    const [lNameErrors, setLNameErrors] = useState('')
    const [email, setEmail] = useState('')
    const [emailErrors, setEmailErrors] = useState('')
    const [password, setPassword] = useState('')
    const [passwordErrors, setPasswordErrors] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [cPasswordErrors, setCPasswordErrors] = useState('')
    const handleFName = (e) => {
        e.preventDefault();
        if(e.target.value.length < 2 && e.target.value.length !== 0){
            setFNameErrors('First Name must be more than one character long')
            return fNameErrors
        } else {
            setFirstName(e.target.value);
            setFNameErrors(null)
        }
    }
    const handleLName = (e) => {
        e.preventDefault();
        if(e.target.value.length < 2 && e.target.value.length !== 0){
            setLNameErrors('Last Name must be more than one character long')
            return lNameErrors
        } else {
            setLastName(e.target.value);
            setLNameErrors(null)
        }
    }
    const handleEmail = (e) => {
        e.preventDefault();
        if(e.target.value.length < 5 && e.target.value.length !== 0){
            setEmailErrors('Email must be at least 5 characters long')
            return emailErrors
        } else {
            setEmail(e.target.value);
            setEmailErrors(null)
        }
    }
    const handlePassword = (e) => {
        e.preventDefault();
        if(e.target.value.length < 8 && e.target.value.length !== 0){
            setPasswordErrors('Password must be at lease 8 characters long')
            setPassword(e.target.value)
            return passwordErrors
        } else {
            setPassword(e.target.value)
            setPasswordErrors(null)
        }
    }
    const handleCPassword = (e) => {
        e.preventDefault();
        if(e.target.value !== password){
            setCPasswordErrors('Password do not match')
            setCPassword(e.target.value);
            return cPasswordErrors
        } else {
            setCPassword(e.target.value);
            setCPasswordErrors(null)
        }
    }
    return (
        <div className="form">
            <form>
                <div className="firstName">
                {fNameErrors && <div>{fNameErrors}</div>}
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" className="" onChange={handleFName} />
                </div>
                <div className="lastName">
                {lNameErrors && <div>{lNameErrors}</div>}
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" className="" onChange={handleLName} />
                </div>
                <div className="email">
                {emailErrors && <div>{emailErrors}</div>}
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="" onChange={handleEmail} />
                </div>
                <div className="password">
                {passwordErrors && <div>{passwordErrors}</div>}
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="" onChange={handlePassword} />
                </div>
                <div className="cPassword">
                {cPasswordErrors && <div>{cPasswordErrors}</div>}
                    <label htmlFor="cPassword">Confirm Password</label>
                    <input type="password" name="cPassword" id="cPassword" className="" onChange={handleCPassword} />
                </div>
            </form>
            <div id="info" className="">
                <h3>Form info</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {cPassword}</p>
            </div>
        </div>
    );
}

export default Form;