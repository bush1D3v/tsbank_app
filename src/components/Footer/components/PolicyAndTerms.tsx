import { globals } from "@/styles";
import { Link } from "expo-router";
import { FlatList } from "react-native";

interface PolicyAndTermsItems {
  key: string;
  href: `${string}:${string}`;
}

export function PolicyAndTerms(): React.JSX.Element {
  const data: PolicyAndTermsItems[] = [
    {
      key: "Privacy Policy",
      href: "https://drive.google.com/file/d/1Mjdv1KKwJpRGx7gDOQ_X80mUAUpsSy7j/view?usp=sharing"
    },
    {
      key: "Terms of use",
      href: "https://drive.google.com/file/d/1YPhg5eVoAGnskfyPtwkGv9ch0qC7ZVyQ/view?usp=sharing"
    }
  ];

  return (
    <FlatList className="flex"
      data={data}
      renderItem={({ item }) =>
        <Link
          style={globals.text}
          href={item.href}
          className="underline"
          rel="noreferrer noopener">
          {item.key}
        </Link>
      } />
  );
}
