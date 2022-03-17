import './App.css';
import {useState} from 'react';
import OrderEntry from './pages/entry/OrderEntry';
import SummaryForm from './pages/summary/SummaryForm';
import OrderConfirmation from './pages/orderConfirmation/OrderConfirmation';
import {OrderDetailsProvider} from './contexts/OrderDetailsContext';

function App() {
  const [orderPhase, setOrderPhase] = useState('inProgress');

  let Component = OrderEntry;
  switch(orderPhase){
    case 'inProgress':
      Component = OrderEntry;
      break;
    case 'review':
      Component = SummaryForm;
      break;
    case 'completed':
      Component = OrderConfirmation;
      break;
    default:
  }
  return (
    <OrderDetailsProvider >
      <div className='app'>
        {<Component setOrderPhase={setOrderPhase}/>}
      </div>
    </OrderDetailsProvider>
  );
}

export default App;
