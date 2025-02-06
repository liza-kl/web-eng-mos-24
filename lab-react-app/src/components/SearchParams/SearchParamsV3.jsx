/**
 * Einführung vom useState Hook
 */
import { useEffect, useState } from "react";
import Pet from "../Pet/Pet";


export const SearchParamsV3 = () => {
const [pets, setPets] = useState([]);
const [location, setLocation] = useState("");

async function requestPets() {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=dog&location=${location}&breed=poodle`
  );
  const json = await res.json();

  setPets(json.pets);
}

useEffect(() => {
  requestPets();
}, []); 


return (
    <div className="search-params">
    <form  onSubmit={e => {
    e.preventDefault();
    requestPets();
  }}>
        <label htmlFor="location">
        Location
        <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            />
        </label>
        <button>Submit</button>
    </form>
    {
  pets.map((pet) => (
    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
  ))
}
    </div>
);
};
