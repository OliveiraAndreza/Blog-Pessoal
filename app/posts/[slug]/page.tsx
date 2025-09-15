import { notFound } from "next/navigation";
import LikeButton from "../../components/LikeButton";

const posts = {
  "primeiro-post": {
    title: "Meu primeiro post",
    content: "Conteúdo completo do primeiro post.",
    author: "Andreza",
    date: "2025-09-10",
  },
  "explorando-nextjs": {
    title: "Explorando o Next.js",
    content: "Este post fala sobre o Next.js App Router, Server Components e Client Components.",
    author: "Andreza",
    date: "2025-09-12",
  },
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return notFound();

  return (
    <article className="prose bg-white p-6 rounded-md shadow-sm">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-600">
        {post.author} • {new Date(post.date).toLocaleDateString("pt-BR")}
      </p>
      <div className="mt-4">
        <p>{post.content}</p>
      </div>
      <div className="mt-6">
        <LikeButton />
      </div>
    </article>
  );
}
