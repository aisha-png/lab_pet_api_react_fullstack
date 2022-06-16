import './Pet.css';

const Pet = ({pet, deletePet}) => {

    const handleDeletePet = () => {
        deletePet(pet.id);
    }


    return (
        
        <>
            <div className="body">
                <div className="each_pet">
                    <h3>{pet.name}</h3>
                    <p>Type: {pet.type}</p>
                    <p>Breed: {pet.breed}</p>
                    <p>Age: {pet.age} years old</p>
                    <button onClick={handleDeletePet}>Delete Pet</button>
                    
                </div>
            </div>
        </>
        
    );
}

export default Pet;