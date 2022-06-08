import { rest } from "msw";
import { mockPizzerias } from "./mockPizzerias";

const mockNewUser = {
  username: "lillo",
  name: "lillo",
  id: "1",
};

const mockToken = "token";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}user/register`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(mockNewUser));
    }
  ),
  rest.post(`${process.env.REACT_APP_API_URL}user/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: mockToken }));
  }),
  rest.get(
    `${process.env.REACT_APP_API_URL}pizzerias/list`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ mockPizzerias }));
    }
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}pizzerias/:idPizzeria`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockPizzerias[0].id));
    }
  ),
  rest.post(`${process.env.REACT_APP_API_URL}pizzerias/`, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ newPizzeria: mockPizzerias[0] }));
  }),
  rest.get(
    `${process.env.REACT_APP_API_URL}pizzerias/:idPizzeria`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ data: mockPizzerias[0] }));
    }
  ),
  rest.patch(`${process.env.REACT_APP_API_URL}pizzerias/1`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        updatedPizzeria: {
          name: "NAP",
          address: "La Rambla",
          timetable: "15-24",
          image: "image3",
          owner: "629684abc46cf477e7ca7008",
          specialty: "Marinara",
          id: "1",
        },
      })
    );
  }),
];
