import React from "react";
import { render } from "@testing-library/react";
import StoryCardList from "./StoryCardList";


it("matches snapshot with no stories", function() {
    const { asFragment } = render(<StoryCardList />);
    expect(asFragment()).toMatchSnapshot();
  });