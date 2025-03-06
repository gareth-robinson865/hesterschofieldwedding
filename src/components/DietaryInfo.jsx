/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function DietaryInfo({ setDietary, setNonVeg}) {
    const [day, setDay] = useState(false)
    const [isVegan, setIsVegan] = useState()
  return (
    <div>
        <div id="guestType">
            <h4>Are you joining us for the day or the evening?</h4>
            <label htmlFor="day">Day</label>
            <input 
                type="radio"
                id="day"
                name="guestType"
                value="day"
                onChange={() => setDay(true)}>
            </input>
            <label htmlFor="evening">Evening</label>
            <input 
                type="radio"
                id="evening"
                name="guestType"
                value="evening"
            >
            </input>
        </div>

        { day && <div id="foodStuff">
            <h4>Are you vegan, vegetarian or have dietary requirements</h4>
            <label htmlFor="vegan">Vegan</label>
            <input 
                type="radio" 
                id="vegan"
                name="diet" 
                value="vegan" 
                onChange={(e) => setIsVegan(e.target.value)}
                required>
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
                value="not vegan or veggie" 
                onChange={(e) => setNonVeg(e.target.value)}>
            </input>
            <br></br>
            <br></br>
            { isVegan && <div>
                <label htmlFor="dietary">Please let us know your dietary requirements</label>
                <br></br>
                <input 
                    type="text" 
                    id="dietary" 
                    name="dietary" 
                    onChange={(e) => setDietary(e.target.value)}>
                </input>
            </div> }
        </div> }
    </div>
  )
}
