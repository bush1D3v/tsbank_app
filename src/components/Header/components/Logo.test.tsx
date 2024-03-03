import {
  render,
  screen,
  fireEvent,
  waitFor,
  act
} from "@testing-library/react-native";
import { HOME, LOGIN } from "@/utils/routerPaths";
import Home from "@/app/home";
import Login from "@/app";
import { renderRouter } from "expo-router/testing-library";
import { Logo } from ".";

const LogoTestId: string = "Logo";
const LogoLinkTestId: string = "LogoLink";

describe("Logo Component Tests", () => {
  beforeEach(() => {
    renderRouter(
      {
        index: () => <Login />,
        [ HOME ]: () => <Home />
      },
      {
        initialUrl: LOGIN
      }
    );
    render(<Logo />);
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(LogoTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(LogoTestId)).toHaveStyle({
      width: 52,
      height: "100%"
    });
  });

  it("Should be able to render the Link correctly", () => {
    expect(screen.getByTestId(LogoLinkTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Link with the correctly href", () => {
    expect(screen.getByTestId(LogoLinkTestId)).toHaveProp("href", HOME);
  });

  it("Should be able to render the Link with the correctly styles", () => {
    expect(screen.getByTestId(LogoLinkTestId)).toHaveStyle({
      width: "100%",
      height: "100%"
    });
  });

  it("Should be able to fireEvent the Link", async () => {
    act(() => {
      fireEvent.press(screen.getByTestId(LogoLinkTestId));
    });

    await waitFor(() => {
      expect(screen.getByTestId(LogoLinkTestId)).toHaveProp("href", HOME);
    });
  });
});
