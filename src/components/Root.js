import React from 'react';
import PetList from './PetList';
import axios from 'axios'

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.


const Root = () => {

  const [pets,setpets] = React.useState([]);
  const [isLoading,setisLoading] = React.useState(false)


  React.useEffect(() => {
    async function fetchPets() {
      try {
        setisLoading(true);
        const {data} = await axios.get('/api/pets')
        setpets(data)
        setisLoading(false);
      }catch(e){
        console.log(e)
      }
    }
    fetchPets();
  },[])

  return (
    <>
      <h1>Adoption Center</h1>
      {
      isLoading
        ? <h3><em>Loading...</em></h3>
        : <PetList pets={pets} />
      }
    </>
  )
}

export default Root;
