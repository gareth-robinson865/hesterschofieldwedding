import './AttendingForm.css';

export default function AttendingForm() {
      const starter1 = 'Baked Goats Cheese Crottin';
      const starter2 = 'Thai Spiced Fish Cakes';
      const starter3 = 'Warm Asparagus and Tomato Tart (Vegan)';
    
      const main1 = 'Fillet of Yorkshire Beef en Croute';
      const main2 = 'Fillet of Salmon en Croute';
      const main3 = 'Butternut Squash and Lentil en Croute (Vegan)';
    
      const dessert1 = 'Sticky Toffee Pudding';
      const dessert2 = 'Chocolate Brownie';
      const dessert3 = 'Bowl of Fruit (Vegan)';
    return(
        <form id="attending">
            <label htmlFor="name">Who is responding</label> <br></br>
            <input type="text" id="name" name="name"  required></input><br></br>
            
            <h3>Food Choice</h3>
            <h4>Starters</h4>
            <label htmlFor="starter1">{starter1}</label>
            <input type="radio" id="starter1" name="starters" value="cheese"></input> <br></br>

            <label htmlFor="starter2">{starter2}</label>
            <input type="radio" id="starter2" name="starters" value="fishcakes"></input> <br></br>

            <label htmlFor="starter3">{starter3}</label>
            <input type="radio" id="starter3" name="starters" value="tart"></input> <br></br>

            <h4>Mains</h4>
            <label htmlFor="main1">{main1}</label>
            <input type="radio" id="main1" name="mains" value="beef"></input> <br></br>

            <label htmlFor="main2">{main2}</label>
            <input type="radio" id="main2" name="mains" value="salmon"></input> <br></br>

            <label htmlFor="main3">{main3}</label>
            <input type="radio" id="main3" name="mains" value="squash"></input> <br></br>

            <h4>Desserts</h4>
            <label htmlFor="dessert1">{dessert1}</label>
            <input type="radio" id="dessert1" name="desserts" value="toffee"></input> <br></br>

            <label htmlFor="dessert2">{dessert2}</label>
            <input type="radio" id="dessert2" name="desserts" value="brownie"></input> <br></br>

            <label htmlFor="dessert3">{dessert3}</label>
            <input type="radio" id="dessert3" name="desserts" value="vegan"></input> <br></br>
            <br></br>
            <label htmlFor="dietary">Let us know if you have any dietary requirements</label>
            <input type="text" id="dietary" name="dietary"></input>
            <br></br>
            <br></br>
            <label htmlFor="moneySent">Have you sent the money over for the bar?</label>
            <input type="checkbox" id="moneySent" name="moneySent"></input>
            <br></br>
            <br></br>
            <label htmlFor="favSong">Let us know your favourite song</label>
            <input type="text" id="favSong" name="favSong"></input>
            <br></br>
            <br></br>
            <label htmlFor="favDrink">Let us know your favourite drink</label>
            <input type="text" id="favDrink" name="favDrink"></input>
            <br></br>
            <br></br>
      </form>
    )
}