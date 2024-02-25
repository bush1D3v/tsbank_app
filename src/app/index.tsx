/*
  / Para executar a documentação storybook, descomente a linha 6,
  / e logo depois, comente todo o código que havia aqui existente.
*/

//* export { default } from "!/.storybook";

import { LoginScreen } from "@/screens";

export default function Login(): React.JSX.Element {
  return (
    <LoginScreen />
  );
}
