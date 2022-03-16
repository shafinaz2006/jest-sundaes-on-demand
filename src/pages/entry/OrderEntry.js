import React from "react";
import Options from "./Options";
import {useOrderDetails, formatCurrency} from '../../contexts/OrderDetailsContext';

const OrderEntry = () => {
  const [orderDetails, updateItemCount] = useOrderDetails();

  return(
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType='scoops' />
      <Options optionType='toppings'/>
      <h2>Grand Total: {formatCurrency(orderDetails.total.grandTotal)}</h2>
    </div>
  )
};

export default OrderEntry;