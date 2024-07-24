import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./theme-provider";
import "@/styles/globals.css"
import { fontSans } from "@/lib/fonts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: {
    default: "LucAround Restaurant",
    template: `LucAround Restaurant`,
  },
  description: "Simple LucAround Restaurant app - learning purpose",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(fontSans.className, "min-h-screen antialiased w-full")}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="w-full min-h-screen flex flex-col justify-between items-center">
          <Navbar />
          {children}
          <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}