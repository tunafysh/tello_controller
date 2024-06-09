import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/modetoggle";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className+" overflow-hidden"}>
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      >
        <div id="modetoggle" className="absolute animate-fade top-4 right-4">
          <ModeToggle />
        </div>
        <p className="absolute animate-fade bottom-4 left-4 text-zinc-500">
              Made with ♥️ by Hanan
            </p>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
