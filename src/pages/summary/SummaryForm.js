import React, {useState} from "react";

const SummaryForm = () => {
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
      <button disabled={btnDisabled}>Confirm order</button>

    </>
  )
}
export default SummaryForm;