import { useState } from "react";
import axios from 'axios'

function Info() {

    const [param, setParam] = useState('people')
    const [id, setId] = useState(null)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const getResults = (e) => {
        e.preventDefault()
        let url = 'https://swapi.dev/api/' + param + '/' + id
        axios.get(url)
            .then(res => { setData(res); setError(null) })
            .catch(err => {
                if (err) {
                    setError('These are not the droid you are looking for');
                    setData(null)
                }
            })
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
            {error &&
                <div>
                    <h5>{error}</h5>
                    <img src='https://i.kym-cdn.com/entries/icons/mobile/000/018/682/obi-wan.jpg' alt="Ben Kenobi" />
                </div>
            }
            {data &&

                <div>
                    {(param === 'people') &&
                        <div>
                            <p>Name: {data.data.name} </p>
                            <p>Height: {data.data.height} cm</p>
                            <p>Mass: {data.data.mass} Kg</p>
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