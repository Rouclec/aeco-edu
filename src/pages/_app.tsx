import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${clash.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
