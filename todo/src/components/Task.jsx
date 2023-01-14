function Task(props) {
    const name = props.name
    const description = props.description
    let checkedStatus = false
    const handleCross = () => {
        if (!checkedStatus) {
            checkedStatus = true
            document.getElementById('desc' + props.id).style.setProperty("text-decoration", "line-through");
        } else {
            document.getElementById('buttonform' + props.id).reset();
            document.getElementById('desc' + props.id).style.setProperty("text-decoration", "");
            checkedStatus = false
        }
    }
    return (
        <div className="mx-auto d-flex align-items-center justify-content-sm-between border-bottom mt-5" id={'body' + props.id}>
            <div className="mx-2">
                <h2>Task: {name}</h2>
                <p id={'desc' + props.id}>{description}</p>
            </div>
            <div >
                <form id={'buttonform' + props.id} className="d-flex flex-row">
                    <div className="mx-5">
                        <label htmlFor={'radio' + props.id} className='mx-2'>Done</label>
                        <input type="radio" id={'radio' + props.id} name={'radio' + props.id} onClick={handleCross}  />
                    </div>
                    <button type='button' onClick={() => { props.handleDelete(props.id) }}>Delete</button>
                </form>
            </div>
        </div>
    );
}

export default Task;