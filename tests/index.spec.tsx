import React from "react";
import { render } from "react-testing-library";
import Affix from "../src";

describe("Affix", () => {
    test("render", () => {
        const wrapper = render(<Affix />);
        const div = wrapper.container.querySelector(".xy-affix");
        expect(div).toBeDefined();
    });
});
