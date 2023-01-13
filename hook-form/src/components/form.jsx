import { useState } from "react";

function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    return (
        <div className="form">
            <form>
                <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" className="" onChange={(e) => {e.preventDefault(); setFirstName(e.target.value)}}/>
                </div>
                <div className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" className="" onChange={(e) => {e.preventDefault(); setLastName(e.target.value)}}/>
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="" onChange={(e) => {e.preventDefault(); setEmail(e.target.value)}}/>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="" onChange={(e) => {e.preventDefault(); setPassword(e.target.value)}}/>
                </div>
                <div className="cPassword">
                    <label htmlFor="cPassword">Confirm Password</label>
                    <input type="password" name="cPassword" id="cPassword" className="" onChange={(e) => {e.preventDefault(); setCPassword(e.target.value)}}/>
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