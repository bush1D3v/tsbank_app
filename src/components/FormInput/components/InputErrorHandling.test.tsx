import { screen, render } from "@testing-library/react-native";
import { InputErrorHandling } from ".";
import { globals } from "@/styles";

const InputErrorHandlingTestId: string = "InputErrorHandling";

const errorMassage: string = "This field is required";

describe("InputErrorHandling Component Tests", () => {
  beforeEach(() => {
    render(
      <InputErrorHandling
        formState={{
          defaultValues: {
            userData: {
              email: "aa",
              password: "",
            },
          },
          errors: {
            userData: {
              email: {
                type: "required",
                message: errorMassage
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
        }}
        inputDatas="email"
      />
    );
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(InputErrorHandlingTestId)).toBeOnTheScreen();
  });

  it("Should be able to render the component with the correctly text", () => {
    expect(screen.getByTestId(InputErrorHandlingTestId)).toHaveTextContent(errorMassage);
  });

  it("Should be able to render the component with the correct styles", () => {
    expect(screen.getByTestId(InputErrorHandlingTestId)).toHaveStyle({
      ...globals.error
    });
  });
});
