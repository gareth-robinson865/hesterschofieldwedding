import { useState } from 'react';
import './App.css'
import Title from './components/Title';
import WelcomeMessage from './components/welcomeMessage';
import WelcomeForm from './components/WelcomeForm';
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
      <form>
        <WelcomeForm updateAttending={updateAttending} updateNotAttending={updateNotAttending} />
        
        { showNotAttending && <NotAttendingForm />}

        { showAttending && <AttendingForm /> }

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
