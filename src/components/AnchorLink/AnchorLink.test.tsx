import {
  screen,
  render,
  fireEvent,
  act,
  waitFor
} from "@testing-library/react-native";
import { AnchorLink } from ".";
import { HOME, LOGIN } from "@/utils/routerPaths";
import { globals } from "@/styles";
import { renderRouter } from "expo-router/testing-library";
import Login from "@/app";
import Home from "@/app/home";

const AnchorLinkTestId: string = "AnchorLink";

const AnchorLinkText = "test";

describe("AnchorLink Component Tests", () => {
  beforeEach(() => {
    render(
      <AnchorLink
        text={AnchorLinkText}
        buttonBg="bg-red-500"
        href={HOME}
      />
    );
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(AnchorLinkTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(AnchorLinkTestId)).toHaveStyle({
      ...globals.text,
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Inter_700Bold",
      fontWeight: "700",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ef4444",
    });
  });

  it("Should be able to render the component with the correctly text", () => {
    expect(screen.getByTestId(AnchorLinkTestId)).toHaveTextContent(AnchorLinkText);
  });

  it("Should be able to render the component with the correctly href", () => {
    expect(screen.getByTestId(AnchorLinkTestId)).toHaveProp("href", HOME);
  });

  it("Should be able to click the component", async () => {
    renderRouter(
      {
        index: () => <Login />,
        [ HOME ]: () => <Home />,
      },
      {
        initialUrl: LOGIN
      }
    );

    render(
      <AnchorLink
        text={AnchorLinkText}
        buttonBg="bg-red-500"
        href={HOME}
      />
    );

    act(() => {
      fireEvent.press(screen.getByTestId(AnchorLinkTestId));
    });

    await waitFor(() => {
      expect(screen.getByTestId(AnchorLinkTestId)).toHaveProp("href", HOME);
    });
  });
});
