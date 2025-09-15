import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="bg-white border rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold">
        <Link href={`/posts/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-600 mt-1">{post.excerpt}</p>
      <p className="text-sm text-gray-500 mt-2">
        {post.author} • {new Date(post.date).toLocaleDateString("pt-BR")}
      </p>
    </article>
  );
}
