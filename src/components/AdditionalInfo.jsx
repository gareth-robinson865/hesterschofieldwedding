/* eslint-disable react/prop-types */
export default function AdditionalInfo({ setMoney, setDrink, setSong}) {
  return (
    <div>
        <label htmlFor="moneySent">Have you sent the money over for the bar?</label>
        <input type="checkbox" id="moneySent" name="moneySent" onChange={(e) => setMoney(e.target.value)}></input>
        <br></br>
        <br></br>
        <label htmlFor="favSong">Let us know your favourite song</label>
        <input type="text" id="favSong" name="favSong" onChange={(e) => setSong(e.target.value)}></input>
        <br></br>
        <br></br>
        <label htmlFor="favDrink">Let us know your favourite drink</label>
        <input type="text" id="favDrink" name="favDrink" onChange={(e) => setDrink(e.target.value)}></input>
        <br></br>
        <br></br>
    </div>
  )
}
