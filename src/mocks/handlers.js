import { rest } from "msw";

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        {name: 'Chocolate scoop', imagePath:'/images/chocolate.png'},
        {name: 'Vanilla scoop', imagePath:'/images/vanilla.png'}
      ])
    );
  }), 
  rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
    return res(
      ctx.json([
        {name: 'M&Ms topping', imagePath:'/images/m-and-ms.png'},
        {name: 'Hot fudge topping', imagePath:'/images/hot-fudge.png'}
      ])
    );
  }),
  rest.post('http://localhost:3030/order', (req, res, ctx) => {
    return res(
      ctx.json({orderNumber: 2332})
    );
  }), 

]