import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter, json } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the body Component with Search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20)

  const searchBtn = screen.getByRole("button", {name: "Search"});

  const searchInput = screen.getByTestId('searchInput');

  fireEvent.change(searchInput,{target:{value: 'kfc'}})

  fireEvent.click(searchBtn)
// screen should load 4 res cards

const cards = screen.getAllByTestId("resCard")

expect(cards.length).toBe(1)
});

it("should filter Top rated restaurant", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
  
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
  
    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"})
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(7)
  
    
  });