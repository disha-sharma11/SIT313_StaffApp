import Card from "./Card";
import stafflist from "./stafflist";
import { useContext } from 'react';
import { StaffContext } from './context/Staff_context';
import './Card.css';

function cardcomponent(staff) {
  return (
    <Card 
      key={staff.key}
      image={staff.image}
      name={staff.name}
      position={staff.position}
    />
  );
}

function CardList(props) {
  const {staff} = useContext(StaffContext)

  const filteredstaff = staff.filter((staff) => {
    return staff.name.toLowerCase().startsWith(props.staffsearch.toLowerCase());
  });
  return (
    <div className="card-container">
      {filteredstaff.map(cardcomponent)}
    </div>
  );
}

export default CardList;
