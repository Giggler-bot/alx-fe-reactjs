import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Buy groceries/i)).toBeInTheDocument();
    expect(screen.getByText(/Walk the dog/i)).toBeInTheDocument();
    expect(screen.getByText(/Read a book/i)).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/New todo/i);
    const addButton = screen.getByText(/Add/i);
    fireEvent.change(input, { target: { value: "Test new todo" } });
    fireEvent.click(addButton);
    expect(screen.getByText(/Test new todo/i)).toBeInTheDocument();
  });

  test("can toggle completion", () => {
    render(<TodoList />);
    const todo = screen.getByText(/Buy groceries/i);
    expect(todo).toBeInTheDocument();
    fireEvent.click(todo);
    // after toggle completed, style will include line-through
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText(/Buy groceries/i);
    const deleteButton = screen.getByLabelText(/delete-1/); // id of initial first todo is 1 in our code
    fireEvent.click(deleteButton);
    expect(screen.queryByText(/Buy groceries/i)).not.toBeInTheDocument();
  });
});
