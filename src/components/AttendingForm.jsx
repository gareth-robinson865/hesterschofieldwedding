import './AttendingForm.css';
import { useState } from 'react';
import Starters from './Starters';
import Mains from './Mains';
import Dessert from './Dessert';
import DietaryInfo from './DietaryInfo';

export default function AttendingForm() {  ``
      const [starterChoice, setStarterChoice] = useState('')
      const [mainChoice, setMainChoice] = useState('')
      const [name, setName] = useState('');
      const [dietary, setDietary] = useState('');
      const [money, setMoney] = useState('');
      const [song, setSong] = useState('');
      const [drink, setDrink] = useState('');

      const handleSubmit= (e) => {
        e.preventDefault()
        console.log(starterChoice, mainChoice, name, dietary,money, song, drink)
      }

    return(
        <form id="attending" onSubmit={handleSubmit}>
          <DietaryInfo setDietary={setDietary} setName={setName}/>
          { dietary && <Starters setStarterChoice={setStarterChoice}/> }
          { starterChoice && <Mains setMainChoice={setMainChoice}/> }
          { mainChoice && <Dessert /> }
            
            <div id="info">
              <label htmlFor="moneySent">Have you sent the money over for the bar?</label>
              <input type="checkbox" id="moneySent" name="moneySent" onChange={(e) => setMoney(e.target.value)}></input>
              <br></br>
              <label htmlFor="favSong">Let us know your favourite song</label>
              <input type="text" id="favSong" name="favSong" onChange={(e) => setSong(e.target.value)}></input>
              <br></br>
              <label htmlFor="favDrink">Let us know your favourite drink</label>
              <input type="text" id="favDrink" name="favDrink" onChange={(e) => setDrink(e.target.value)}></input>
              <br></br>
            </div>
            <button type="submit">Let us know</button>
      </form>
    )
}