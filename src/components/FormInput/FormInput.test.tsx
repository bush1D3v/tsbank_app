import { screen, render, waitFor, act, fireEvent } from "@testing-library/react-native";
import { FormInput } from ".";

const InputErrorHandling: string = "InputErrorHandling";

const FormInputTestId: string = "FormInput";

const placeholder: string = "Email";
const inputLabel = "email";

describe("FormInput Component Tests", () => {
  beforeEach(() => {
    render(
      <FormInput
        placeholder={placeholder}
        inputLabel={inputLabel}
        formMethods={{
          setFocus: jest.fn(),
          getFieldState: jest.fn(),
          handleSubmit: jest.fn(),
          setValue: jest.fn(),
          trigger: jest.fn(),
          register: jest.fn(),
          unregister: jest.fn(),
          clearErrors: jest.fn(),
          watch: jest.fn(),
          getValues: jest.fn(),
          reset: jest.fn(),
          resetField: jest.fn(),
          setError: jest.fn(),
          formState: {
            defaultValues: {
              userData: {
                email: "",
                password: "",
              },
            },
            errors: {
              userData: {
                email: {
                  type: "required",
                  message: "This field is required"
                }
              }
            },
            isDirty: false,
            isLoading: false,
            isSubmitted: false,
            isSubmitSuccessful: false,
            isSubmitting: false,
            isValidating: false,
            isValid: false,
            disabled: false,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {}
          }
        }}
      />
    );
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(FormInputTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly styles", () => {
    expect(screen.getByTestId(FormInputTestId)).toHaveStyle({
      height: 40,
      width: "100%",
      backgroundColor: "#ffffff",
      paddingLeft: 16,
      marginBottom: 8,
      marginTop: 8,
      alignSelf: "center"
    });
  });

  it("Should be able to render the component with the correctly props", () => {
    expect(screen.getByTestId(FormInputTestId)).toHaveProp(
      "placeholder",
      placeholder
    );

    expect(screen.getByTestId(FormInputTestId)).toHaveProp(
      "aria-label",
      placeholder
    );

    expect(screen.getByTestId(FormInputTestId)).toHaveProp(
      "accessibilityLabel",
      placeholder
    );
  });

  it("Should be able to render the Error correctly", async () => {
    act(() => {
      fireEvent.changeText(screen.getByTestId(FormInputTestId), "email");
    });

    await waitFor(() => {
      expect(screen.getByTestId(InputErrorHandling)).toBeOnTheScreen();
    });
  });
});
