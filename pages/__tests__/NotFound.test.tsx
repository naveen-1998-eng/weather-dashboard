import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../NotFound';

describe('NotFound', () => {
  it('displays 404 message', () => {
    render(<NotFound />);
    expect(screen.getByText(/404 - Page Not Found/i)).toBeInTheDocument();
  });
});
