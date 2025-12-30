import IconsPageClient from '@/components/IconsPageClient';
import { getAllIcons } from '@/lib/icon-loader';

export default async function IconsPage() {
  const icons = getAllIcons();
  
  return <IconsPageClient initialIcons={icons} />;
}

