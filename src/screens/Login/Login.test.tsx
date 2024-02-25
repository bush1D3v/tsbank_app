import {
  render,
  screen,
  fireEvent,
  waitFor,
  act
} from "@testing-library/react-native";
import { LoginScreen } from ".";
import { globals } from "@/styles";

const email: string = "johnDoes@gmail.com";
const password: string = "12345678";

const ModalTestId: string = "Modal";
const RegisterRedirectTestId: string = "RegisterRedirect";

const LoginScreenTestId: string = "LoginScreen";
const LoginScreenWelcomeTextTestId: string = "LoginScreenWelcomeText";
const LoginScreenSignInTextTestId: string = "LoginScreenSignInText";
const LoginScreenEmailInputTestId: string = "LoginScreenEmailInput";
const LoginScreenPasswordInputTestId: string = "LoginScreenPasswordInput";
const LoginScreenSubmitButtonTestId: string = "LoginScreenSubmitButton";

describe("Login Screen Tests", () => {
  beforeEach(() => {
    render(<LoginScreen />);
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(LoginScreenTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(LoginScreenTestId)).toHaveStyle({
      ...globals.container,
      justifyContent: "space-between",
      paddingTop: 80,
      paddingBottom: 80,
      fontFamily: "Inter_700Bold",
      fontWeight: "700",
    });
  });

  it("Should be able to render the WelcomeText component correctly", () => {
    expect(screen.getByTestId(LoginScreenWelcomeTextTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the WelcomeText with the correctly styles", () => {
    expect(screen.getByTestId(LoginScreenWelcomeTextTestId)).toHaveStyle({
      ...globals.text,
      fontFamily: "Inter_700Bold",
      fontWeight: "700",
      fontSize: 48,
      lineHeight: 48,
      textAlign: "center",
    });
  });

  it("Should be able to render the SignInText component correctly", () => {
    expect(screen.getByTestId(LoginScreenSignInTextTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the SignInText with the correctly styles", () => {
    expect(screen.getByTestId(LoginScreenSignInTextTestId)).toHaveStyle({
      ...globals.text,
      fontSize: 30,
      lineHeight: 36,
      textAlign: "center",
      marginBottom: 8,
      fontFamily: "Inter_400Regular",
    });
  });

  it("Should be able to render the EmailInput component correctly", () => {
    expect(screen.getByTestId(LoginScreenEmailInputTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the EmailInput with the correctly props", () => {
    expect(screen.getByTestId(LoginScreenEmailInputTestId)).toHaveProp(
      "placeholder", "Email"
    );

    expect(screen.getByTestId(LoginScreenEmailInputTestId)).toHaveProp(
      "autoComplete", "email"
    );

    expect(screen.getByTestId(LoginScreenEmailInputTestId)).toHaveProp(
      "keyboardType", "email-address"
    );

    expect(screen.getByTestId(LoginScreenEmailInputTestId)).toHaveProp(
      "maxLength", 75
    );
  });

  it("Should be able to render the PasswordInput component correctly", () => {
    expect(screen.getByTestId(LoginScreenPasswordInputTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the PasswordInput with the correctly props", () => {
    expect(screen.getByTestId(LoginScreenPasswordInputTestId)).toHaveProp(
      "placeholder", "Password"
    );

    expect(screen.getByTestId(LoginScreenPasswordInputTestId)).toHaveProp(
      "secureTextEntry", true
    );

    expect(screen.getByTestId(LoginScreenPasswordInputTestId)).toHaveProp(
      "autoComplete", "current-password"
    );

    expect(screen.getByTestId(LoginScreenPasswordInputTestId)).toHaveProp(
      "maxLength", 16
    );
  });

  it("Should be able to render the SubmitButton component correctly", () => {
    expect(screen.getByTestId(LoginScreenSubmitButtonTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the SubmitButton with the correctly text", () => {
    expect(screen.getByTestId(LoginScreenSubmitButtonTestId)).toHaveTextContent(
      "Login"
    );
  });

  it("Should be able to click the SubmitButton", async () => {
    act(() => {
      fireEvent.press(screen.getByTestId(LoginScreenSubmitButtonTestId));
    });

    await waitFor(() => {
      expect(screen.getByTestId(LoginScreenTestId)).toHaveTextContent(
        "Invalid email address"
      );

      expect(screen.getByTestId(LoginScreenTestId)).toHaveTextContent(
        "Please enter a valid password"
      );
    });
  });

  it("Should be able to render the RegisterRedirect component correctly", () => {
    expect(screen.getByTestId(RegisterRedirectTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Modal component correctly", async () => {
    act(() => {
      fireEvent.changeText(screen.getByTestId(LoginScreenEmailInputTestId), email);

      fireEvent.changeText(screen.getByTestId(LoginScreenPasswordInputTestId), password);

      fireEvent.press(screen.getByTestId(LoginScreenSubmitButtonTestId));
    });

    await waitFor(() => {
      expect(screen.getByTestId(ModalTestId)).toBeOnTheScreen();
      expect(screen.getByTestId(ModalTestId)).toHaveTextContent(
        "Error 401: Invalid email and/or password."
      );
    });
  });
});
