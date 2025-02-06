
import { useState } from 'react';
import './App.css'
import Title from './components/title';
import Welcome from './components/welcome';
import NotAttendingForm from './NotAttendingForm';

function App() {
  const [showAttending, setShowAttending] = useState(false)
  const [showNotAttending, setShowNotAttending] = useState(false)

  function updateAttending() {
    setShowAttending(true);
    setShowNotAttending(false);
  }

  function updateNotAttending() {
    setShowAttending(false);
    setShowNotAttending(true)
  }

  console.log(showAttending)
  console.log(showNotAttending)

  const starter1 = 'Baked Goats Cheese Crottin';
  const starter2 = 'Thai Spiced Fish Cakes';
  const starter3 = 'Warm Asparagus and Tomato Tart (Vegan)';

  const main1 = 'Fillet of Yorkshire Beef en Croute';
  const main2 = 'Fillet of Salmon en Croute';
  const main3 = 'Butternut Squash and Lentil en Croute (Vegan)';

  const dessert1 = 'Sticky Toffee Pudding';
  const dessert2 = 'Chocolate Brownie';
  const dessert3 = 'Bowl of Fruit (Vegan)';

  return (
    <>
      <Title />
      <Welcome />
      
      <form id="generic">
        <label htmlFor="name">Who is responding</label> <br></br>
        <input type="text" id="name" name="name"  required></input><br></br>

        <p>Will you be attending?</p>
        <input type="radio" id="yes" name="attending" value="YES" onChange={updateAttending}></input>
        <label htmlFor="yes">Yes, i will be attending</label>

        <input type="radio" id="no" name="attending" value="NO" onChange={updateNotAttending}></input>
        <label htmlFor="no">No, i will not be attending</label>
      </form> 
      
      { showNotAttending && <NotAttendingForm />}
      <br></br>

      { showAttending && <form id="attending">
        <h3>Food Choice</h3>
        <h4>Starters</h4>
        <label htmlFor="starter1">{starter1}</label>
        <input type="radio" id="starter1" name="starters" value="cheese"></input> <br></br>

        <label htmlFor="starter2">{starter2}</label>
        <input type="radio" id="starter2" name="starters" value="fishcakes"></input> <br></br>

        <label htmlFor="starter3">{starter3}</label>
        <input type="radio" id="starter3" name="starters" value="tart"></input> <br></br>

        <h4>Mains</h4>
        <label htmlFor="main1">{main1}</label>
        <input type="radio" id="main1" name="mains" value="beef"></input> <br></br>

        <label htmlFor="main2">{main2}</label>
        <input type="radio" id="main2" name="mains" value="salmon"></input> <br></br>

        <label htmlFor="main3">{main3}</label>
        <input type="radio" id="main3" name="mains" value="squash"></input> <br></br>

        <h4>Desserts</h4>
        <label htmlFor="dessert1">{dessert1}</label>
        <input type="radio" id="dessert1" name="desserts" value="toffee"></input> <br></br>

        <label htmlFor="dessert2">{dessert2}</label>
        <input type="radio" id="dessert2" name="desserts" value="brownie"></input> <br></br>

        <label htmlFor="dessert3">{dessert3}</label>
        <input type="radio" id="dessert3" name="desserts" value="vegan"></input> <br></br>

        <label htmlFor="dietary">Let us know if you have any dietary requirements</label>
        <input type="text" id="dietary" name="dietary"></input>
        <br></br>
        <label htmlFor="moneySent">Have you sent the money over for the bar?</label>
        <input type="checkbox" id="moneySent" name="moneySent"></input>
        <br></br>
        <label htmlFor="favSong">Let us know your favourite song</label>
        <input type="text" id="favSong" name="favSong"></input>
        <br></br>
        <label htmlFor="favDrink">Let us know your favourite drink</label>
        <input type="text" id="favDrink" name="favDrink"></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      }
      

    </>
  )
}

export default App
