import { createContext, useContext, useState, useMemo, useEffect } from "react";

const OrderDetails = createContext();

export const pricePerItem = {
  scoops: 2,
  toppings: 1.5
}

export function useOrderDetails() {
  const context = useContext(OrderDetails);
  if(!context) {
    throw new Error('useOrderDetails must be used within OrderDetailsProvider');
  }
  return context;
}

function calculateSubTotal(optionType, optionCounts){
  let optionCount = 0;
  for(const count of optionCounts[optionType].values()){
    optionCount = optionCount + count;
  }
  return optionCount * pricePerItem[optionType];
}

export function formatCurrency(amount){
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
}


export function OrderDetailsProvider(props){
  const [optionCounts, setOptionCounts] = useState({scoops: new Map(), toppings: new Map()});
  const [total, setTotal] = useState({scoops: 0, toppings: 0, grandTotal: 0});

  useEffect(() => {
    const scoopsSubTotal = calculateSubTotal('scoops', optionCounts);
    const toppingsSubTotal = calculateSubTotal('toppings', optionCounts);
    const grandTotal = scoopsSubTotal + toppingsSubTotal;
    setTotal({
      scoops: scoopsSubTotal,
      toppings: toppingsSubTotal,
      grandTotal
    })
  }, [optionCounts])
  
  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType){
      const newOptionCounts = {...optionCounts};
      const optionCountsMap = optionCounts[optionType];
      optionCountsMap.set(itemName, parseInt(newItemCount));
      setOptionCounts(newOptionCounts);
    }
    function resetOrder(){
      setOptionCounts({scoops: new Map(), toppings: new Map()});
    }
    return [{...optionCounts, total }, updateItemCount, resetOrder]
  }, [optionCounts, total]);

  return <OrderDetails.Provider value={value} {...props} />
}
