import { rest } from "msw";

const mockNewUser = {
  username: "lillo",
  name: "lillo",
  id: "1",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}user/register`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(mockNewUser));
    }
  ),
];
