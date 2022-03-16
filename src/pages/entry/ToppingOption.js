import React from "react";

const ToppingOptions = ({toppings, alert}) => {
  return(
    <div>
      <h1>Design Your Sundae!</h1>
      <h3>Toppings</h3>
      <p>$0.50 each</p>
      {
        toppings.length > 0? 
        toppings.map((topping, i) => 
          <div key={i}>
            <p>{topping.name}</p>
            <img src={`http://localhost:3030${topping.imagePath}`} 
                 alt={`${topping.name}`} 
                 className='scoopImg' />
          </div>
        ): ''
      }
      {alert? <p role='alert'>An error occured. Please try again later</p>: null}
    </div>
  )
};

export default ToppingOptions;