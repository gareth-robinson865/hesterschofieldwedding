export default function DietaryInfo() {
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
