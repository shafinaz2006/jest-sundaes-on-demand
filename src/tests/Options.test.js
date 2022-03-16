import { render, screen} from "@testing-library/react";
import Options from "../pages/entry/Options";
import {OrderDetailsProvider} from '../contexts/OrderDetailsContext';

test('displays image for each scoop option from server' , async() =>{
  render(<Options optionType="scoops" />, {wrapper: OrderDetailsProvider });
  const scoopImages = await screen.findAllByRole('img', {name: /scoop$/i});
  expect(scoopImages).toHaveLength(2);
  const imgAltText = scoopImages.map(element => element.alt);
  expect(imgAltText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('displays image for each topping option from server' , async() =>{
  render(<Options optionType="toppings" />, {wrapper: OrderDetailsProvider });
  const toppingImages = await screen.findAllByRole('img', {name: /topping$/i});
  expect(toppingImages).toHaveLength(2);
  const imgAltText = toppingImages.map(element => element.alt);
  expect(imgAltText).toEqual(['M&Ms topping', 'Hot fudge topping']);
});