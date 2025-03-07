/* eslint-disable react/prop-types */
import '../components/Password.css'
export default function Password({ setShowPassword }) {
    
    
    const checkPassword = (e) => {
        e.preventDefault()
        const password = "Chloe&Dave2025";
        console.log(import.meta.env)
        let passwordAttempt = document.getElementById('passwordAttempt').value
        if (passwordAttempt === password) {
            console.log("correct")
            passwordAttempt = ""
            setShowPassword(false)
        } else {
            console.log("incorrect")
            document.getElementById('passwordAttempt').value = ""
        }

    }
  return (
    <div>
        <form id="passwordForm" onSubmit={checkPassword}>
            <label htmlFor="password">Please enter the code on your invitation</label>
            <br></br>
            <input type="password" id="passwordAttempt"></input>
            <br></br>
            <button type="submit">Enter</button>
        </form>
    </div>
  )
}
