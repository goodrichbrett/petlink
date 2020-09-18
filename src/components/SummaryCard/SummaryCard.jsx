import React from "react";

const SummaryCard = ({pet}) => {
  return (
    <>
      <div>
        <img src="https://picsum.photos/100/100" />
        <h1>{pet.name}</h1>
        <h3>Current Post Information Here</h3>
      </div>
    </>
  );
};

export default SummaryCard;
