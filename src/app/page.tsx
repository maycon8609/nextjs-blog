import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"; 

interface RepoData {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  owner: {
    login: string
    avatar_url: string
    html_url: string
  }
}

async function fetchRepos(): Promise<RepoData[]> {
  const response = await fetch("https://api.github.com/users/maycon8609/repos", {
    headers: {
      Accept: "application/vnd.github+json",
    },
    cache: "force-cache",
  });
  
  if (!response.ok) {
    throw new Error("Erro ao buscar os repositórios do GitHub");
  }
  
  return response.json();
}

function getTopRepos(repos: RepoData[]): RepoData[] {
  const reposWithDescription = repos.filter(repo => repo.description);
  const reposWithoutDescription = repos.filter(repo => !repo.description);
  
  return [...reposWithDescription, ...reposWithoutDescription].slice(0, 12);
}

export default async function Home() {
  const repos = await fetchRepos();
  const topRepos = getTopRepos(repos);

  return (
    <div className="container mx-auto px-4 pb-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold my-6">
          <Link href={topRepos[0].owner.html_url}>
            {topRepos[0].owner.login}
          </Link>
        </h1>

        <h1 className="text-3xl font-bold my-6">
          <Link href="/posts">
            Blog
          </Link>
        </h1>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Top GitHub Repositórios</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topRepos.map((repo) => (
          <Card key={repo.id} className="hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between min-h-44 max-h-80">
            <CardHeader>
              <CardTitle>
                <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold">
                  {repo.name}
                </Link>
              </CardTitle>
              <CardDescription>{repo.description || "Sem descrição"}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-500 flex justify-between items-center mt-2">
              <span>🌟 {repo.stargazers_count}</span>
              <span>📝 {repo.language || "Não especificada"}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
