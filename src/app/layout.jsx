import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Passini Equipamentos",
  description: "Passini Equipamentos oferece soluções inovadoras e seguras para movimentação de materiais pesados em canteiros de obras. Desde 1970, somos líderes no mercado de construção civil, fornecendo e locando gruas de alta qualidade, como a Grua SL e a Grua Ascensional, que garantem eficiência, durabilidade e precisão. Nossa tecnologia avançada e estrutura ergonômica transformam seu canteiro em um ambiente moderno e produtivo. Atendemos com excelência e disponibilizamos infraestrutura de ponta. Potencialize suas construções com Passini Equipamentos. Contate-nos para orçamento e seja líder em inovação na construção civil!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}
      <Toaster/>
      </body>
    </html>
  );
}
