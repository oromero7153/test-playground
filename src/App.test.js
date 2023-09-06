import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"

describe('test for header', () => {
  test(" header renders with correct text", () => {
    render(<App />);
    const headerEl = screen.getByRole("heading")
    expect(headerEl.textContent).toBe("Testing Playground")
  });
})

describe('test for the button', () => {
  test('button changes color and text when clicked', () => {
    render(<App />);
    const buttonEl = screen.getByRole('button')
    expect(buttonEl).toHaveStyle('background-color: green')
    expect(buttonEl.textContent).toBe('Change button color to blue')

    fireEvent.click(buttonEl)

    expect(buttonEl).toHaveStyle('background-color: blue')
    expect(buttonEl.textContent).toBe('Change button color to green')
  });
})

describe('test for the checkbox', () => {
  test('checkbox disables the button first click and enables the button on second click', () => {
    render(<App />)
    const checkboxEl = screen.getByRole('checkbox')
    const buttonEl = screen.getByRole('button')

    fireEvent.click(checkboxEl)

    expect(buttonEl).toBeDisabled()

    fireEvent.click(checkboxEl)

    expect(buttonEl).toBeEnabled()
  });
})
describe('test for the text', () => {
  test('paragraph text correctly reflects the disabled state of the button', () => {
    render(<App />)
    const paragraphEl = screen.getByRole('paragraph')
    const checkboxEl = screen.getByRole('checkbox')

    expect(paragraphEl.textContent).toBe('Button is enabled')
   
    fireEvent.click(checkboxEl)

    expect(paragraphEl.textContent).toBe('Button is disabled')
  });
})