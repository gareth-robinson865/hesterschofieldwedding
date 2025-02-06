export default function NotAttendingForm() {
    return(
        <form id="notAttending">
            <label htmlFor="message">Sorry you cannot make it, feel free to send us a message</label><br></br>
            <input type="textarea" id="message"></input>
            <br></br>
            <br></br>
            <button type="submit">Click to send</button>
        </form>
    )
}