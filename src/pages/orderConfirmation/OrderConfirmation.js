import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useOrderDetails} from '../../contexts/OrderDetailsContext';

const OrderConfirmation = ({setOrderPhase}) => {
  const [,, resetOrder] = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    axios
      .post('http://localhost:3030/order')
      .then(res => setOrderNumber(res.data.orderNumber))
      .catch(error => console.log(error));
  }, []);

  const placeNewOrder = () => {
    resetOrder();
    setOrderPhase('inProgress');
  }
  return(
    orderNumber? 
    <div>
      <h1>Thank You!</h1>
      <h3>Your order number is: {orderNumber}</h3>
      <button onClick={placeNewOrder}>Create new order</button>
    </div>
    : <h2>Loading....</h2>
  );
};

export default OrderConfirmation;