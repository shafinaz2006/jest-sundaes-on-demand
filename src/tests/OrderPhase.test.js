import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test('order phase for happy path' , async () =>{
  // add ice cream scoop and toppings
  // click order button
  // check summary information
  // accept terms and condition
  // confirm order number on confirmation page
  // click new order button 
  // check subtotals are reset again

  render(<App />);
  // render(<OrderEntry />, {wrapper: OrderDetailsProvider });
  const grandTotal = screen.getByText('Grand total', {exact: false});
  const vanillaInput = await screen.findByLabelText('Vanilla scoop');
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '3');
  const mAndMInput = await screen.findByLabelText('M&Ms topping');
  // userEvent.clear(vanillaInput);
  userEvent.type(mAndMInput, '1');
  expect(grandTotal).toHaveTextContent('7.50');
  const orderBtn = screen.getByRole('button', {name: 'Order Sundae'});
  expect(orderBtn).toBeEnabled();
  userEvent.click(orderBtn);

  const scoopHeading = await screen.findByRole('heading', {name: 'Scoops: $6.00'});
  expect(scoopHeading).toBeInTheDocument();
  const toppingHeading = screen.getByRole('heading', {name: 'Toppings: $1.50'});
  expect(toppingHeading).toBeInTheDocument();
  
  const acceptCheckbox = screen.getByRole('checkbox', {label: 'accept'});
  expect(acceptCheckbox).not.toBeChecked();
  userEvent.click(acceptCheckbox);
  const confirmBtn = screen.getByRole('button', {name: 'Confirm order'});
  expect(confirmBtn).toBeEnabled();
  userEvent.click(confirmBtn);

  const thankYouHeader = await screen.findByRole('heading', {name: /thank you/i});
  expect(thankYouHeader).toBeInTheDocument();
  const orderNumber = await screen.findByText(/order number/i);
  expect(orderNumber).toBeInTheDocument();
  const newOrderBtn = screen.getByRole('button', {name: 'Create new order'});
  expect(newOrderBtn).toBeEnabled();
  userEvent.click(newOrderBtn);
  // expect(grandTotal).toHaveTextContent('0.00');
});
