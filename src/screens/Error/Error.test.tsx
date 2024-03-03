import {
  screen,
  fireEvent,
  waitFor,
  act
} from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";
import { globals } from "@/styles";
import { HOME } from "@/utils/routerPaths";
import Home from "@/app/home";
import { ErrorScreen } from ".";

const HomeScreenTestId: string = "HomeScreen";

const ErrorScreenTestId: string = "ErrorScreen";
const ErrorScreenTitleTestId: string = "ErrorScreenTitle";
const ErrorScreenTextTestId: string = "ErrorScreenText";
const ErrorScreenNumberTestId: string = "ErrorScreenNumber";
const ErrorScreenButtonTestId: string = "ErrorScreenButton";

describe("ErrorScreen Component Tests", () => {
  beforeEach(() => {
    renderRouter(
      {
        [ HOME ]: () => <Home />,
        [ "/error" ]: () => <ErrorScreen />
      },
      {
        initialUrl: "/error"
      }
    );
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ErrorScreenTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(ErrorScreenTestId)).toHaveStyle({
      ...globals.container,
      justifyContent: "space-around",
      paddingTop: 96,
      paddingBottom: 96,
      textAlign: "center",
    });
  });

  it("Should be able to render the Title component correctly", () => {
    expect(screen.getByTestId(ErrorScreenTitleTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Title with the correctly styles", () => {
    expect(screen.getByTestId(ErrorScreenTitleTestId)).toHaveStyle({
      ...globals.text,
      fontSize: 36,
      lineHeight: 40,
      fontFamily: "Inter_700Bold",
      fontWeight: "700",
    });
  });

  it("Should be able to render the Title with the correctly text", () => {
    expect(screen.getByTestId(ErrorScreenTitleTestId)).toHaveTextContent(
      "Oops! 😯"
    );
  });

  it("Should be able to render the Text component correctly", () => {
    expect(screen.getByTestId(ErrorScreenTextTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Text with the correctly styles", () => {
    expect(screen.getByTestId(ErrorScreenTextTestId)).toHaveStyle({
      ...globals.text,
      fontSize: 24,
      lineHeight: 32,
      paddingBottom: 16,
    });
  });

  it("Should be able to render the Text with the correctly text", () => {
    expect(screen.getByTestId(ErrorScreenTextTestId)).toHaveTextContent(
      "It seems like you got lost in the financial maze, but don't worry! Our experts are working to resolve this. 👨‍💻 🛠️ In the meantime, check out our amazing resources! 🚀 🌟"
    );
  });

  it("Should be able to render the Number component correctly", () => {
    expect(screen.getByTestId(ErrorScreenNumberTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Number with the correctly styles", () => {
    expect(screen.getByTestId(ErrorScreenNumberTestId)).toHaveStyle({
      ...globals.text,
      fontSize: 60,
      lineHeight: 60,
      fontFamily: "Inter_700Bold",
      fontWeight: "700",
    });
  });

  it("Should be able to render the Number with the correctly text", () => {
    expect(screen.getByTestId(ErrorScreenNumberTestId)).toHaveTextContent(
      "404"
    );
  });

  it("Should be able to render the Button component correctly", () => {
    expect(screen.getByTestId(ErrorScreenButtonTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Button with the correctly styles", () => {
    expect(screen.getByTestId(ErrorScreenButtonTestId)).toHaveStyle({
      paddingBottom: 12,
      paddingTop: 12,
      paddingLeft: 20,
      paddingRight: 20,
      color: "#ffffff",
      fontSize: 24,
      lineHeight: 32,
    });
  });

  it("Should be able to render the Button with the correctly text", () => {
    expect(screen.getByTestId(ErrorScreenButtonTestId)).toHaveTextContent(
      "Return to home screen"
    );
  });

  it("Should be able to click the Button", async () => {
    act(() => {
      fireEvent.press(screen.getByTestId(ErrorScreenButtonTestId));
    });

    await waitFor(() => {
      expect(screen.getByTestId(HomeScreenTestId)).toBeOnTheScreen();
    });
  });
});

