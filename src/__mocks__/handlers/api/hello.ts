import { rest } from "msw"

export const helloHandler = [
  rest.get(`/api/hello`, async (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: "GET from msw" }))
  }),
  rest.post(`/api/hello`, async (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: "POST from msw" }))
  }),
]
