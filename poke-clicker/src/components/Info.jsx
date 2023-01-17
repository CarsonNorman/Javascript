import axios from 'axios';
import { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

function Info() {
    const [response, setResponse] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1279")
                .then(response => { setResponse(response.data.results) })
        }
        getData();
    }, []);

    const handleCall = async (url) => {
        await axios.get(url)
            .then(res => { setData(res.data) })
    }
    const handleBack = () =>{
        setData(null)
    }

    return (
        <div>
            {!data &&
                <ul className='list-group'>
                    {response &&
                        response.map((data, idx) => { return <li className='list-group-item' key={data.name} onClick={() => handleCall(data.url)}>{idx + 1} : {data.name}</li> })
                    }

                </ul>
            }
            {data && <div>
                <Pokemon props={{...data}} handleBack={handleBack} />
            </div>}
        </div>
    );
}

export default Info;