import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Inter, Nunito, Roboto } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // Add the weights you need

  variable: "--font-roboto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${nunito.variable} ${roboto.variable} font-sans`}>
      <Layout>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </Layout>
    </main>
  );
}
