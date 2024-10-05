import { render, screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';


describe('Greet', () => {
  it('should greet the user with name is name is passed as props', () => {
    
    render(<Greet name="John" />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/john/i);
    
  });

  it('should render login button ', () => {
    
    render(<Greet  />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
    
  });
});