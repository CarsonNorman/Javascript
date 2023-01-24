import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Form from './form';

export function Main()  {
    const [data, setData] = useState(null)
    const [submit, setSubmit] = useState(false)
    
    
    useEffect(() => {
        const controller = new AbortController();
        axios
            .get("http://localhost:8000/api/products")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            return () => controller.abort()
    }, [submit]);

    const toggleSubmit = () =>{
        setSubmit(!submit)
    }
    const handleDelete = (id) => {
        const controller = new AbortController();
        axios
            .delete(`http://localhost:8000/api/products/${id}`, {
                signal: controller.signal,
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            toggleSubmit()
        return () => controller.abort()
    }

    return (
        <div className='w-25 mx-auto'>
            <Form toggleSubmit={toggleSubmit}/>
            {!data && <div>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            }
            {data && <div className='w-50 mx-auto'>
                {data.map((product, idx) => {
                    return (
                        <div id={idx} key={idx} className="card mt-5 p-3">
                            <h3 className='card-title' ><Link to={`/${product._id}`}>{product.title}</Link></h3>
                            <p className='card-text'>Price : ${product.price}</p>
                            <p className='card-text'>Description : {product.description}</p>
                            <button onClick={() => handleDelete(product._id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )

}

export default Main