/* eslint-disable react/prop-types */
export default function Mains({setMainChoice}) {
    const main1 = 'Fillet of Yorkshire Beef en Croute';
    const main2 = 'Fillet of Salmon en Croute';

    return (
    <div>
        <h4>Mains</h4>
        <label htmlFor="main1">{main1}</label>
        <input 
            type="radio" 
            id="main1" 
            name="mains" 
            value="beef" 
            required
            onChange={(e) => setMainChoice(e.target.value)}>
        </input> <br></br>

        <label htmlFor="main2">{main2}</label>
        <input 
            type="radio" 
            id="main2" 
            name="mains" 
            value="salmon" 
            onChange={(e) => setMainChoice(e.target.value)}>
        </input> <br></br>
    </div>
  )
}
