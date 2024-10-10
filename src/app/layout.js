import localFont from "next/font/local";
import "./globals.css";
import Header from './components/Header/Header';
import { BlogProvider } from './contexts/BlogContext';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Passini Equipamentos | Aluguel e Venda de Gruas em São Paulo",
  description: "Líder em aluguel e venda de gruas em São Paulo. A Passini Equipamentos oferece soluções completas para sua obra. Faça um orçamento agora!",
  keywords: "aluguel de gruas, venda de gruas, São Paulo, equipamentos de construção, Passini Equipamentos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <BlogProvider>
          {children}
        </BlogProvider>
      </body>
    </html>
  );
}
