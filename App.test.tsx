import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock the pages for test simplicity
jest.mock('./pages/Dashboard', () => () => <div>Dashboard Page</div>);
jest.mock('./pages/NotFound', () => () => <div>404 Not Found</div>);

describe('App routing', () => {
  it('renders Dashboard component at root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Dashboard Page/i)).toBeInTheDocument();
  });

  it('renders NotFound component at unknown path', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
