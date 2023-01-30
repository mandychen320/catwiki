import { render, screen } from '@testing-library/react';
import Search from '../routes/search';

describe('renders <Search />', () => {
  it('load title on search page', () => {
    render(<Search />);
    const title = screen.getByText(/Find a cat breed that you like!/i)
    expect(title).toBeInTheDocument();
  });
  it('load search box label', () => {
    render(<Search />);
    const element = screen.getByLabelText('Cat Breed');
    expect(element).toBeInTheDocument();
  });
});
