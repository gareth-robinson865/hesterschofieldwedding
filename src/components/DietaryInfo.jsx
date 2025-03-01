/* eslint-disable react/prop-types */
export default function DietaryInfo({ setDietary, setName, setIsVegan}) {
    
  return (
    <div>
        <h4>Your info</h4>
        <label htmlFor="name">Who is responding</label>
        <input 
            type="text" 
            id="name" 
            name="name"  
            required onChange={(e) => setName(e.target.value)}>
        </input>
        <br></br>
        <br></br>
        <h4>Are you vegan, vegetarian or have dietary requirements</h4>
        <label htmlFor="vegan">Vegan</label>
        <input 
            type="radio" 
            id="vegan"
            name="vegan" 
            value="vegan" 
            onChange={(e) => setIsVegan(e.target.value)}>
        </input>
        <label htmlFor="vegetarian">Vegetarian</label>
        <input 
            type="radio" 
            id="vegetarian"
            name="vegetarian" 
            value="vegetarian" 
            onChange={(e) => setIsVegan(e.target.value)}>
        </input>
        <label htmlFor="none">None</label>
        <input 
            type="radio" 
            id="normal"
            name="normal" 
            value="normal" 
            onChange={(e) => setIsVegan(e.target.value)}>
        </input>
        <label htmlFor="dietary">Let us know if you have any dietary requirements</label>
        <input 
            type="text" 
            id="dietary" 
            name="dietary" 
            onChange={(e) => setDietary(e.target.value)}>
        </input>
    </div>
  )
}
