/* eslint-disable react/prop-types */
export default function MoreInfo({ handleEvenMoreInfo }) {
  return (
    <div>
        <h3>Church</h3>
        <p>St Mary`s Church has plenty of roadside parking. Please refrain from taking pictures during the ceremony, our photographer has this covered.</p>
        <h3>Reception</h3>
        <p>Please look out for the wedding signs on arrival and follow them down the long bumpy road. </p>
        <p>Cars can be left on the large car park field and collected anytime before MIDDAY SUNDAY 17th AUGUST.</p>
        <p>The site will be open at any time for you to access your vehicle before then.</p>
        <h3>Gifts</h3>
        <p>Please do not feel obliged to buy us a gift, your company is more than enough. If you would like to give something we would appreciate a contribution to our honeymoon fund.</p>
        <button type="submit" onClick={handleEvenMoreInfo}>We have more info</button>
    </div>
  )
}
