import localFont from "next/font/local";
import "./globals.css";

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
  title: {
    default: "Passini Equipamentos - Gruas em São Paulo",
    template: "%s | Passini Equipamentos"
  },
  description: "Informações sobre venda e aluguel de gruas em São Paulo. Encontre os melhores equipamentos de elevação para sua obra ou projeto.",
  keywords: ["grua", "venda de grua", "aluguel de grua", "São Paulo", "equipamentos de elevação"],
  openGraph: {
    title: "Passini Equipamentos - Gruas em São Paulo",
    description: "Venda e aluguel de gruas e equipamentos de elevação em São Paulo",
    url: "https://www.passiniequipamentos.com.br",
    siteName: "Passini Equipamentos",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: "Passini Equipamentos - Gruas em São Paulo",
    card: "summary_large_image",
  },
  verification: {
    google: "seu-código-de-verificação-do-google",
    yandex: "seu-código-de-verificação-do-yandex",
    yahoo: "seu-código-de-verificação-do-yahoo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
