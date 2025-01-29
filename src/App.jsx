
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
      
      <h3>If no then...</h3>
      <form>
        <label htmlFor="message">Sorry you cannot make it, feel free to send us a message</label><br></br>
        <input type="textarea" id="message"></input>
        <button type="submit">Click to send</button>
      </form>
      
      <br></br>

      <h3>If attending then...</h3>
      <form>
        <label htmlFor="dietary">Let us know if you have any dietary requirements</label>
        <input type="text" id="dietary" name="dietary"></input>

        
      </form>
      <p>food choices (need from chloe)</p>
      <p>dietary requirements</p>
      <p>tick box to say sent money</p>
      <p>favorite song</p>
      <p>favorite drink</p>
    </>
  )
}

export default App
