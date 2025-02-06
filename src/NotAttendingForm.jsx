export default function NotAttendingForm() {
    return(
        <form id="notAttending">
            <br></br>
            <label htmlFor="message">Sorry you cannot make it, feel free to send us a message</label><br></br>
            <br></br>
            <textarea id="message" rows="4" cols="50" placeholder="type message here..."></textarea>
            <br></br>
            <br></br>
            <button type="submit">Click to send</button>
        </form>
    )
}