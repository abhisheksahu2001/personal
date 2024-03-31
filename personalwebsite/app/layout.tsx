import type { Metadata } from "next";
import "./globals.css";
import classNames from "classnames";
import { AppFont } from "./Font";
import Head from "next/head";
export const metadata: Metadata = {
  title: "Abhishek Sahu",
  description: "Personal Website for Abhishek Sahu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={classNames(`${AppFont.Inter.variable} ${AppFont.Koulen.variable}  `)} >
      <Head>
        <title>Abhishek Sahu</title>
    	  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-black">{children}</body>
    </html >
  );
}
