import React from "react";
import { render } from "@testing-library/react";
import StoryList from "./StoryList";


it("matches snapshot with no stories", function() {
    const { asFragment } = render(<StoryList />);
    expect(asFragment()).toMatchSnapshot();
  });