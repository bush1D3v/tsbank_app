import { screen, render } from "@testing-library/react-native";
import { Loading } from ".";

const LoadingTestId: string = "Loading";
const LoadingIndicatorTestId: string = "LoadingIndicator";

describe("Loading Component Tests", () => {
  beforeEach(() => {
    render(<Loading />);
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(LoadingTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(LoadingTestId)).toHaveStyle({
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#3178c6",
    });
  });

  it("Should be able to render the LoadingIndicator component correctly", () => {
    expect(screen.getByTestId(LoadingIndicatorTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the LoadingIndicator with the correctly props", () => {
    expect(screen.getByTestId(LoadingIndicatorTestId)).toHaveProp(
      "color", "#fff"
    );

    expect(screen.getByTestId(LoadingIndicatorTestId)).toHaveProp(
      "size", "large"
    );
  });
});
