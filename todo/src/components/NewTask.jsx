import { useState } from "react"

function NewTask(props) {
const [error, setError] = useState(false);

const handleSubmit = (e) =>{
    e.preventDefault()
    if(e.target[0].value.length === 0|| e.target[1].value === 0){
        setError(true)
        return error
    }
    let task = {
        name: e.target[0].value,
        description: e.target[1].value,
    }
    setError(false)
    props.handleAdd(task)
}
    return (
        <div className="mx-auto">
            {error && <p>Please add text to both fields</p>}
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column">
                    <label htmlFor="name">Task Name</label>
                    <input type="text" name="name" id="name" className="" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="desc">Task Description</label>
                    <textarea name="desc" id="desc" rows='4' cols='50' />
                </div>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
}

export default NewTask;