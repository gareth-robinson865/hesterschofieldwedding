//styles
import './AttendingForm.css';
//data
import { projectFirestore } from '../firebase/config';
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
      const [dietaryNotes, setDietary] = useState('');
      const [money, setMoney] = useState('');
      const [song, setSong] = useState('');
      const [drink, setDrink] = useState('');
      const [isNonVeg, setNonVeg] = useState(false)
      const [isVegan, setIsVegan] = useState()

      //functions for info
      const handleInfoSubmit= (e) => {
        e.preventDefault()
        const doc = { dietaryNotes, drink, isNonVeg, isVegan, mainChoice, money, name, song, starterChoice }
        
        setShowDayInfo(true)
        setShowInfo(false)
      }

      //functions for handling state changes
      const handleFoodSubmit = (e) => {
        e.preventDefault()
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
            <button type="submit">Let us know</button>
          </form> }

          { showInfo && <form id="info" onSubmit={handleInfoSubmit}>
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