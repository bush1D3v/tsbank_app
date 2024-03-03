import {
  screen,
  fireEvent,
  waitFor,
  act
} from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";
import { globals } from "@/styles";
import { LOGIN, REGISTER } from "@/utils/routerPaths";
import Login from "@/app";
import Register from "@/app/register";

const RegisterScreenTestId: string = "RegisterScreen";
const RegisterRedirectTestId: string = "RegisterRedirect";
const RegisterRedirectTextTestId: string = "RegisterRedirectText";
const RegisterRedirectLinkTestId: string = "RegisterRedirectLink";

describe("RegisterRedirect Component Tests", () => {
  beforeEach(() => {
    renderRouter(
      {
        index: () => <Login />,
        [ REGISTER ]: () => <Register />,
      },
      {
        initialUrl: LOGIN,
      }
    );
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(RegisterRedirectTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(RegisterRedirectTestId)).toHaveStyle({
      display: "flex",
      flexDirection: "row",
    });
  });

  it("Should be able to render the Text component correctly", () => {
    expect(screen.getByTestId(RegisterRedirectTextTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Text with the correctly styles", () => {
    expect(screen.getByTestId(RegisterRedirectTextTestId)).toHaveStyle({
      ...globals.text,
      fontSize: 20,
      lineHeight: 28,
    });
  });

  it("Should be able to render the Text with the correctly text", () => {
    expect(screen.getByTestId(RegisterRedirectTextTestId)).toHaveTextContent(
      "Don't have an account?"
    );
  });

  it("Should be able to render the Link component correctly", () => {
    expect(screen.getByTestId(RegisterRedirectLinkTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Link with the correctly props", () => {
    expect(screen.getByTestId(RegisterRedirectLinkTestId)).toHaveProp(
      "href",
      REGISTER
    );
  });

  it("Should be able to render the Link with the correctly styles", () => {
    expect(screen.getByTestId(RegisterRedirectLinkTestId)).toHaveStyle({
      ...globals.text,
      textDecorationLine: "underline",
      fontSize: 20,
      lineHeight: 28,
    });
  });

  it("Should be able to render the Link with the correctly text", () => {
    expect(screen.getByTestId(RegisterRedirectLinkTestId)).toHaveTextContent(
      "Sign Up"
    );
  });

  it("Should be able to click the Link", async () => {
    act(() => {
      fireEvent.press(screen.getByTestId(RegisterRedirectLinkTestId));
    });

    await waitFor(() => {
      expect(screen.getByTestId(RegisterScreenTestId)).toBeOnTheScreen();
    });
  });
});
