/* eslint-disable react/prop-types */
export default function DayInfo({ handleMoreInfo }) {
  return (
    <div id="mainInfo">
      <div id="schedule">
        <h2>Info for the day</h2>
        <p>12:00AM to 12:15PM : Guests arrive</p>
        <p>12:30 to 1:15PM : Ceremony</p>
        <p>1:30PM to 3:00PM : Drinks reception and canapes</p>
        <p>3:00PM to 3:30PM : Speeches</p>
        <p>3:30PM to 5:30PM : Wedding Breakfast</p>
        <p>6:00PM to 7:00PM : Cocktail o`clock</p>
        <p>7:00PM : Evening Guest Arrival</p>
        <p>7:30PM : First Dance</p>
        <p>7:45PM to 11:45PM : Party Time</p>
        <p>12:00PM : Carriages</p>
      </div>
      <button type="submit" onClick={handleMoreInfo}>More info</button>
    </div>
  )
}
