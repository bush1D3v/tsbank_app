import { PROFILE } from "@/utils/routerPaths";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

export function ProfileIcon(): React.JSX.Element {
  return (
    <Link href={PROFILE} className="flex h-full mb-1">
      <Icon name="person-circle-outline" color={"white"} size={53} />
    </Link>
  );
}

