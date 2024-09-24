import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TOUSHIEF ANSARI",
  description: "Portfolio of Toushief",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", poppins.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <Container>{children}</Container>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
