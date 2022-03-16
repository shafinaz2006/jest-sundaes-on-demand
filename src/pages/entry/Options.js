import React, { useEffect, useState } from "react";
import axios from 'axios';
import ScoopOptions from "./ScoopOption";
import ToppingOptions from './ToppingOption';
import {useOrderDetails} from '../../contexts/OrderDetailsContext';

const Options = ({optionType}) => {
  const [items, setItems] = useState([]);
  const [alert, setAlert] = useState(false);

  const getScoops = () => {
    axios.get(`http://localhost:3030/${optionType}`)
    .then(res => setItems(res.data))
    .catch(error => setAlert(true));
  }
  useEffect(() =>{
    getScoops();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionType])

  return(
    <div>
      {optionType === 'scoops'? <ScoopOptions scoops={items} alert={alert}/>: <ToppingOptions toppings={items}alert={alert} /> }
    </div>
  )
};

export default Options;