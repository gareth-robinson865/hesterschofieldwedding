import { useState } from "react"

export default function NotAttendingForm() {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const doc = { name, message }
        try {
          await projectFirestore.collection('Not attending guests').add(doc)
          setShowDayInfo(true)
          setShowInfo(false)
          } catch(err) {
          console.log(err)
          }
        }
    
    
    return(
        <form id="notAttending" onSubmit={handleSubmit}>
            <br></br>
            <h3>Sorry to hear you are unable to join us</h3>
            <br></br>
            <label htmlFor="name">Who is responding</label> 
            <br></br>
            <input 
                type="text" 
                id="name" 
                name="name" 
                onChange={(e) => setName(e.target.value)} 
                required>
            </input>
            <br></br>
            <label htmlFor="message">Feel free to send us a message</label>
            <br></br>
            <textarea 
                id="message" 
                name="message"
                rows="4" 
                cols="50" 
                placeholder="type message here..." 
                onChange={(e) => setMessage(e.target.value)}>
            </textarea>
            <br></br>
            <br></br>
            <button type="submit">Let us know</button>
        </form>
    )
}