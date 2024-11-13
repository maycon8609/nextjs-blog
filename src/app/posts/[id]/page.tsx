import { getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  if (!postData) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-100 mb-2">
          {postData.title}
        </h1>
        <p className="text-gray-200 text-sm">
          {new Date(postData.date).toLocaleDateString("pt-BR", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </header>

      <section
        className="max-w-none text-gray-200"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </main>
  );
}
