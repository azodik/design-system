import IconsPage from "@/components/icons/IconsPage";
import { getAllIcons } from "@/lib/icon-loader";

export default async function IconsPageRoute() {
  const icons = getAllIcons();

  return <IconsPage initialIcons={icons} />;
}
