import './AttendingForm.css';
import { useState } from 'react';
import Starters from './Starters';
import Mains from './Mains';
import Dessert from './Dessert';
import DietaryInfo from './DietaryInfo';
import AdditionalInfo from './AdditionalInfo';

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
          { mainChoice && <AdditionalInfo setMoney={setMoney} setSong={setSong} setDrink={setDrink}/>}
            <button type="submit">Let us know</button>
      </form>
    )
}