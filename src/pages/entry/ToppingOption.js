import React from "react";
import { pricePerItem, useOrderDetails, formatCurrency } from "../../contexts/OrderDetailsContext";

const ToppingOptions = ({toppings, alert}) => {
  const [orderDetails, updateItemCount] = useOrderDetails();
  const getAmount = (event) => {
    updateItemCount(event.target.name, event.target.value, 'toppings');
  }

  return(
    <div>
      <h3>Toppings</h3>
      <p>{formatCurrency(pricePerItem.toppings)} each</p>
      <p>Toppings total: {formatCurrency(orderDetails.total.toppings)}</p>
      <div className='scoopsList'>
      {
        toppings.length > 0? 
        toppings.map((topping, i) => 
          <div key={i} className='scoop'>
            <img src={`http://localhost:3030${topping.imagePath}`} 
                 alt={`${topping.name}`} 
                 className='scoopImg' />
            <form>
              <input type='number' defaultValue= {0} onChange={getAmount} name={topping.name} id={topping.name} min={0}/>
              <label htmlFor={topping.name}>{topping.name}</label>
            </form>
          </div>
        ): ''
      }
      </div>
      {alert? <p role='alert'>An error occured. Please try again later</p>: null}
    </div>
  )
};

export default ToppingOptions;