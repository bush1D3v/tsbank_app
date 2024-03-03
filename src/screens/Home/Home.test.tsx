import { render, screen } from "@testing-library/react-native";
import { HomeScreen } from ".";
import { globals } from "@/styles";

const HomeScreenTestId: string = "HomeScreen";
const HooksListTestId: string = "HooksList";
const UserReceptionTestId: string = "UserReception";

describe("HomeScreen Component Tests", () => {
  beforeEach(() => {
    render(<HomeScreen />);
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(HomeScreenTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(HomeScreenTestId)).toHaveStyle({
      ...globals.container,
      justifyContent: "center",
    });
  });

  it("Should be able to render the UserReception component correctly", () => {
    expect(screen.getByTestId(UserReceptionTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the HooksList component correctly", () => {
    expect(screen.getByTestId(HooksListTestId)).toBeOnTheScreen();
  });
});
