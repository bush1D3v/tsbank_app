import {
  render,
  screen,
  fireEvent,
  waitFor,
  act
} from "@testing-library/react-native";
import { HOME, PROFILE } from "@/utils/routerPaths";
import Home from "@/app/home";
import Profile from "@/app/profile";
import { renderRouter } from "expo-router/testing-library";
import { ProfileIcon } from ".";
import Login from "@/app";

const ProfileIconTestId: string = "ProfileIcon";
const ProfileIconImageTestId: string = "ProfileIconImage";

describe("Logo Component Tests", () => {
  beforeEach(() => {
    renderRouter(
      {
        index: () => <Login />,
        [ HOME ]: () => <Home />,
        [ PROFILE ]: () => <Profile />
      },
      {
        initialUrl: HOME
      }
    );
    render(<ProfileIcon />);
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ProfileIconTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(ProfileIconTestId)).toHaveStyle({
      display: "flex",
      marginBottom: 4,
      height: "100%"
    });
  });

  it("Should be able to render the component with the correctly href", () => {
    expect(screen.getByTestId(ProfileIconTestId)).toHaveProp("href", PROFILE);
  });

  it("Should be able to fireEvent the component", async () => {
    act(() => {
      fireEvent.press(screen.getByTestId(ProfileIconTestId));
    });

    await waitFor(() => {
      expect(screen.getByTestId(ProfileIconTestId)).toHaveProp("href", PROFILE);
    });
  });

  it("Should be able to render the Image correctly", () => {
    expect(screen.getByTestId(ProfileIconImageTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Image with the correctly styles", () => {
    expect(screen.getByTestId(ProfileIconImageTestId)).toHaveStyle({
      color: "white",
      fontSize: 53
    });
  });
});
