import axios from 'axios'
import { useState } from 'react';


function Form(props) {
    const [item, setItem] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8000/api/products', item)
        .then(res =>{ 
            console.log(res.data)
            props.toggleSubmit()
        })
        .catch(err => console.log(err))
        document.getElementById('form').reset()
    }

    return (
        <div>
            <form id='form' onSubmit={handleSubmit} >
                <div className='form-group'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className='form-control' id="title" onChange={e => setItem({...item, title: e.target.value})} required/>

                </div>
                <div className='form-group'>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" className='form-control' onChange={e => setItem({...item, price: e.target.value})} required/>

                </div>
                <div className='form-group'>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" className='form-control' onChange={e => setItem({...item, description: e.target.value})} required/>
                </div>
                <input className='btn btn-primary mt-3' type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;