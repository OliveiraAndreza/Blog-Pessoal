import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Blog Pessoal",
  description: "Um blog simples feito com Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="font-bold text-lg">Meu Blog</h1>
            <nav className="space-x-4">
              <Link href="/" className="hover:underline">Início</Link>
              <Link href="/about" className="hover:underline">Sobre</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-6">{children}</main>

        <footer className="mt-12 border-t">
          <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} Blog Pessoal
          </div>
        </footer>
      </body>
    </html>
  );
}
