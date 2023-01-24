import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";

function Item() {
    const { id } = useParams();
    console.log(id)
    const [product, setProduct] = useState(null)
   

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get(`http://localhost:8000/api/products/${id}`, {
                signal: controller.signal,
            })
            .then(response => {
                setProduct(response.data.product)
                console.log(response.data.product)
            })
            .catch(err => console.log(err))
    }, [id])
    return (
        <div>
            {!product &&
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }
            {product &&
                <div className="w-25 mx-auto card" >
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-text">${product.price}</p>
                    <p className="card-text">{product.description}</p>
                    <Link to={'/'}>Home</Link>
                </div>
            }
        </div>
    );
}

export default Item;