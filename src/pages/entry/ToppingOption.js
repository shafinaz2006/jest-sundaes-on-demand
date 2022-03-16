import React from "react";
import { pricePerItem } from "../../contexts/OrderDetailsContext";

const ToppingOptions = ({toppings, alert}) => {
  return(
    <div>
      <h3>Toppings</h3>
      <p>${pricePerItem.toppings} each</p>
      <div className='toppingsList'>
      {
        toppings.length > 0? 
        toppings.map((topping, i) => 
          <div key={i} className='topping'>
            <p>{topping.name}</p>
            <img src={`http://localhost:3030${topping.imagePath}`} 
                 alt={`${topping.name}`} 
                 className='scoopImg' />
          </div>
        ): ''
      }
      </div>
      {alert? <p role='alert'>An error occured. Please try again later</p>: null}
    </div>
  )
};

export default ToppingOptions;