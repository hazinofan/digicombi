// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/ThemeContext";

// 1) Import Inter from next/font
import { Inter } from "next/font/google";

// 2) Configure it (subset + weights you need + display strategy)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  display: "swap",
  variable: "--font-inter",    
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
