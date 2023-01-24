import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { useParams, useNavigate } from "react-router-dom";

function Item() {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get(`http://localhost:8000/api/products/${id}`, {
                signal: controller.signal,
            })
            .then(response => {
                setProduct(response.data.product)
            })
            .catch(err =>{ 
                console.log(err)
            
            })
            return () => controller.abort()
    }, [id])

    const handleDelete = (e) => {
        const controller = new AbortController();
        axios
        .delete(`http://localhost:8000/api/products/${id}`, {
            signal: controller.signal,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        navigate('/')
        return () => controller.abort()
    } 
    const handleUpdate = (e) =>{
        navigate(`/update/${id}`)
    }
    return (
        <div>
            {!product &&
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            }
            {product &&
                <div className="w-25 mx-auto card" >
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-text">${product.price}</p>
                    <p className="card-text">{product.description}</p>
                    <Link to={'/'}>Home</Link>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            }
        </div>
    );
}

export default Item;