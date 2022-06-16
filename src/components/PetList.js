import Pet from "./Pet";
import './PetList.css'

const PetList = ({pets, deletePet}) => {
    const petComponents = pets.map(pet => {
        return <Pet 
                    key={pet.id}
                    pet={pet} 
                    deletePet={deletePet}
                    />
    })




    return (
        <>
            <h3>List of Pets</h3>
            {petComponents}
        </>
    );
}

export default PetList;