import './AttendingForm.css';
import { useState } from 'react';
import Starters from './Starters';
import Mains from './Mains';
import Dessert from './Dessert';
import DietaryInfo from './DietaryInfo';
import AdditionalInfo from './AdditionalInfo';

export default function AttendingForm() {
      const [isVegan, setIsVegan] = useState(true)
      const [starterChoice, setStarterChoice] = useState('')
      const [mainChoice, setMainChoice] = useState('')
      const [name, setName] = useState('');
      const [dietary, setDietary] = useState('');
      const [money, setMoney] = useState('');
      const [song, setSong] = useState('');
      const [drink, setDrink] = useState('');

      const handleSubmit= (e) => {
        e.preventDefault()
        console.log(isVegan, starterChoice, mainChoice, name, dietary,money, song, drink)
      }

    return(
        <form id="attending" onSubmit={handleSubmit}>
          <DietaryInfo setDietary={setDietary} setName={setName} setIsVegan={setIsVegan}/>
          <div id="food">
            <Starters setStarterChoice={setStarterChoice}/>
            <Mains setMainChoice={setMainChoice}/>
            <Dessert />
          </div>
          <AdditionalInfo setMoney={setMoney} setSong={setSong} setDrink={setDrink}/>
          <button type="submit">Let us know</button>
      </form>
    )
}