import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import WelcomeMessage from './components/welcomeMessage';
import WelcomeForm from './components/WelcomeForm';
import AttendingForm from './components/AttendingForm';
import NotAttendingForm from './components/NotAttendingForm';

function App() {
  const [showAttending, setShowAttending] = useState(false)
  const [showNotAttending, setShowNotAttending] = useState(false)
  const [showMenu, setShowMenu] = useState(true)

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
      <div id="picture">
      </div>
      <div id="content">
        <Title />
        <WelcomeMessage />
        { showMenu && <WelcomeForm 
          updateAttending={updateAttending} 
          updateNotAttending={updateNotAttending} 
        /> }
          
        <div id="form">
        
          { showNotAttending && <NotAttendingForm />}

          { showAttending && <AttendingForm /> }
        </div>
      </div>
    </>
  )
}

export default App
