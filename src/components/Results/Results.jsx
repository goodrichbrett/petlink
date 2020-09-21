import React from 'react'
import SummaryCard from '../SummaryCard/SummaryCard';

const Results = (props) => {
    return ( <>{props.pets.map((pet, idx) => (
        <SummaryCard key={idx} pet={pet} />
    ))} 
    </>);
}
 
export default Results;