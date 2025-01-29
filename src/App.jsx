
import './App.css'

function App() {
  

  return (
    <>
      <h1>Hester and Schofield wedding</h1>
      
      <p>Welcome message</p>
      <p>Name input</p> 
      <form>
        <label htmlFor="name">Who is responding</label> <br></br>
        <input type="text" id="name" name="name"  required></input><br></br>

        <p>Will you be attending?</p>
        <input type="radio" id="yes" name="attending" value="YES"></input>
        <label htmlFor="yes">Yes, i will be attending</label>

        <input type="radio" id="no" name="attending" value="NO"></input>
        <label htmlFor="no">No, i will not be attending</label>
      </form> 
      
      
      <br></br>
      <h3>options if atteding is true</h3>
      <p>food choices (need from chloe)</p>
      <p>dietary requirements</p>
      <p>tick box to say sent money</p>
      <p>favorite song</p>
      <p>favorite drink</p>
    </>
  )
}

export default App
