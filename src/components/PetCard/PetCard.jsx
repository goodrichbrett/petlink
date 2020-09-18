import React from 'react';
import {Link} from 'react-router-dom'

const PetCard = ({pet}) => {
    return (
    <div id='petcard'>
        <img src={pet.avatar} alt="Pet Photo"/>
        <h3>{pet.name}</h3>
        <Link
            to={{
                pathname: '/edit-pet',
                state: {pet}
            }}
        >Edit</Link> 
        <ul>
        <li>{pet.type}</li>
        <li>{pet.breed}</li>
        <li>{pet.gender}</li>
        <li>{pet.age}</li>
        <li>Illnesses: {pet.illnesses.join(', ')}</li> 
        {/* followers? */}
        </ul>
        
    </div>
    );
}
 
export default PetCard;