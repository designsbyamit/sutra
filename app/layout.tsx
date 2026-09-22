import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Sutra — Ancient ideas. Modern struggles.",description:"Seven questions we keep living with. One deeper journey into Indian thought."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}