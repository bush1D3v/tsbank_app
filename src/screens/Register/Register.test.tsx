import {
  render,
  screen,
  fireEvent,
  waitFor,
  act
} from "@testing-library/react-native";
import { globals } from "@/styles";
import Register from "@/app/register";

const name: string = "Testing John Doe";
const email: string = "victor.jose.lopes.navarro@gmail.com";
const cpf: string = "12345678901";
const phone: string = "21123456789";
const password: string = "12345678";

const ModalTestId: string = "Modal";
const LoginRedirectTestId: string = "LoginRedirect";

const RegisterScreenTestId: string = "RegisterScreen";
const RegisterScreenWelcomeTextTestId: string = "RegisterScreenWelcomeText";
const RegisterScreenSignUpTextTestId: string = "RegisterScreenSignUpText";
const RegisterScreenNameInputTestId: string = "RegisterScreenNameInput";
const RegisterScreenEmailInputTestId: string = "RegisterScreenEmailInput";
const RegisterScreenCpfInputTestId: string = "RegisterScreenCpfInput";
const RegisterScreenPhoneInputTestId: string = "RegisterScreenPhoneInput";
const RegisterScreenPasswordInputTestId: string = "RegisterScreenPasswordInput";
const RegisterScreenSubmitButtonTestId: string = "RegisterScreenSubmitButton";

describe("RegisterScreen Component Tests", () => {
  beforeEach(() => {
    render(<Register />);
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(RegisterScreenTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(RegisterScreenTestId)).toHaveStyle({
      ...globals.container,
      justifyContent: "space-between",
      paddingTop: 80,
      paddingBottom: 80,
    });
  });

  it("Should be able to render the WelcomeText component correctly", () => {
    expect(screen.getByTestId(RegisterScreenWelcomeTextTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the WelcomeText with the correctly styles", () => {
    expect(screen.getByTestId(RegisterScreenWelcomeTextTestId)).toHaveStyle({
      ...globals.text,
      fontFamily: "Inter_700Bold",
      fontWeight: "700",
      fontSize: 48,
      lineHeight: 48,
    });
  });

  it("Should be able to render the SignUpText component correctly", () => {
    expect(screen.getByTestId(RegisterScreenSignUpTextTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the SignUpText with the correctly styles", () => {
    expect(screen.getByTestId(RegisterScreenSignUpTextTestId)).toHaveStyle({
      ...globals.text,
      fontSize: 30,
      lineHeight: 36,
      marginBottom: 8,
    });
  });

  it("Should be able to render the NameInput component correctly", () => {
    expect(screen.getByTestId(RegisterScreenNameInputTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the NameInput with the correctly props", () => {
    expect(screen.getByTestId(RegisterScreenNameInputTestId)).toHaveProp(
      "placeholder", "Name"
    );

    expect(screen.getByTestId(RegisterScreenNameInputTestId)).toHaveProp(
      "autoComplete", "name"
    );

    expect(screen.getByTestId(RegisterScreenNameInputTestId)).toHaveProp(
      "maxLength", 75
    );
  });

  it("Should be able to render the EmailInput component correctly", () => {
    expect(screen.getByTestId(RegisterScreenEmailInputTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the EmailInput with the correctly props", () => {
    expect(screen.getByTestId(RegisterScreenEmailInputTestId)).toHaveProp(
      "placeholder", "Email"
    );

    expect(screen.getByTestId(RegisterScreenEmailInputTestId)).toHaveProp(
      "autoComplete", "email"
    );

    expect(screen.getByTestId(RegisterScreenEmailInputTestId)).toHaveProp(
      "maxLength", 75
    );

    expect(screen.getByTestId(RegisterScreenEmailInputTestId)).toHaveProp(
      "keyboardType", "email-address"
    );
  });

  it("Should be able to render the CpfInput component correctly", () => {
    expect(screen.getByTestId(RegisterScreenCpfInputTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the CpfInput with the correctly props", () => {
    expect(screen.getByTestId(RegisterScreenCpfInputTestId)).toHaveProp(
      "placeholder", "Cpf"
    );

    expect(screen.getByTestId(RegisterScreenCpfInputTestId)).toHaveProp(
      "keyboardType", "numeric"
    );

    expect(screen.getByTestId(RegisterScreenCpfInputTestId)).toHaveProp(
      "maxLength", 11
    );

    expect(screen.getByTestId(RegisterScreenCpfInputTestId)).toHaveProp(
      "autoComplete", "off"
    );
  });

  it("Should be able to render the PhoneInput component correctly", () => {
    expect(screen.getByTestId(RegisterScreenPhoneInputTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the PhoneInput with the correctly props", () => {
    expect(screen.getByTestId(RegisterScreenPhoneInputTestId)).toHaveProp(
      "placeholder", "Phone"
    );

    expect(screen.getByTestId(RegisterScreenPhoneInputTestId)).toHaveProp(
      "keyboardType", "numeric"
    );

    expect(screen.getByTestId(RegisterScreenPhoneInputTestId)).toHaveProp(
      "autoComplete", "tel"
    );

    expect(screen.getByTestId(RegisterScreenPhoneInputTestId)).toHaveProp(
      "maxLength", 11
    );
  });

  it("Should be able to render the PasswordInput component correctly", () => {
    expect(screen.getByTestId(RegisterScreenPasswordInputTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the PasswordInput with the correctly props", () => {
    expect(screen.getByTestId(RegisterScreenPasswordInputTestId)).toHaveProp(
      "placeholder", "Password"
    );

    expect(screen.getByTestId(RegisterScreenPasswordInputTestId)).toHaveProp(
      "secureTextEntry", true
    );

    expect(screen.getByTestId(RegisterScreenPasswordInputTestId)).toHaveProp(
      "autoComplete", "password"
    );

    expect(screen.getByTestId(RegisterScreenPasswordInputTestId)).toHaveProp(
      "maxLength", 16
    );
  });

  it("Should be able to render the SubmitButton component correctly", () => {
    expect(screen.getByTestId(RegisterScreenSubmitButtonTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the SubmitButton with the correctly text", () => {
    expect(screen.getByTestId(RegisterScreenSubmitButtonTestId)).toHaveTextContent(
      "Create Account"
    );
  });

  it("Should be able to click the SubmitButton", async () => {
    act(() => {
      fireEvent.press(screen.getByTestId(RegisterScreenSubmitButtonTestId));
    });

    await waitFor(() => {
      expect(screen.getByTestId(RegisterScreenTestId)).toHaveTextContent(
        "Please enter your complete name"
      );

      expect(screen.getByTestId(RegisterScreenTestId)).toHaveTextContent(
        "This is not a valid email"
      );

      expect(screen.getByTestId(RegisterScreenTestId)).toHaveTextContent(
        "Password must have at least 8 characters"
      );

      expect(screen.getByTestId(RegisterScreenTestId)).toHaveTextContent(
        "Invalid cpf"
      );

      expect(screen.getByTestId(RegisterScreenTestId)).toHaveTextContent(
        "Invalid phone"
      );
    });
  });

  it("Should be able to render the LoginRedirect component correctly", () => {
    expect(screen.getByTestId(LoginRedirectTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the Modal component correctly", async () => {
    act(() => {
      fireEvent.changeText(screen.getByTestId(RegisterScreenNameInputTestId), name);

      fireEvent.changeText(screen.getByTestId(RegisterScreenEmailInputTestId), email);

      fireEvent.changeText(screen.getByTestId(RegisterScreenCpfInputTestId), cpf);

      fireEvent.changeText(screen.getByTestId(RegisterScreenPhoneInputTestId), phone);

      fireEvent.changeText(screen.getByTestId(RegisterScreenPasswordInputTestId), password);

      fireEvent.press(screen.getByTestId(RegisterScreenSubmitButtonTestId));
    });

    await waitFor(() => {
      expect(screen.getByTestId(ModalTestId)).toBeOnTheScreen();
      expect(screen.getByTestId(ModalTestId)).toHaveTextContent(
        "Error 409: This email already used per other user."
      );
    });
  });
});
