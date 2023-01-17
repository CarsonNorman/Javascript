function Button(props) {
    return ( 
        <div>
            <button onClick={props.handleClick}>Click for Info</button>
        </div>
     );
}

export default Button;