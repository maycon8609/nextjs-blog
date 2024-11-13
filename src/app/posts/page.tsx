import Link from 'next/link';

import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { getSortedPostsData } from '@/lib/posts';

export default function PostsList() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allPostsData.map(({ id, title, date }) => (
          <Card key={id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-100">
                {title}
              </CardTitle>
              <p className="text-sm text-gray-300">{new Date(date).toLocaleDateString()}</p>
            </CardHeader>
            
            <CardFooter>
              <Link href={`/posts/${id}`} passHref>
                <Button variant="outline" className="w-full">
                  Leia Mais
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
