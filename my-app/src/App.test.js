import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event"

// Demo test from class 

test('renders learn react link', () => {
  render(<App />);
  // first test
  // screen.debug();

    //Checking if checkbox is checked
  userEvent.click(screen.getByTestId("checkbox"));
    //Checking if checkbox is not checked
  expect(screen.getByTestId("checkbox")).toBeChecked()
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});


// my tests 
test("testing for hello world in the page", () => {
  render(<App />);
  screen.debug();
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

test("testing for if the button is clickable", () => {
  render(<App />);
  screen.debug();
  const button = screen.getByRole('button');
  userEvent.click(button);
});
