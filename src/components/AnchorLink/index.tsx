import { globals } from "@/styles";
import { Href, Link } from "expo-router";

type AnchorLinkProps = {
  text: string;
  buttonBg: `bg-${string}`;
  href: Href<string>;
}

export function AnchorLink({
  text,
  buttonBg,
  href
}: AnchorLinkProps): React.JSX.Element {
  const className =
    `px-5 py-1 ${buttonBg} border-white rounded-2xl border-2 font-bold
    text-center flex justify-center items-center m-2`;

  return (
    <Link
      style={globals.text}
      href={href}
      className={className}
    >
      {text}
    </Link>
  );
}
