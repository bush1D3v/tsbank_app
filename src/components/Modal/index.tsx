import { globals } from "@/styles";
import {
  View,
  Text,
  Button
} from "react-native";

interface ModalProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  description: string;
  title: string;
  btnMessage: string;
}

export function Modal({
  isOpen,
  setOpen,
  description,
  title,
  btnMessage
}: ModalProps): React.JSX.Element {
  if (isOpen) {
    return (
      <View className="absolute flex top-0 bottom-0 left-0 right-0
      bg-[#00000090] justify-center z-10" testID="Modal">
        <View className="bg-blueBase m-2 p-10 rounded-lg" testID="ModalContent">
          <Text style={globals.text} className="text-4xl mb-2 font-bold" testID="ModalTitle">
            {title}
          </Text>
          <Text style={globals.text} className="mb-3 text-2xl" testID="ModalDescription">
            {description}
          </Text>
          <Button
            title={btnMessage}
            onPress={() => { setOpen(!isOpen); }}
            color={globals.inputFormButton.color}
            testID="ModalButton"
          />
        </View>
      </View>
    );
  } else {
    return <></>;
  }
}
