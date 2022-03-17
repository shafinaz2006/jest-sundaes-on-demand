import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../pages/summary/SummaryForm';
import {OrderDetailsProvider} from '../contexts/OrderDetailsContext';

test('checkbox is unchecked by default and submit btn is disabled', () => {
  render(<SummaryForm /> , {wrapper: OrderDetailsProvider });
  const acceptCheckbox = screen.getByRole('checkbox', {label: 'accept'});
  expect(acceptCheckbox).not.toBeChecked();
  const submitBtn = screen.getByRole('button', {name: 'Confirm order'});
  expect(submitBtn).not.toBeEnabled();
});

test('checkbox enables button', () => {
  render(<SummaryForm /> , {wrapper: OrderDetailsProvider });
  const acceptCheckbox = screen.getByRole('checkbox', {label: 'accept'});
  fireEvent.click(acceptCheckbox);
  const submitBtn = screen.getByRole('button', {name: 'Confirm order'});
  expect(submitBtn).toBeEnabled();
});

test('checkbox disables Accept button', () => {
  render(<SummaryForm /> , {wrapper: OrderDetailsProvider });
  const acceptCheckbox = screen.getByRole('checkbox', {label: 'accept'});
  fireEvent.click(acceptCheckbox);
  fireEvent.click(acceptCheckbox);
  const submitBtn = screen.getByRole('button', {name: 'Confirm order'});
  expect(submitBtn).not.toBeEnabled();
});

test('display terms popup on hover', () => {
  render(<SummaryForm /> , {wrapper: OrderDetailsProvider });
  const termsSpan = screen.getByTestId('terms&Condition');
  const popUp = screen.queryByTestId('termsPop');
  expect(popUp).toBeNull();
  userEvent.hover(termsSpan);
  const termsPop = screen.getByTestId('termsPop');
  expect(termsPop).toBeInTheDocument();
});

test('remove terms popup', () => {
  render(<SummaryForm /> , {wrapper: OrderDetailsProvider });
  const termsSpan = screen.getByTestId('terms&Condition');
  userEvent.unhover(termsSpan);
  expect(screen.queryByTestId('termsPop')).toBeNull();
});

