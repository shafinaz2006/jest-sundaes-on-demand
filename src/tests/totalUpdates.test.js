import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { clear } from '@testing-library/user-event/dist/clear';
import Options from '../pages/entry/Options';

test('updates scoop subtotal when Vanilla scoop is changed' , async() =>{
  render(<Options optionType="scoops" />);
  const scoopsSubTotal = screen.getByText('Scoops total', {exact: false});
  expect(scoopsSubTotal).toHaveTextContent('0.00');
  const vanillaInput = await screen.findAllByRole('spinbutton', {name: 'Vanilla'});
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  expect(scoopsSubTotal).toHaveTextContent('2.00');
});

test('updates scoop subtotal when Chocolate scoop is changed' , async() =>{
  render(<Options optionType="scoops" />);
  const scoopsSubTotal = screen.getByText('Scoops total', {exact: false});
  expect(scoopsSubTotal).toHaveTextContent('0.00');
  const vanillaInput = await screen.findAllByRole('spinbutton', {name: 'Vanilla'});
  userEvent.clear(vanillaInput);
  const chocolateInput = await screen.findAllByRole('spinbutton', {name: 'Chocolate'});
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');
  expect(scoopsSubTotal).toHaveTextContent('4.00');
});

test('updates scoop subtotal when both Vanilla and Chocolate scoops are changed' , async() =>{
  render(<Options optionType="scoops" />);
  const scoopsSubTotal = screen.getByText('Scoops total', {exact: false});
  expect(scoopsSubTotal).toHaveTextContent('0.00');
  const vanillaInput = await screen.findAllByRole('spinbutton', {name: 'Vanilla'});
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  const chocolateInput = await screen.findAllByRole('spinbutton', {name: 'Chocolate'});
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');
  expect(scoopsSubTotal).toHaveTextContent('6.00');
});

