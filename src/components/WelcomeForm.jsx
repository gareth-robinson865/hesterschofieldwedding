/* eslint-disable react/prop-types */
import './WelcomeForm.css'

export default function WelcomeForm({updateAttending, updateNotAttending}) {

    return (
        <form id="welcomeForm">       
            <p>Will you be attending?</p>
            <input type="radio" id="yes" name="attending" value="YES" onChange={updateAttending}></input>
            <label htmlFor="yes">Yes, i will be attending</label>
        
            <input type="radio" id="no" name="attending" value="NO" onChange={updateNotAttending}></input>
            <label htmlFor="no">No, i will not be attending</label>
        </form> 
    )
}