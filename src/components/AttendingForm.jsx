import './AttendingForm.css';
import { useState } from 'react';
import Starters from './Starters';
import Mains from './Mains';
import Dessert from './Dessert';

export default function AttendingForm() {  
      const [name, setName] = useState('');
      const [dietary, setDietary] = useState('');
      const [money, setMoney] = useState('');
      const [song, setSong] = useState('');
      const [drink, setDrink] = useState('');

      const handleSubmit= (e) => {
        e.preventDefault()
        console.log(name, dietary, money, song, drink)
      }

    return(
        <form id="attending" onSubmit={handleSubmit}>
            
            <div id="food">
              <h3>Food Choice</h3>
              
              
              <Starters />
              <Mains />
              <Dessert />
              <br></br>
            </div>
            <div id="info">
              <h4>Your info</h4>
              <label htmlFor="name">Who is responding</label>
              <input type="text" id="name" name="name"  required onChange={(e) => setName(e.target.value)}></input><br></br>
              <br></br>
              <label htmlFor="dietary">Let us know if you have any dietary requirements</label>
              <input type="text" id="dietary" name="dietary" onChange={(e) => setDietary(e.target.value)}></input>
              <br></br>
              <br></br>
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
              <button type="submit">Let us know</button>
            </div>
      </form>
    )
}