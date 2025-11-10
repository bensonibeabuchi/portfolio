import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

describe('Home page', () => {
  it('renders the heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /benson/i });
    expect(heading).toBeInTheDocument();
  });
});
