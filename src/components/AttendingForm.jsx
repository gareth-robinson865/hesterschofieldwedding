import './AttendingForm.css';
import { useState } from 'react';
import Starters from './Starters';
import Mains from './Mains';
import Dessert from './Dessert';
import DietaryInfo from './DietaryInfo';
import AdditionalInfo from './AdditionalInfo';
import DayInfo from './DayInfo';
import MoreInfo from './MoreInfo';

export default function AttendingForm() {
      const [showMoreInfo, setShowMoreInfo] = useState(false)
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

      const handleMoreInfo = (e) => {
        e.preventDefault()
        console.log(showInfo, showMoreInfo)
        setShowInfo(false)
        setShowMoreInfo(true)
        console.log(showInfo, showMoreInfo)
      }

    return(
        <div>
          
          { foodSubmit && <form id="food" onSubmit={handleFoodSubmit}> 
            { !isNonVeg && <DietaryInfo 
              setDietary={setDietary} 
              setIsVegan={setIsVegan} 
              setNonVeg={setNonVeg}
            /> }
            { isNonVeg && <div>
            <Starters 
              setStarterChoice={setStarterChoice}
            /> 
            <Mains 
              setMainChoice={setMainChoice}
            />
            <Dessert />
            
            </div> }
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

          { showDayInfo && <DayInfo handleMoreInfo={handleMoreInfo}/> }
          { showMoreInfo && <MoreInfo /> }
      </div>
    )
}