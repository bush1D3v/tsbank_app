import { render, screen } from "@testing-library/react-native";
import { PolicyAndTerms } from ".";

const PolicyAndTermsTestId: string = "PolicyAndTerms";
const PolicyAndTermsItemTestId: string = "PolicyAndTermsItem";

describe("PolicyAndTerms Component Tests", () => {
  beforeEach(() => {
    render(<PolicyAndTerms />);
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(PolicyAndTermsTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(PolicyAndTermsTestId)).toHaveStyle({
      display: "flex",
    });
  });

  it("Should be able to render the component with the correctly items", () => {
    expect(screen.getAllByTestId(PolicyAndTermsItemTestId)).toHaveLength(2);
  });

  it("Should be able to render the component with the correctly text", () => {
    expect(screen.getByTestId(PolicyAndTermsTestId)).toHaveTextContent(
      "PolicyTerms"
    );
  });
});
