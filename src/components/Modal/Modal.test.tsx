import { screen, render } from "@testing-library/react-native";
import { Modal } from ".";

const ModalTestId: string = "Modal";
const ModalContentTestId: string = "ModalContent";
const ModalTitleTestId: string = "ModalTitle";
const ModalDescriptionTestId: string = "ModalDescription";
const ModalButtonTestId: string = "ModalButton";

const openFunc = jest.fn();

describe("Modal Component Tests", () => {
  beforeEach(() => {
    render(
      <Modal
        isOpen={true}
        setOpen={openFunc()}
        description="Error 401: Invalid email and/or password."
        title="Something went wrong!"
        btnMessage="Try again"
      />
    );
  });

  it("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ModalTestId)).toBeOnTheScreen();
  });
});
