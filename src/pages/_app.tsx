import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const clash = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Semibold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/ClashDisplay-Bold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-clash",
});

export const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/Inter-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Inter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Inter-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Inter-Bold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-inter",
});

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Head>
        <title>AECO EDUCATION</title>
        <meta name="description" content="Travel abroad to work, study..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/assets/brand_logo.png?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <main className={`${clash.variable} ${inter.variable}`}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </main>
    </QueryClientProvider>
  );
}
