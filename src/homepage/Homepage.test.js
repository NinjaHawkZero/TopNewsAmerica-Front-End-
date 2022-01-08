
  import React from "react";
  import { render } from "@testing-library/react";
  import Homepage from "./Homepage";

  
  it("matches snapshot", function () {
      const { asFragment } = render(
          
            <Homepage />
          
      );
      expect(asFragment()).toMatchSnapshot();
    });