import React, {useState} from "react";
import { useOrderDetails, formatCurrency } from "../../contexts/OrderDetailsContext";

const SummaryForm = ({setOrderPhase}) => {
  const [orderDetails] = useOrderDetails();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const changeSubmitBtn = () => {
    setBtnDisabled(!btnDisabled);
  }
  const displayAlert = () =>{
    setShowAlert(true);
  }
  const removeAlert= () => {
    setShowAlert(false);
  }
  return(
    <>
      <h1>SummaryForm</h1>
      <h2>Scoops: {formatCurrency(orderDetails.total.scoops)}</h2>
      <h2>Toppings: {formatCurrency(orderDetails.total.toppings)}</h2>
      <div>
        <input type='checkbox' 
        label='accept' name='accept' 
               defaultChecked={false} onChange={changeSubmitBtn}/>
        <span>I agree to 
          <span style={{color: 'blue', cursor: 'pointer'}} 
                id='terms&Condition'
                data-testid='terms&Condition'
                onMouseEnter={displayAlert}
                onMouseLeave={removeAlert}>
            Terms and Conditions
          </span>
        </span>
        {showAlert? 
          <span id='termsPop' data-testid='termsPop'> 
            No ice cream will actually be delivered
          </span>: ''}
      </div>
      <button disabled={btnDisabled} onClick={() => setOrderPhase('completed')}>Confirm order</button>

    </>
  )
}
export default SummaryForm;