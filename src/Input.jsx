function Input(props) {
    return (
        <div>
            <input 
            name=
            {props.name}
            type={props.what === "Password" ? "password" : "text"}
                placeholder={`Type ${props.placeholder}`}
                value={props.value}
                onChange={props.onChange} />
        </div>
    );
}

export default Input;