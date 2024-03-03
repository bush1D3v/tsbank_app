import AsyncStorage from "@react-native-async-storage/async-storage";
import { screen } from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";
import { HOME } from "@/utils/routerPaths";
import { globals } from "@/styles";
import Home from "@/app/home";

const UserReceptionTestId: string = "UserReception";
const UserReceptionHelloTestId: string = "UserReceptionHello";
const UserReceptionNameTestId: string = "UserReceptionName";
const UserReceptionBalanceDivisionTestId: string = "UserReceptionBalanceDivision";
const UserReceptionBalanceIconTestId: string = "UserReceptionBalanceIcon";
const UserReceptionBalanceValueTestId: string = "UserReceptionBalanceValue";

const ContextName: string = "John Doe";
const ContextBalance: number = 1000;

describe("UserReception Component Tests", () => {
  beforeEach(() => {
    renderRouter(
      {
        [ HOME ]: () => <Home />,
      },
      {
        initialUrl: HOME
      }
    );
  });

  beforeAll(async () => {
    await AsyncStorage.setItem("userData", JSON.stringify({
      name: ContextName,
      balance: ContextBalance
    }));
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(UserReceptionTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(UserReceptionTestId)).toHaveStyle({
      alignItems: "center",
      display: "flex",
    });
  });

  it("Should be able to render the Hello component correctly", () => {
    expect(screen.getByTestId(UserReceptionHelloTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Hello with the correctly styles", () => {
    expect(screen.getByTestId(UserReceptionHelloTestId)).toHaveStyle({
      ...globals.text,
      fontSize: 30,
      lineHeight: 36,
      fontWeight: "700",
      fontFamily: "Inter_700Bold",
      marginBottom: -8,
    });
  });

  it("Should be able to render the Hello with the correctly text", () => {
    expect(screen.getByTestId(UserReceptionHelloTestId)).toHaveTextContent("Hello");
  });

  it("Should be able to render the Name component correctly", () => {
    expect(screen.getByTestId(UserReceptionNameTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Name with the correctly styles", () => {
    expect(screen.getByTestId(UserReceptionNameTestId)).toHaveStyle({
      ...globals.text,
      fontSize: 24,
      lineHeight: 32,
      fontWeight: "700",
      fontFamily: "Inter_700Bold",
    });
  });

  it("Should be able to render the Name with the correctly text", () => {
    expect(screen.getByTestId(UserReceptionNameTestId)).toHaveTextContent(
      `${ContextName} 👋`
    );
  });

  it("Should be able to render the BalanceDivision component correctly", () => {
    expect(screen.getByTestId(UserReceptionBalanceDivisionTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the BalanceDivision with the correctly styles", () => {
    expect(screen.getByTestId(UserReceptionBalanceDivisionTestId)).toHaveStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    });
  });

  it("Should be able to render the BalanceIcon component correctly", () => {
    expect(screen.getByTestId(UserReceptionBalanceIconTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the BalanceIcon with the correctly styles", () => {
    expect(screen.getByTestId(UserReceptionBalanceIconTestId)).toHaveStyle({
      color: "white",
    });
  });

  it("Should be able to render the BalanceValue component correctly", () => {
    expect(screen.getByTestId(UserReceptionBalanceValueTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the BalanceValue with the correctly styles", () => {
    expect(screen.getByTestId(UserReceptionBalanceValueTestId)).toHaveStyle({
      ...globals.text,
      fontSize: 24,
      lineHeight: 32,
      fontWeight: "700",
      fontFamily: "Inter_700Bold",
      marginLeft: 12,
    });
  });
});
