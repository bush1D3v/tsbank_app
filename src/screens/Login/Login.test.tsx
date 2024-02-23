import React from "react";
import renderer from "react-test-renderer";
import { LoginScreen } from "./index";

describe("LoginScreen component tests", () => {
  it("Test", () => {
    const tree = renderer.create(<LoginScreen />).toTree();
    expect(tree?.rendered);
  });
});
