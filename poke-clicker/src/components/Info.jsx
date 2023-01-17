import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
function Info() {
    const [response, setResponse] = useState(null)

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1279")
        .then(response => {setResponse(response.data.results)})
   

    }, [])

    return ( 
        <div>
            <ul className='list-group'>
            { response && 
                response.map((data, idx) => {return <li className='list-group-item'>{idx + 1} : {data.name}</li>})
            }
            </ul>
        </div>
     );
}

export default Info;