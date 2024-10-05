import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';
import { User } from '../../src/entities';

describe("UserAccount", () => {
  const user : User = {
    id: 1,
    name: "John",
    isAdmin: true,
    };

    it("should render edit button if the user is admin role", () => {
        render(<UserAccount user={user} />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i);
    });

    it("should render user name", () => {
        render(<UserAccount user={user} />);
        const name = screen.getByText(/john/i);
        expect(name).toBeInTheDocument();
    });

})
