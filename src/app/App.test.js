/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import App from "./App";

let initialTodos = [
  {
    _id: "64494cd1269a6948a8786a12",
    title: "Todo 1",
    description: "Todo 1",
  },
  {
    _id: "64495cdef4b2b9d4bee7618b",
    title: "Todo 2",
    description: "Todo 2",
  },
];

const server = setupServer(
  rest.get(`http://localhost/api/todo`, (req, res, ctx) => {
    return res(ctx.json(initialTodos));
  }),
  rest.post(`http://localhost/api/todo`, (req, res, ctx) => {
    return res(
      ctx.json([
        ...initialTodos,
        {
          _id: "64495cdef4b2b2d4bee7618b",
          title: "Todo 3",
          description: "Todo 3",
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const TEST_IDS = {
  todoContainer: "todo-container",
  titleInput: "title-input",
  descriptionInput: "description-input",
  submitButton: "submit-button",
};
test("Displays the correct UI on render", async () => {
  await act(async () => {
    render(<App />);
  });
  await screen.findByTestId(TEST_IDS.todoContainer);

  const todos = await screen.findByTestId(TEST_IDS.todoContainer);

  expect(todos.childElementCount).toBe(2);

  for (let i = 0; i < todos.childElementCount; i++) {
    expect(todos.children[i].children[0].children[0]).toHaveTextContent(
      initialTodos[i].title
    );
    expect(todos.children[i].children[0].children[1]).toHaveTextContent(
      initialTodos[i].description
    );
  }
});

test("Adds a todo successfully", async () => {
  await act(async () => {
    render(<App />);
  });

  const titleInput = screen.getByTestId(TEST_IDS.titleInput);
  const descriptionInput = screen.getByTestId(TEST_IDS.descriptionInput);
  const submitButton = screen.getByTestId(TEST_IDS.submitButton);

  fireEvent.change(titleInput, { target: { value: "Test 3" } });
  fireEvent.change(descriptionInput, { target: { value: "Test 3" } });
  fireEvent.click(submitButton);

  await waitFor(() => jest.setTimeout(2000));

  const todos = await screen.findByTestId(TEST_IDS.todoContainer);
  expect(todos.childElementCount).toBe(3);

  const newTodos = [
    ...initialTodos,
    {
      _id: "64495cdef4b2b2d4bee7618b",
      title: "Todo 3",
      description: "Todo 3",
    },
  ];
  for (let i = 0; i < todos.childElementCount; i++) {
    expect(todos.children[i].children[0].children[0]).toHaveTextContent(
      newTodos[i].title
    );
    expect(todos.children[i].children[0].children[1]).toHaveTextContent(
      newTodos[i].description
    );
  }
});
