/* eslint-disable react/prop-types */
export default function Password({ setShowPassword }) {
    const password = "Chloe&Dave2025";
    
    const checkPassword = (e) => {
        e.preventDefault()

    }
  return (
    <div>
        <h3>We would love for you to join us on our Wedding day</h3>
        <form onSubmit={checkPassword}>
            <label htmlFor="password">Please enter the code on your invitation</label>
            <input type="password"></input>
            <button type="submit">Enter</button>
        </form>
    </div>
  )
}
