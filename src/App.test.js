import React from "react"
//using a react testing library
//tests the dom output
import { render } from "@testing-library/react"
import App from "./App"
it("renders welcome message", () => {
  //get the getbyText object
  const { getByText } = render(<App />)

  //expect test (library method) puts outcome in document
  expect(getByText("Learn React")).toBeInTheDocument()
})
