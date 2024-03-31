import { Inter } from "next/font/google"
import { Koulen } from "next/font/google"
const InterFont = Inter({ subsets: ["latin"], weight: ['300', '500', '700', '900'], variable: "--inter" });
const KoulenFont = Koulen({ subsets: ["latin"], weight: ['400'], variable: "--koulen" })

export const AppFont = { Inter: InterFont, Koulen: KoulenFont, };