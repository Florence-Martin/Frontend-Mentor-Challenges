import { DM_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Providers from "./components/ThemeProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${firaCode.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen transition-colors`}
      >
        <Providers>
          <main className="max-w-2xl mx-auto ">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
