import Link from "next/link";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="pt-br">
      <body>
        <header className="header"><h1>Painel Ademe</h1></header>
        <menu className="menu">
          <Link href={"/categoria"}>Categoria</Link>
          <Link href={"/medida"}>Unidade Medida</Link>
          <Link href={"/prod"}>Produtos</Link>
          <Link href={"./"}>Home</Link>
        </menu>
        <main className="main">{children}</main>
        <footer className="footer"></footer>
      </body>
    </html>
  );
}
