import axios from "axios";
import { useState } from "react";

function AddAuthor(props) {
    const [form, setForm] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:8000/api/', form)
            .then(res =>{
                console.log(res)
                props.handleLoad()
            })
            .catch(err => console.log(err))
            document.getElementById('AddAuthor').reset()
    }

    return ( 
        <div>
          <form id='AddAuthor' onSubmit={handleSubmit}>
            <label htmlFor="name">New Author</label>
            <input className="form-control" type="text" name="name" id="name" required minLength={5} onChange={(e) => setForm({name: e.target.value})} />
            <button type="submit" >Submit</button>
          </form>
        </div>
     );
}

export default AddAuthor;