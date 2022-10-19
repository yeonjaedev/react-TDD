import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); 
  const linkElement = screen.getByText(/learn react/i); // App.js에 learn react text가 맞는지 getByText 쿼리함수 이용해서 확인
  expect(linkElement).toBeInTheDocument(); // linkElement는 document안에 있는지 확인
});
