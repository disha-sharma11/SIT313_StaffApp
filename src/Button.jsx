function Button(props) {
    return (
        <div>
            <button 
            type={props.type} 
            onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    );
}

export default Button;