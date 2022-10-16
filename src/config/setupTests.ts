import { mswServer } from "@/__mocks__/mswServer"

import "@testing-library/jest-dom/extend-expect"

beforeAll(() => {
  mswServer.listen()
})

afterAll(() => {
  mswServer.close()
})

afterEach(() => {
  mswServer.resetHandlers()
})
