import Home from "@/pages/index"
import { render, screen } from "@testing-library/react"

describe("@/pages/index", () => {
  test("render Home without crash", () => {
    render(<Home />)
  })

  test("should make a post request", async () => {
    render(<Home />)

    expect(screen.getByText(/HOLA/i)).toBeInTheDocument()
  })
})
