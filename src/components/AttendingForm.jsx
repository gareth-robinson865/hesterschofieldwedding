import './AttendingForm.css';
import { useState } from 'react';
import Starters from './Starters';
import Mains from './Mains';
import Dessert from './Dessert';
import DietaryInfo from './DietaryInfo';
import AdditionalInfo from './AdditionalInfo';

export default function AttendingForm() {
      const [isNonVeg, setNonVeg] = useState(false)
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
        console.log(isNonVeg, isVegan, starterChoice, mainChoice, name, dietary,money, song, drink)
      }

      const handleFoodSubmit = (e) => {
        e.preventDefault()

      }

    return(
        <form id="attending" onSubmit={handleSubmit}>
          
          <form id="food" onSubmit={handleFoodSubmit}>
            <DietaryInfo 
              setDietary={setDietary} 
              setName={setName} 
              setIsVegan={setIsVegan} 
              setNonVeg={setNonVeg}
            />
            { isNonVeg && <Starters 
              setStarterChoice={setStarterChoice}
            /> }
            <Mains 
              setMainChoice={setMainChoice}
            />
            <Dessert /> 
          </form>

          <form id="info">
            <AdditionalInfo 
              setMoney={setMoney} 
              setSong={setSong} 
              setDrink={setDrink}
            />
            <button type="submit">Let us know</button>
          </form>
      </form>
    )
}