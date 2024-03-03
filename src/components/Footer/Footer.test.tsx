import { screen, render } from "@testing-library/react-native";
import { Footer } from ".";

const FooterTestId: string = "Footer";
const CopyrightTextTestId: string = "CopyrightText";
const DedicationTextTestId: string = "DedicationText";
const PolicyAndTermsTestId: string = "PolicyAndTerms";

describe("Footer Component Tests", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(FooterTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(FooterTestId)).toHaveStyle({
      fontSize: 14,
      lineHeight: 20,
      width: "100%",
      backgroundColor: "#215da8",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 8,
      paddingTop: 8,
      paddingLeft: 16,
      paddingRight: 16,
      position: "relative",
      height: 56
    });
  });

  it("Should be able to render the CopyrightText component correctly", () => {
    expect(screen.getByTestId(CopyrightTextTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the PolicyAndTerms component correctly", () => {
    expect(screen.getByTestId(PolicyAndTermsTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the DedicationText component correctly", () => {
    expect(screen.getByTestId(DedicationTextTestId)).toBeOnTheScreen();
  });
});


