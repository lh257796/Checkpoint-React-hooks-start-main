import React from 'react';


function SinglePet(props) {

  const [adopted, setadopted] = React.useState(false);

  const returnStatus = () => {
    return adopted ? "adopted":"available"
  }

  return (
    <div className={adopted ? "single-pet "+returnStatus:"single-pet"}>
      <h2>Name: {props.pet.name}</h2>
      <p><em> {props.pet.description} </em></p>
      <p>Species: {props.pet.species}</p>
      <p>Adoption Status: {adopted ? "Already adopted...":"Available!"}</p>
      <div>
        <button className={"single-pet "+returnStatus()} onClick={() => setadopted(!adopted)}>
          {adopted ? "Already adopted...":"Available!"}
          </button>
      </div>
    </div>
  );
}

export default SinglePet;
