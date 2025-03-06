import './AttendingForm.css';
import { useState } from 'react';
import Starters from './Starters';
import Mains from './Mains';
import Dessert from './Dessert';
import DietaryInfo from './DietaryInfo';
import AdditionalInfo from './AdditionalInfo';
import DayInfo from './DayInfo';
import MoreInfo from './MoreInfo';
import EvenMoreInfo from './EvenMoreInfo';
import Faq from './Faq';

export default function AttendingForm() {
      const [showFAQ, setShowFAQ] = useState(false)
      const [showEvenMoreInfo, setShowEvenMoreInfo] = useState(false)
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
        setShowDayInfo(false)
        setShowMoreInfo(true)
      }

      const handleEvenMoreInfo = (e) => {
        e.preventDefault()
        setShowMoreInfo(false)
        setShowEvenMoreInfo(true)
      }

      const handleShowFAQ = (e) => {
        e.preventDefault()
        setShowEvenMoreInfo(false)
        setShowFAQ(true)
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

          { showInfo && <form id="info" onSubmit={handleSubmit}>
            <AdditionalInfo 
              handleSubmit={handleSubmit}
              setName={setName}
              setMoney={setMoney} 
              setSong={setSong} 
              setDrink={setDrink}
            />
          </form> }

          { showDayInfo && <DayInfo handleMoreInfo={handleMoreInfo}/> }
          { showMoreInfo && <MoreInfo handleEvenMoreInfo={handleEvenMoreInfo}/> }
          { showEvenMoreInfo && <EvenMoreInfo handleShowFAQ={handleShowFAQ} /> }
          { showFAQ && <Faq />}
      </div>
    )
}