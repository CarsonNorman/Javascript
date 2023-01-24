import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";


function Update() {
    const [item, setItem] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() =>{
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setItem(res.data.product)
                console.log(res.data.product)
            })
            .catch(err => console.log(err))

    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:8000/api/products/${id}`, item)
        .then(res =>{ 
            console.log(res.data)
        })
        .catch(err => console.log(err))
        navigate('/')
    }



    return (
        <div>
             {item &&
                <form id='form' onSubmit={handleSubmit} >
                <div className='form-group'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className='form-control' id="title" value={item.title} onChange={e => setItem({...item, title: e.target.value})} required/>

                </div>
                <div className='form-group'>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" className='form-control' value={item.price} onChange={e => setItem({...item, price: e.target.value})} required/>

                </div>
                <div className='form-group'>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" className='form-control' value={item.description} onChange={e => setItem({...item, description: e.target.value})} required/>
                </div>
                <input className='btn btn-primary mt-3' type="submit" value="Submit" />
            </form>}
            
        </div>
    );
}

export default Update;