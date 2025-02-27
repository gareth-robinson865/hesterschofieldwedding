import { useState } from "react";

export default function Mains() {
    const main1 = 'Fillet of Yorkshire Beef en Croute';
    const main2 = 'Fillet of Salmon en Croute';

    const [main, setMain] = useState('');

    return (
    <div>
        <h4>Mains</h4>
        <label htmlFor="main1">{main1}</label>
        <input 
            type="radio" 
            id="main1" 
            name="mains" 
            value="beef" 
            onChange={(e) => setMain(e.target.value)}>
        </input> <br></br>

        <label htmlFor="main2">{main2}</label>
        <input 
            type="radio" 
            id="main2" 
            name="mains" 
            value="salmon" 
            onChange={(e) => setMain(e.target.value)}>
        </input> <br></br>
    </div>
  )
}
