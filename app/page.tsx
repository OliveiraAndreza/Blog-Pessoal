import PostCard from "./components/PostCard";

const posts = [
  {
    slug: "primeiro-post",
    title: "Meu primeiro post",
    excerpt: "Este é o começo do blog com Next.js!",
    author: "Andreza",
    date: "2025-09-10",
  },
  {
    slug: "explorando-nextjs",
    title: "Explorando o Next.js",
    excerpt: "Aprendendo a usar App Router e componentes...",
    author: "Andreza",
    date: "2025-09-12",
  },
];

export default function HomePage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Últimos Posts</h2>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
