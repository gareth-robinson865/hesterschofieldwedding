/* eslint-disable react/prop-types */
export default function WelcomeForm({updateAttending, updateNotAttending}) {

    return (
        <form id="generic">
            <label htmlFor="name">Who is responding</label> <br></br>
            <input type="text" id="name" name="name"  required></input><br></br>
        
            <p>Will you be attending?</p>
            <input type="radio" id="yes" name="attending" value="YES" onChange={updateAttending}></input>
            <label htmlFor="yes">Yes, i will be attending</label>
        
            <input type="radio" id="no" name="attending" value="NO" onChange={updateNotAttending}></input>
            <label htmlFor="no">No, i will not be attending</label>
        </form> 
    )
}