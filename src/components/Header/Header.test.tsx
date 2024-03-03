import { screen, render } from "@testing-library/react-native";
import { Header } from ".";

const HeaderTestId: string = "Header";
const LogoTestId: string = "Logo";
const ProfileIconTestId: string = "ProfileIcon";

describe("Header Component Tests", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(HeaderTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(HeaderTestId)).toHaveStyle({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      paddingBottom: 8,
      width: "100%",
      height: 64,
      backgroundColor: "#215da8",
    });
  });

  it("Should be able to render the Logo component correctly", () => {
    expect(screen.getByTestId(LogoTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Icon component correctly", () => {
    expect(screen.getByTestId(ProfileIconTestId)).toBeOnTheScreen();
  });
});
