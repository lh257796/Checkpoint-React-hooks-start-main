import React from 'react';
import SinglePet from './SinglePet';

// const cody = {
//   id: 2,
//   name: 'Cody',
//   description: 'Adorable pug who loves to hug',
//   species: 'dog',
// };

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!

function PetList(props) {
  const [current, setcurrent] = React.useState('all')

  const changeState = (event) => {
    setcurrent(event.target.value)
  }

  return (
    <>
        <select onChange={changeState}>
          <option value='all'>All</option>
          <option value='cat'>Cats Only</option>
          <option value='dog'>Dogs Only</option>
        </select>
      <div className="pet-list">
        {props.pets

          .filter(pet => {
            return current.includes(pet.species) || current === 'all'
          })

          .map((pet,idx) =>
            <SinglePet pet={pet} key={idx} />
          )
          }
      </div>

    </>
  )
}

export default PetList;
