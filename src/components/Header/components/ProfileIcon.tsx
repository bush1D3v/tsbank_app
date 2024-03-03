import { PROFILE } from "@/utils/routerPaths";
import { Link } from "expo-router";
import Icon from "@expo/vector-icons/Ionicons";

export function ProfileIcon(): React.JSX.Element {
  return (
    <Link href={PROFILE} className="flex h-full mb-1" testID="ProfileIcon">
      <Icon name="person-circle-outline" color={"white"} size={53} testID="ProfileIconImage" />
    </Link>
  );
}

