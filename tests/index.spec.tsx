import React from "react";
import { render } from "@testing-library/react";
import Affix from "../src";

describe("Affix", () => {
    test("render", () => {
        const wrapper = render(<Affix />);
        const div = wrapper.container.querySelector(".xy-affix");
        expect(div).toBeDefined();
    });
});
