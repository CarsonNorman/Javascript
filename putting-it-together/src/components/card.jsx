import { useState } from "react";

function Card (props) {
    const [age, setAge] = useState(props.person.age)
    const {fname, lname, hcolor} = props.person
    return ( 
        <div className="border border-dark rounded bg-light mt-5 w-25 mx-auto">
            <h3>{fname}, {lname}</h3>
            <p>Age, {age}</p>
            <p>Hair Color: {hcolor}</p>
            <button className="mb-2 btn btn-primary" onClick={() =>setAge(age + 1)}>Add Year</button>
        </div>
     );
}

export default Card;