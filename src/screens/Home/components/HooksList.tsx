import { AnchorLink } from "@/components";
import { Href } from "expo-router";
import { View } from "react-native";
import {
  DEPOSIT,
  PIX,
  WITHDRAW,
  CARD
} from "@/utils/routerPaths";

interface HooksListProps {
  key: string;
  href: Href<string>;
}

export function HooksList(): React.JSX.Element {
  const data: HooksListProps[] = [
    {
      key: "WITHDRAW",
      href: WITHDRAW
    },
    {
      key: "DEPOSIT",
      href: DEPOSIT
    },
    {
      key: "CARD",
      href: CARD
    },
    {
      key: "PIX",
      href: PIX
    }
  ];

  return (
    <View testID="HooksList">
      {data.map((item, index) => (
        <AnchorLink
          key={index}
          text={item.key}
          buttonBg="bg-saturatedBlue"
          className="text-white text-base"
          testID="HooksListItem"
          href={item.href}
        />
      ))}
    </View>
  );
}
