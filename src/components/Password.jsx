/* eslint-disable react/prop-types */
export default function Password({ setShowPassword }) {
    const password = "Chloe&Dave2025";
    
    const checkPassword = (e) => {
        e.preventDefault()
        const passwordAttempt = document.getElementById('passwordAttempt').value
        if (passwordAttempt === password) {
            console.log("correct")
        } else {
            console.log("incorrect")
        }

    }
  return (
    <div>
        <h3>We would love for you to join us on our Wedding day</h3>
        <form onSubmit={checkPassword}>
            <label htmlFor="password">Please enter the code on your invitation</label>
            <input type="password" id="passwordAttempt"></input>
            <button type="submit">Enter</button>
        </form>
    </div>
  )
}
