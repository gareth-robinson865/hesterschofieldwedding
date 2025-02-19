import { useState } from "react"

export default function NotAttendingForm() {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, message)
    }
    
    return(
        <form id="notAttending" onSubmit={handleSubmit}>
            <br></br>
            <label htmlFor="message">Sorry you cannot make it, feel free to send us a message</label><br></br>
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