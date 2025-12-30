import IconDetailClient from '@/components/IconDetailClient';
import { getIconByName } from '@/lib/icon-loader';
import { notFound } from 'next/navigation';

export default async function IconDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const icon = getIconByName(name);

  if (!icon) {
    notFound();
  }

  return <IconDetailClient icon={icon} />;
}

