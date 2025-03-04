import './AttendingForm.css';
import { useState } from 'react';
import Starters from './Starters';
import Mains from './Mains';
import Dessert from './Dessert';
import DietaryInfo from './DietaryInfo';
import AdditionalInfo from './AdditionalInfo';
import DayInfo from './DayInfo';

export default function AttendingForm() {
      const [showInfo, setShowInfo] = useState(false)
      const [foodSubmit, setFoodSubmit] = useState(true)
      const [showDayInfo, setShowDayInfo] = useState(false)

      const [isNonVeg, setNonVeg] = useState(false)
      const [isVegan, setIsVegan] = useState()

      const [starterChoice, setStarterChoice] = useState('')
      const [mainChoice, setMainChoice] = useState('')
      const [name, setName] = useState('');
      const [dietary, setDietary] = useState('');

      const [money, setMoney] = useState('');
      const [song, setSong] = useState('');
      const [drink, setDrink] = useState('');

      const handleSubmit= (e) => {
        e.preventDefault()
        console.log(name, money, song, drink)
        setShowDayInfo(true)
        setShowInfo(false)
      }

      const handleFoodSubmit = (e) => {
        e.preventDefault()
        console.log(isNonVeg, isVegan, starterChoice, mainChoice, dietary, foodSubmit)
        setFoodSubmit(false)
        setShowInfo(true)
      }

    return(
        <div>
          
          { foodSubmit && <form id="food" onSubmit={handleFoodSubmit}> 
            { !isNonVeg && <DietaryInfo 
              setDietary={setDietary} 
              setIsVegan={setIsVegan} 
              setNonVeg={setNonVeg}
            /> }
            { isNonVeg && <Starters 
              setStarterChoice={setStarterChoice}
            /> }
            { starterChoice && <Mains 
              setMainChoice={setMainChoice}
            /> }
            { mainChoice && <Dessert /> }
            <button type="submit">Tell us your choice</button>
          </form> }

          { showInfo && <form id="info">
            <AdditionalInfo 
              setName={setName}
              setMoney={setMoney} 
              setSong={setSong} 
              setDrink={setDrink}
            />
            <button type="submit" onClick={handleSubmit}>Let us know</button>
          </form> }

          { showDayInfo && <DayInfo /> }
      </div>
    )
}