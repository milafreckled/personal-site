import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import Portrait from './Components/Portrait';


describe('Portrait', () => {
  beforeEach(() => {
    render(<Portrait />);
  });
  test('renders portrait component', () => {    
    screen.debug();
    expect(screen.getByText(/a programmer/)).toBeInTheDocument();
  });
  test('alt text test', () => {
    expect(screen.getByAltText('me')).toBeInTheDocument();
  });
  test('role test', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
  it('shows that there is no such text in app', () => {
    expect(screen.queryByText(/JavaScript tests/)).toBeNull();
  })
});


