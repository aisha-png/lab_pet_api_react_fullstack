const Pet = ({pet, deletePet}) => {

    const handleDeletePet = () => {
        deletePet(pet.id);
    }


    return (
        <>
            <h3>{pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age} years old</p>
            <button onClick={handleDeletePet}>Delete Pet</button>
            <hr />
        </>
    );
}

export default Pet;