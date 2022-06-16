import { useState } from "react";

const NewPetForm = ({postPet}) => {

    const [statePet, setStatePet] = useState({
        name: "",
        type: "",
        breed: "",
        age: ""
    })

    const handleChange = (event) => {
        console.log(event);
        let petName = event.target.name;
        let copiedPet = {...statePet};
        copiedPet[petName] = event.target.value;
        setStatePet(copiedPet);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postPet(statePet);
    }


    return (
        <>
            <h3>Add a new pet here!</h3>
            <form onSubmit={handleFormSubmit}>
                <input type="text" 
                    placeholder="pet name" 
                    name="name" 
                    onChange={handleChange} 
                    value={statePet.name}/>
                <input type="text" 
                    placeholder="pet type" 
                    name="type" 
                    onChange={handleChange} 
                    value={statePet.type}/>
                <input type="text" 
                    placeholder="pet breed" 
                    name="breed" 
                    onChange={handleChange} 
                    value={statePet.breed}/>
                <input type="text" 
                    placeholder="pet age" 
                    name="age" 
                    onChange={handleChange} 
                    value={statePet.age}/>
                <button type="submit">OK</button>
            </form>

        </>
    );
}

export default NewPetForm;