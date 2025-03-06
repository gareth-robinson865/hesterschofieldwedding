//styles
import './AttendingForm.css';
//functions
import { useState } from 'react';
//components
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
      //component state
      const [foodSubmit, setFoodSubmit] = useState(true)
      const [showDayInfo, setShowDayInfo] = useState(false)
      const [showInfo, setShowInfo] = useState(false)
      const [showMoreInfo, setShowMoreInfo] = useState(false)
      const [showEvenMoreInfo, setShowEvenMoreInfo] = useState(false)
      const [showFAQ, setShowFAQ] = useState(false)
      
      //data state
      const [starterChoice, setStarterChoice] = useState('')
      const [mainChoice, setMainChoice] = useState('')
      const [name, setName] = useState('');
      const [dietary, setDietary] = useState('');
      const [money, setMoney] = useState('');
      const [song, setSong] = useState('');
      const [drink, setDrink] = useState('');
      const [isNonVeg, setNonVeg] = useState(false)
      const [isVegan, setIsVegan] = useState()

      //functions for info
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

      //functions for handling state changes
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
            <button type="submit">Let us know</button>
          </form> }

          { showInfo && <form id="info" onSubmit={handleSubmit}>
            <AdditionalInfo 
              setName={setName}
              setMoney={setMoney} 
              setSong={setSong} 
              setDrink={setDrink}
            />
            <button type="submit">Let us know</button>
          </form> }

          { showDayInfo && <DayInfo handleMoreInfo={handleMoreInfo}/> }
          { showMoreInfo && <MoreInfo handleEvenMoreInfo={handleEvenMoreInfo}/> }
          { showEvenMoreInfo && <EvenMoreInfo handleShowFAQ={handleShowFAQ} /> }
          { showFAQ && <Faq />}
      </div>
    )
}