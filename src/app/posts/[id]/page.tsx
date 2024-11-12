import { getPostData } from '../../../lib/posts';
import { notFound } from 'next/navigation';

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  if (!postData) {
    notFound();
  }

  return (
    <article>
      <h1 className="text-2xl font-bold">{postData.title}</h1>
      <p className="text-sm">{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
