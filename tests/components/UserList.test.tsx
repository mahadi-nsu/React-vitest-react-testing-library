import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  const usersWithData: User[] = [
    {
      id: 1,
      name: "John",
      isAdmin: true,
    },
    {
      id: 2,
      name: "Jane",
      isAdmin: false,
    },
  ];

  const usersWithoutData: User[] = [];

  it("should render list of users", () => {
    render(<UserList users={usersWithData} />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list.children.length).toBe(usersWithData.length);
  });

  it("should render no users available message", () => {
    render(<UserList users={usersWithoutData} />);
    const message = screen.getByText(/no users available/i);
    expect(message).toBeInTheDocument();
  });

  it("should naviagte to users/${user.id}", () => {
    render(<UserList users={usersWithData} />);
    usersWithData.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      console.log("link", link);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
