import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import AOSProvider from "@/components/AOSProvider";

export const metadata: Metadata = {
  title: "안녕플란트 치과 - Hello Plant Dental",
  description: "안녕플란트 치과 홈페이지 - 신뢰할 수 있는 치과 의료 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <AOSProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
