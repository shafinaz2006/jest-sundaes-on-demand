import './App.css';
import SummaryForm from './pages/summary/SummaryForm';
import OrderSummary from './pages/summary/OrderSummary';

function App() {
  return (
    <div className="App">
      <h1>Sundae order</h1>
      <SummaryForm />
      {/* <OrderSummary /> */}
    </div>
  );
}

export default App;
