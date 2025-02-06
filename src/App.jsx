
import { useState } from 'react';
import './App.css'
import Title from './components/title';
import WelcomeMessage from './components/welcomeMessage';
import AttendingForm from './components/AttendingForm';
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

  return (
    <>
      <Title />
      <WelcomeMessage />
      
      <form id="generic">
        <label htmlFor="name">Who is responding</label> <br></br>
        <input type="text" id="name" name="name"  required></input><br></br>

        <p>Will you be attending?</p>
        <input type="radio" id="yes" name="attending" value="YES" onChange={updateAttending}></input>
        <label htmlFor="yes">Yes, i will be attending</label>

        <input type="radio" id="no" name="attending" value="NO" onChange={updateNotAttending}></input>
        <label htmlFor="no">No, i will not be attending</label>
      </form> 
      <br></br>
      { showNotAttending && <NotAttendingForm />}
      <br></br>

      { showAttending && <AttendingForm /> }
      

    </>
  )
}

export default App
