import { GetStaticProps } from 'next';
import { getSortedPostsData, PostData } from '../lib/posts';
import Link from 'next/link';

interface HomeProps {
  allPostsData: PostData[];
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <span className="text-blue-500">{title}</span>
            </Link>
            <p className="text-sm">{date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Função getStaticProps com tipagem
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
