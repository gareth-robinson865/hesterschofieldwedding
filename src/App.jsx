import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import WelcomeMessage from './components/welcomeMessage';
import WelcomeForm from './components/WelcomeForm';
import AttendingForm from './components/AttendingForm';
import NotAttendingForm from './components/NotAttendingForm';
import Image from './images/istockphoto-1213709867-1024x1024.jpg';

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
    <div id="outer">
      <div id="picture">
        <img src={Image}></img>
      </div>
      <div id="content">
        <Title />
        <WelcomeMessage />
        <WelcomeForm updateAttending={updateAttending} updateNotAttending={updateNotAttending} />
          
        <div id="form">
        
          { showNotAttending && <NotAttendingForm />}

          { showAttending && <AttendingForm /> }
        </div>
      </div>
    </div>
  )
}

export default App
