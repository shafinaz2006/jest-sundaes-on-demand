import React from "react";
import { pricePerItem, useOrderDetails, formatCurrency } from "../../contexts/OrderDetailsContext";

const ScoopOptions = ({scoops, alert}) => {
  const [orderDetails, updateItemCount] = useOrderDetails();
  const getAmount = (event) => {
    updateItemCount(event.target.name, event.target.value, 'scoops');
  }
  return(
    <div>
      <h3>Scoops</h3>
      <p>{formatCurrency(pricePerItem.scoops)} each</p>
      <p>Scoops total: {formatCurrency(orderDetails.total.scoops)}</p>
      <div className='scoopsList'>
      {
        scoops.length > 0? 
        scoops.map((scoop, i) => 
          <div key={i} className='scoop'>
            <img src={`http://localhost:3030${scoop.imagePath}`} alt={`${scoop.name}`} className='scoopImg' />
            <form>
              <input type='number' defaultValue= {0} onChange={getAmount} name={scoop.name} id={scoop.name} min={0}/>
              <label htmlFor={scoop.name}>{scoop.name}</label>
            </form>
          </div>
        ): ''
      }
      </div>
      {alert? <p role='alert'>An error occured. Please try again later</p>: null}
    </div>
  )
};

export default ScoopOptions;