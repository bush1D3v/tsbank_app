import { globals } from "@/styles";
import { Link } from "expo-router";
import { View } from "react-native";

interface PolicyAndTermsItems {
  key: string;
  href: `${string}:${string}`;
}

export function PolicyAndTerms(): React.JSX.Element {
  const data: PolicyAndTermsItems[] = [
    {
      key: "Policy",
      href: "https://drive.google.com/file/d/1Mjdv1KKwJpRGx7gDOQ_X80mUAUpsSy7j/view?usp=sharing"
    },
    {
      key: "Terms",
      href: "https://drive.google.com/file/d/1YPhg5eVoAGnskfyPtwkGv9ch0qC7ZVyQ/view?usp=sharing"
    }
  ];

  return (
    <View testID="PolicyAndTerms" className="flex flex-row items-center gap-4">
      {data.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          style={globals.text}
          className="underline text-xl"
          rel="noreferrer noopener"
          testID="PolicyAndTermsItem"
        >{item.key}</Link>
      ))}
    </View>
  );
}
