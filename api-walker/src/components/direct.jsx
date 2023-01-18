import axios from 'axios'
import { useParams } from "react-router-dom";
import { useState } from "react";

function Direct() {
    const { item, id } = useParams()
    const [data, setData] = useState(null)

    
    const getInfo =  () => {
        let url = 'https://swapi.dev/api/' + item + '/' + id
        axios.get(url)
            .then(res => setData(res.data))
    }
    getInfo();

    return (
        <div>
            {!data && 
                <div className="spinner-border" role="status">
                <span className="sr-only"></span>
                </div>
            }
            {data &&
                <div>
                    {(item === 'people') &&
                        <div>
                            <p>Name: {data.name} </p>
                            <p>Height: {data.height} </p>
                            <p>Mass: {data.mass} </p>
                            <p>Skin Color: {data.skin_color} </p>
                        </div>
                    }
                    {(item === 'planets') &&
                        <div>
                            <p>Name: {data.name} </p>
                            <p>Climate: {data.climate} </p>
                            <p>Terrain: {data.terrain} </p>
                            <p>Surface Water: {data.surface_water} </p>
                        </div>
                    }

                </div>
            }
        </div>
    );
}

export default Direct;