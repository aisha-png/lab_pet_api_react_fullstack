import { useState } from "react";
import './NewPetForm.css';

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
            <form onSubmit={handleFormSubmit}>
            <h2>Add a new pet here!</h2>
                <p>Enter pet name: <input type="text" 
                    placeholder="pet name" 
                    name="name" 
                    onChange={handleChange} 
                    value={statePet.name}/></p>
                    <br></br>
                <p>Enter pet type: <input type="text" 
                    placeholder="pet type" 
                    name="type" 
                    onChange={handleChange} 
                    value={statePet.type}/></p>
                    <br></br>
                <p>Enter pet breed: <input type="text" 
                    placeholder="pet breed" 
                    name="breed" 
                    onChange={handleChange} 
                    value={statePet.breed}/></p>
                    <br></br>
                <p>Enter pet age: <input type="text" 
                    placeholder="pet age" 
                    name="age" 
                    onChange={handleChange} 
                    value={statePet.age}/></p>
                    <br></br>
                <button type="submit">ENTER</button>
            </form>

        </>
    );
}

export default NewPetForm;