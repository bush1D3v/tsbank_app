import {
  screen,
  fireEvent,
  waitFor,
  act
} from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";
import { globals } from "@/styles";
import { REGISTER } from "@/utils/routerPaths";
import Login from "@/app";
import Register from "@/app/register";

const LoginScreenTestId: string = "LoginScreen";
const LoginRedirectTestId: string = "LoginRedirect";
const LoginRedirectTextTestId: string = "LoginRedirectText";
const LoginRedirectLinkTestId: string = "LoginRedirectLink";

describe("RegisterRedirect Component Tests", () => {
  beforeEach(() => {
    renderRouter(
      {
        index: () => <Login />,
        [ REGISTER ]: () => <Register />,
      },
      {
        initialUrl: REGISTER,
      }
    );
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(LoginRedirectTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(LoginRedirectTestId)).toHaveStyle({
      display: "flex",
      flexDirection: "row",
    });
  });

  it("Should be able to render the Text component correctly", () => {
    expect(screen.getByTestId(LoginRedirectTextTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Text with the correctly styles", () => {
    expect(screen.getByTestId(LoginRedirectTextTestId)).toHaveStyle({
      ...globals.text,
      fontSize: 20,
      lineHeight: 28,
    });
  });

  it("Should be able to render the Text with the correctly text", () => {
    expect(screen.getByTestId(LoginRedirectTextTestId)).toHaveTextContent(
      "Already have an account?"
    );
  });

  it("Should be able to render the Link component correctly", () => {
    expect(screen.getByTestId(LoginRedirectLinkTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Link with the correctly styles", () => {
    expect(screen.getByTestId(LoginRedirectLinkTestId)).toHaveStyle({
      ...globals.text,
      textDecorationLine: "underline",
      fontSize: 20,
      lineHeight: 28,
    });
  });

  it("Should be able to render the Link with the correctly text", () => {
    expect(screen.getByTestId(LoginRedirectLinkTestId)).toHaveTextContent(
      "Sign In"
    );
  });

  it("Should be able to click the Link", async () => {
    act(() => {
      fireEvent.press(screen.getByTestId(LoginRedirectLinkTestId));
    });

    await waitFor(() => {
      expect(screen.getByTestId(LoginScreenTestId)).toBeOnTheScreen();
    });
  });
});
