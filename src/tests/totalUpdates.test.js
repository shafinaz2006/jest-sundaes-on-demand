import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Options from '../pages/entry/Options';
import {OrderDetailsProvider} from '../contexts/OrderDetailsContext';
import OrderEntry from '../pages/entry/OrderEntry';

// need to provide context as well

// scoop tests: 
test('updates scoop subtotal when Vanilla scoop is changed' , async() =>{
  render(<Options optionType="scoops" />, {wrapper: OrderDetailsProvider });
  const scoopsSubTotal = screen.getByText('Scoops total', {exact: false});
  expect(scoopsSubTotal).toHaveTextContent('0.00');
  const vanillaInput = await screen.findByLabelText('Vanilla scoop');
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  expect(scoopsSubTotal).toHaveTextContent('2.00');
});

test('updates scoop subtotal when Chocolate scoop is changed' , async() =>{
  render(<Options optionType="scoops" />, {wrapper: OrderDetailsProvider });
  const scoopsSubTotal = screen.getByText('Scoops total', {exact: false});
  expect(scoopsSubTotal).toHaveTextContent('0.00');
  const vanillaInput = await screen.findByLabelText('Vanilla scoop');
  // userEvent.clear(vanillaInput);
  const chocolateInput = await screen.findByLabelText('Chocolate scoop');
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');
  expect(scoopsSubTotal).toHaveTextContent('4.00');
});

test('updates scoop subtotal when both Vanilla and Chocolate scoops are changed' , async() =>{
  render(<Options optionType="scoops" />, {wrapper: OrderDetailsProvider });
  const scoopsSubTotal = screen.getByText('Scoops total', {exact: false});
  expect(scoopsSubTotal).toHaveTextContent('0.00');
  const vanillaInput = await screen.findByLabelText('Vanilla scoop');
  // userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  const chocolateInput = await screen.findByLabelText('Chocolate scoop');
  // userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');
  expect(scoopsSubTotal).toHaveTextContent('6.00');
});

// topping tests:

test('updates toppings subtotal when M&Ms topping is changed' , async() =>{
  render(<Options optionType="toppings" />, {wrapper: OrderDetailsProvider });
  const toppingsSubTotal = screen.getByText('Toppings total', {exact: false});
  expect(toppingsSubTotal).toHaveTextContent('0.00');
  const mAndMInput = await screen.findByLabelText('M&Ms topping');
  userEvent.clear(mAndMInput);
  userEvent.type(mAndMInput, '1');
  expect(toppingsSubTotal).toHaveTextContent('1.50');
});

test('updates toppings subtotal when Hot fudge topping is changed' , async() =>{
  render(<Options optionType="toppings" />, {wrapper: OrderDetailsProvider });
  const toppingsSubTotal = screen.getByText('Toppings total', {exact: false});
  expect(toppingsSubTotal).toHaveTextContent('0.00');
  const hotFudgeToppingInput = await screen.findByLabelText('Hot fudge topping');
  userEvent.clear(hotFudgeToppingInput);
  userEvent.type(hotFudgeToppingInput, '2');
  expect(toppingsSubTotal).toHaveTextContent('3.00');
});

test('updates toppings subtotal when both M&Ms and Hot fudge topping are changed' , async() =>{
  render(<Options optionType="toppings" />, {wrapper: OrderDetailsProvider });
  const toppingsSubTotal = screen.getByText('Toppings total', {exact: false});
  expect(toppingsSubTotal).toHaveTextContent('0.00');
  const mAndMInput = await screen.findByLabelText('M&Ms topping');
  // userEvent.clear(vanillaInput);
  userEvent.type(mAndMInput, '1');
  const hotFudgeToppingInput = await screen.findByLabelText('Hot fudge topping');
  // userEvent.clear(chocolateInput);
  userEvent.type(hotFudgeToppingInput, '2');
  expect(toppingsSubTotal).toHaveTextContent('4.50');
});

// GrandTotal tests:


test('checks grandtotal zero then with scoop first and topping second' , async() =>{
  render(<OrderEntry />, {wrapper: OrderDetailsProvider });
  const grandTotal = screen.getByText('Grand total', {exact: false});
  expect(grandTotal).toHaveTextContent('0.00');
  const scoopsSubTotal = screen.getByText('Scoops total', {exact: false});
  expect(scoopsSubTotal).toHaveTextContent('0.00');
  const vanillaInput = await screen.findByLabelText('Vanilla scoop');
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  expect(scoopsSubTotal).toHaveTextContent('2.00');
  const mAndMInput = await screen.findByLabelText('M&Ms topping');
  // userEvent.clear(vanillaInput);
  userEvent.type(mAndMInput, '1');
  const hotFudgeToppingInput = await screen.findByLabelText('Hot fudge topping');
  // userEvent.clear(chocolateInput);
  userEvent.type(hotFudgeToppingInput, '2');
  expect(grandTotal).toHaveTextContent('6.50');
});

test('checks grandtotal with scoop first, topping second, scoop remove' , async() =>{
  render(<OrderEntry />, {wrapper: OrderDetailsProvider });
  const grandTotal = screen.getByText('Grand total', {exact: false});
  expect(grandTotal).toHaveTextContent('0.00');
  const scoopsSubTotal = screen.getByText('Scoops total', {exact: false});
  expect(scoopsSubTotal).toHaveTextContent('0.00');
  const vanillaInput = await screen.findByLabelText('Vanilla scoop');
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '2');
  expect(scoopsSubTotal).toHaveTextContent('4.00');
  const mAndMInput = await screen.findByLabelText('M&Ms topping');
  const hotFudgeToppingInput = await screen.findByLabelText('Hot fudge topping');
  // userEvent.clear(chocolateInput);
  userEvent.type(mAndMInput, '1');
  userEvent.type(hotFudgeToppingInput, '2');
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '0');
  expect(grandTotal).toHaveTextContent('4.50');
});

