import React, {useState} from "react";
import { pricePerItem } from "../../contexts/OrderDetailsContext";

const ScoopOptions = ({scoops, alert}) => {
  const [scoopsTotal, setScoopsTotal] = useState(0.00);
  return(
    <div>
      <h1>Design Your Sundae!</h1>
      <h3>Scoops</h3>
      <p>${pricePerItem.scooops} each</p>
      <p>Scoops total: ${scoopsTotal}</p>
      <div className='scoopsList'>
      {
        scoops.length > 0? 
        scoops.map((scoop, i) => 
          <div key={i} className='scoop'>
            <p>{scoop.name}</p>
            <img src={`http://localhost:3030${scoop.imagePath}`} alt={`${scoop.name}`} className='scoopImg' />
          </div>
        ): ''
      }
      </div>
      {alert? <p role='alert'>An error occured. Please try again later</p>: null}
    </div>
  )
};

export default ScoopOptions;