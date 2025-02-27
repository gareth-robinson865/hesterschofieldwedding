import { useState } from "react";

export default function Starters() {
    const starter1 = 'Baked Goats Cheese Crottin';
    const starter2 = 'Thai Spiced Fish Cakes';

    const [starter, setStarter] = useState('');
  return (
    <div id="starters">
        <h4>Starters</h4>
        <label htmlFor="starter1">{starter1}</label>
        <input 
            type="radio" 
            id="starter1" 
            name="starters" 
            value="cheese" 
            onChange={(e) => setStarter(e.target.value)}></input> <br></br>

        <label htmlFor="starter2">{starter2}</label>
        <input 
            type="radio" 
            id="starter2" 
            name="starters" 
            value="fishcakes" 
            onChange={(e) => setStarter(e.target.value)}></input> <br></br>
    </div>
  )
}
