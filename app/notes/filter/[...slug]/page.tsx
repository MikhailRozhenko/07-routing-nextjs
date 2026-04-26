import NotesClient from './Notes.client';

type Props = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function NotesFilterPage({ params }: Props) {
  const { slug } = await params;

  const selectedTag = slug?.[0];

  const tag = selectedTag === 'all' ? undefined : selectedTag;

  return <NotesClient tag={tag} />;
}
