import React, { useEffect, useState } from "react";
import axios from 'axios';
import ScoopOptions from "./ScoopOption";
import ToppingOptions from './ToppingOption';

const Options = ({optionType}) => {
  const [items, setItems] = useState([]);
  const [alert, setAlert] = useState('');

  const getScoops = () => {
    axios.get(`http://localhost:3030/${optionType}`)
    .then(res => setItems(res.data))
    .catch(error => console.log(error));
  }
  useEffect(() =>{
    getScoops();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionType])

  return(
    <div>
      {optionType === 'scoops'? <ScoopOptions scoops={items}/>: <ToppingOptions toppings={items}/> }
    </div>
  )
};

export default Options;