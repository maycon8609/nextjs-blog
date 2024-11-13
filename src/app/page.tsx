import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"; // Certifique-se de que estes componentes do shadcn/ui estão disponíveis

interface RepoData {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
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

export default async function Home() {
  const repos = await fetchRepos();

  console.log(repos.length)

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-6">Blog - v1</h1>
      
      <h2 className="text-2xl font-semibold mb-4">Meus Repositórios no GitHub</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <Card key={repo.id} className="hover:shadow-lg transition-shadow duration-200">
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
