import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.image} alt={props.name} />
            <h2 className="card-title" >{props.name}</h2>
            <p className="card-description" >{props.position}</p>
        </div>
    );
}

export default Card;