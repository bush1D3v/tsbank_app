import {
  act,
  fireEvent,
  screen,
  waitFor
} from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";
import { WITHDRAW, HOME } from "@/utils/routerPaths";
import Home from "@/app/home";
import Withdraw from "@/app/withdraw";

const WithdrawScreenTestId: string = "WithdrawScreen";

const HooksListTestId: string = "HooksList";

describe("HooksList Component Tests", () => {
  beforeEach(() => {
    renderRouter(
      {
        [ HOME ]: () => <Home />,
        [ WITHDRAW ]: () => <Withdraw />,
      },
      {
        initialUrl: HOME
      }
    );
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(HooksListTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Links component correctly", () => {
    expect(screen.getByText("WITHDRAW")).toBeOnTheScreen();
    expect(screen.getByText("DEPOSIT")).toBeOnTheScreen();
    expect(screen.getByText("CARD")).toBeOnTheScreen();
    expect(screen.getByText("PIX")).toBeOnTheScreen();
  });

  it("Should be able to render the Links with the correctly props", () => {
    expect(screen.getByText("WITHDRAW")).toHaveProp("href", WITHDRAW);
  });

  it("Should be able to render the links with the correctly styles", () => {
    expect(screen.getByText("WITHDRAW")).toHaveStyle({
      backgroundColor: "#215da8",
      color: "#ffffff",
      fontSize: 16,
      lineHeight: 24,
    });
  });

  it("Should be able to click the Link", async () => {
    act(() => {
      fireEvent.press(screen.getByText("WITHDRAW"));
    });

    await waitFor(() => {
      expect(screen.getByTestId(WithdrawScreenTestId)).toBeOnTheScreen();
    });
  });
});
