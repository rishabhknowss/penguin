import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "Penguin | Instant github bounties on solana",
  description: "The premium onchain bounty platform for open source contributions",
  icons: {
    icon: [
      { url: "/images/penguin-logo.png" },
      { url: "/images/penguin-logo.png", sizes: "56x56", type: "image/png" },
      { url: "/images/penguin-logo.png", sizes: "56x56", type: "image/png" }
    ],
    apple: { url: "/images/penguin-logo.png", type: "image/png" },
    shortcut: { url: "/images/penguin-logo.png" }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontPoppins.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}