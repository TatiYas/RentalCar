import type { Metadata } from "next";
import "./globals.css";
//import Header from "....;
//import TanStackProvider from "......TanStackProvider";
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
variable: '--font-manrope',
});


export const metadata: Metadata = {
  title: "Car Rent App | Your Personal Car in your app",
  description: "find a car of your dream by filter",
  openGraph: {
    title: "Car Rent App | Your Personal Car in your app",
    description: "find a car of your dream by filter",
   // url: "rentalcar.vercel.app/",// пізніше додати
  }
};

/*export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <TanStackProvider>
            <Header />
            {children}
        </TanStackProvider>
      </body>
    </html>
  );
}*/