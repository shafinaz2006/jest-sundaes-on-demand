import { render, screen, waitFor} from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import {rest} from 'msw';
import {server} from '../../../mocks/server';

test('handles error for scoopes and toppings routes' , async() =>{
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) => 
      res(ctx.status(500))
    ), 
    rest.get('http://localhost:3030/toppings', (req, res, ctx) => 
      res(ctx.status(500))
    ),
  );
  render(<OrderEntry />);
  await waitFor(async() => {
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
  })
  
});

// there are two async calls. So, await gives one alert when one async call is completed;
// that's why waitfor is used
