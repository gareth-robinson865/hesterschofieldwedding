/* eslint-disable react/prop-types */
export default function Starters({ setStarterChoice }) {
    const starter1 = 'Baked Goats Cheese Crottin';
    const starter2 = 'Thai Spiced Fish Cakes';

  return (
    <div id="starters">
        <h4>Starters</h4>
        <label htmlFor="starter1">{starter1}</label>
        <input 
            type="radio" 
            id="starter1" 
            name="starters" 
            value="cheese" 
            onChange={(e) => setStarterChoice(e.target.value)}>
        </input> <br></br>

        <label htmlFor="starter2">{starter2}</label>
        <input 
            type="radio" 
            id="starter2" 
            name="starters" 
            value="fishcakes" 
            onChange={(e) => setStarterChoice(e.target.value)}>
        </input> <br></br>
    </div>
  )
}
