import { useState } from "react";
import axios from 'axios'

function Info() {
 
    const [param, setParam] = useState('people')
    const [id, setId] = useState(null)
    const [data, setData] = useState(null)

    const getResults = (e) => {
        e.preventDefault()
        let url = 'https://swapi.dev/api/' + param + '/' + id
        axios.get(url)
        .then(res => { setData(res); console.log(res.data) })
    }
    return (
        <div>
            <form onSubmit={getResults}>
                <select name="param" id="param" onChange={e => setParam(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <input type="number" onChange={e => setId(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {data &&
                
                <div>
                    {(param === 'people') &&
                        <div>
                            <p>Name: {data.data.name} </p>
                            <p>Height: {data.data.height} </p>
                            <p>Mass: {data.data.mass} </p>
                            <p>Skin Color: {data.data.skin_color} </p>
                        </div>
                    }
                    {(param === 'planets') &&
                        <div>
                            <p>Name: {data.data.name} </p>
                            <p>Climate: {data.data.climate} </p>
                            <p>Terrain: {data.data.terrain} </p>
                            <p>Surface Water: {data.data.surface_water} </p>
                        </div>
                    }

                </div>
            }
        </div>
    );
}

export default Info;