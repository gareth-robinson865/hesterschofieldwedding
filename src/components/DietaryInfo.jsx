/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function DietaryInfo({ setDietary, setName, setIsVegan, setNonVeg}) {
    const [evening, setEvening] = useState(true)
  return (
    <div>
        <h4>Your info</h4>
        <label htmlFor="name">Who is responding</label>
        <br></br>
        <input 
            type="text" 
            id="name" 
            name="name"  
            required onChange={(e) => setName(e.target.value)}>
        </input>
        <h4>Are you vegan, vegetarian or have dietary requirements</h4>
        <label htmlFor="vegan">Vegan</label>
        <input 
            type="radio" 
            id="vegan"
            name="diet" 
            value="vegan" 
            onChange={(e) => setIsVegan(e.target.value)}>
        </input>
        <label htmlFor="vegetarian">Vegetarian</label>
        <input 
            type="radio" 
            id="vegetarian"
            name="diet" 
            value="vegetarian" 
            onChange={(e) => setIsVegan(e.target.value)}>
        </input>
        <label htmlFor="none">None</label>
        <input 
            type="radio" 
            id="normal"
            name="diet" 
            value="normal" 
            onChange={(e) => setNonVeg(e.target.value)}>
        </input>
        <br></br>
        <br></br>
        <label htmlFor="dietary">Let us know if you have any dietary requirements</label>
        <br></br>
        <input 
            type="text" 
            id="dietary" 
            name="dietary" 
            onChange={(e) => setDietary(e.target.value)}>
        </input>
    </div>
  )
}
