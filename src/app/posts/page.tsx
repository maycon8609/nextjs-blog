import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function PostsList() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <p className="text-sm">{date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
