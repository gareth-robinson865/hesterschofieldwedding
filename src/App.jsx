import { useState } from 'react';
import MediaQuery from 'react-responsive'
import './App.css';
import Title from './components/Title';
import WelcomeMessage from './components/welcomeMessage';
import WelcomeForm from './components/WelcomeForm';
import AttendingForm from './components/AttendingForm';
import NotAttendingForm from './components/NotAttendingForm';
import Password from './components/Password';

function App() {
  const [showAttending, setShowAttending] = useState(false)
  const [showNotAttending, setShowNotAttending] = useState(false)
  const [showMenu, setShowMenu] = useState(true)
  const [showPassword, setShowPassword] = useState(true)

  function updateAttending() {
    setShowAttending(true);
    setShowNotAttending(false);
    setShowMenu(false)
  }

  function updateNotAttending() {
    setShowAttending(false);
    setShowNotAttending(true);
    setShowMenu(false);
  }

  return (
    <>
      <MediaQuery minWidth={800}>
        <div id="picture">
        </div>
      </MediaQuery>
      { showPassword && <Password
          setShowPassword={setShowPassword} /
      >}
      { !showPassword && <div id="content">
        <Title />
        { showMenu && <WelcomeMessage /> }
        { showMenu && <WelcomeForm 
          updateAttending={updateAttending} 
          updateNotAttending={updateNotAttending} 
        /> }
        <div id="form">
          { showNotAttending && <NotAttendingForm />}
          { showAttending && <AttendingForm /> }
        </div>
      </div> }
    </>
  )
}

export default App
