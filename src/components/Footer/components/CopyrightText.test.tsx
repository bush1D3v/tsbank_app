import { render, screen } from "@testing-library/react-native";
import { CopyrightText } from ".";
import { globals } from "@/styles";

const CopyrightTextTestId: string = "CopyrightText";
const CopyrightTextNameTestId: string = "CopyrightTextName";
const CopyrightTextCorpTestId: string = "CopyrightTextCorp";

describe("CopyrightText Component Tests", () => {
  beforeEach(() => {
    render(<CopyrightText />);
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(CopyrightTextTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(CopyrightTextTestId)).toHaveStyle({
      display: "flex",
    });
  });

  it("Should be able to render the Name component correctly", () => {
    expect(screen.getByTestId(CopyrightTextNameTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Name with the correctly styles", () => {
    expect(screen.getByTestId(CopyrightTextNameTestId)).toHaveStyle({
      color: "#ffffff"
    });
  });

  it("Should be able to render the Name with the correctly text", () => {
    expect(screen.getByTestId(CopyrightTextNameTestId)).toHaveTextContent("TSBank");
  });

  it("Should be able to render the Corp component correctly", () => {
    expect(screen.getByTestId(CopyrightTextCorpTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Corp with the correctly styles", () => {
    expect(screen.getByTestId(CopyrightTextCorpTestId)).toHaveStyle({
      ...globals.text
    });
  });

  it("Should be able to render the Corp with the correctly text", () => {
    expect(screen.getByTestId(CopyrightTextCorpTestId)).toHaveTextContent(
      "Corporation ©"
    );
  });
});
