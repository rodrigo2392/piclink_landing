import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PinkLink - Photography SaaS Platform",
  description:
    "The ultimate platform for photographers to store, manage, and deliver high-quality multimedia content to clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storageKey="picklink-theme"
          disableTransitionOnChange={false}
        >
          {/* LanguageProvider wraps all children to provide language context */}
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
