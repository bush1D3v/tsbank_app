import { render, screen } from "@testing-library/react-native";
import { DedicationText } from ".";
import { globals } from "@/styles";

const DedicationTextTestId: string = "DedicationText";
const DedicationTextMadeTestId: string = "DedicationTextMade";
const DedicationTextByTestId: string = "DedicationTextBy";
const DedicationTextLinkTestId: string = "DedicationTextLink";

describe("DedicationText Component Tests", () => {
  beforeEach(() => {
    render(<DedicationText />);
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(DedicationTextTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(DedicationTextTestId)).toHaveStyle({
      display: "flex",
      textAlign: "center",
    });
  });

  it("Should be able to render the Made component correctly", () => {
    expect(screen.getByTestId(DedicationTextMadeTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Made with the correctly styles", () => {
    expect(screen.getByTestId(DedicationTextMadeTestId)).toHaveStyle({
      ...globals.text
    });
  });

  it("Should be able to render the Made with the correctly text", () => {
    expect(screen.getByTestId(DedicationTextMadeTestId)).toHaveTextContent(
      "Made with 💖"
    );
  });

  it("Should be able to render the By component correctly", () => {
    expect(screen.getByTestId(DedicationTextByTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the By with the correctly styles", () => {
    expect(screen.getByTestId(DedicationTextByTestId)).toHaveStyle({
      ...globals.text
    });
  });

  it("Should be able to render the By with the correctly text", () => {
    expect(screen.getByTestId(DedicationTextByTestId)).toHaveTextContent(
      "by bush1D3v"
    );
  });

  it("Should be able to render the Link component correctly", () => {
    expect(screen.getByTestId(DedicationTextLinkTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Link with the correctly styles", () => {
    expect(screen.getByTestId(DedicationTextLinkTestId)).toHaveStyle({
      fontWeight: "700",
      fontFamily: "Inter_700Bold",
      textDecorationLine: "underline"
    });
  });

  it("Should be able to render the Link with the correctly props", () => {
    expect(screen.getByTestId(DedicationTextLinkTestId)).toHaveProp(
      "href", "https://bushi-links.vercel.app/"
    );
  });

  it("Should be able to render the Link with the correctly text", () => {
    expect(screen.getByTestId(DedicationTextLinkTestId)).toHaveTextContent(
      "bush1D3v"
    );
  });
});
