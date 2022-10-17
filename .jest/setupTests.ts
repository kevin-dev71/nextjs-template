import "@testing-library/jest-dom/extend-expect"
import { mswServer } from "../src/__mocks__/mswServer"

import "whatwg-fetch"

global.URL.createObjectURL = jest.fn()
global.URL.revokeObjectURL = jest.fn()

jest.mock("next/router", () => require("next-router-mock"))
jest.mock("next/dist/client/router", () => require("next-router-mock"))

//  Mock IntersectionObserver
class IntersectionObserver {
  observe = jest.fn()
  disconnect = jest.fn()
  unobserve = jest.fn()
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
})

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
})

beforeAll(() => {
  mswServer.listen()

  const tooltipRoot = document.createElement("div")
  tooltipRoot.setAttribute("id", "tooltip")
  document.body.appendChild(tooltipRoot)
})

afterAll(() => {
  mswServer.close()
})

afterEach(() => {
  mswServer.resetHandlers()
})
