import React from "react";

const ScoopOptions = ({scoops}) => {
  return(
    <div>
      <h1>Design Your Sundae!</h1>
      <h3>Scoops</h3>
      <p>$2.00 each</p>
      {
        scoops.length > 0? 
        scoops.map((scoop, i) => 
          <div key={i}>
            <p>{scoop.name}</p>
            <img src={`http://localhost:3030${scoop.imagePath}`} alt={`${scoop.name}`} className='scoopImg' />
          </div>
        ): ''
      }
    </div>
  )
};

export default ScoopOptions;