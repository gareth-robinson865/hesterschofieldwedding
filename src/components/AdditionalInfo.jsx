/* eslint-disable react/prop-types */
export default function AdditionalInfo({ setMoney, setDrink, setSong, setName, handleSubmit }) {
  return (
    <div>
        <label htmlFor="name">Who is responding</label>
        <input 
            type="text" 
            id="name" 
            name="name"  
            required 
            onChange={(e) => setName(e.target.value)}>
        </input>
        <br></br>
        <br></br>
        <label htmlFor="moneySent">Have you sent the money over for the bar?</label>
        <input type="checkbox" id="moneySent" name="moneySent"  value="yes money sent" onChange={(e) => setMoney(e.target.value)}></input>
        <br></br>
        <br></br>
        <label htmlFor="favSong">Let us know your favourite song</label>
        <input type="text" id="favSong" name="favSong"  required onChange={(e) => setSong(e.target.value)}></input>
        <br></br>
        <br></br>
        <label htmlFor="favDrink">Let us know your favourite drink</label>
        <input type="text" id="favDrink" name="favDrink" required onChange={(e) => setDrink(e.target.value)}></input>
        <br></br>
        <br></br>
        <button type="submit" onClick={handleSubmit}>Let us know</button>
    </div>
  )
}
