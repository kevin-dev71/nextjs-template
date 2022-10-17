import { fireEvent, render, screen, waitFor } from "@testing-library/react"

import Home from "@/pages/index"

describe("@/pages/index", () => {
  test("render Home without crash", () => {
    render(<Home />)
  })

  test("should make a post request", async () => {
    render(<Home />)

    const button = screen.getByText(/Test hello api/i)
    fireEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText(/POST from msw/i)).toBeInTheDocument()
    })
  })
})
