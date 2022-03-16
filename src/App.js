import './App.css';
import SummaryForm from './pages/summary/SummaryForm';
import OrderSummary from './pages/summary/OrderSummary';
import OrderEntry from './pages/entry/OrderEntry';
import {OrderDetailsProvider} from './contexts/OrderDetailsContext';
function App() {
  return (
    <div className="App">
      <h1>Sundae order</h1>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
      <SummaryForm />
      {/* <OrderSummary /> */}
    </div>
  );
}

export default App;
