"use client"

import Link from "next/link"
import { useState, Suspense } from "react"
import { Search, Menu, LogIn, LogOut } from "lucide-react"
import { useSession, signIn, signOut } from "next-auth/react"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { searchStock } from "@/app/actions/search"

function HeaderInner() {
  const [symbol, setSymbol] = useState("")

  return (
    <header className="bg-secondary/50 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover-lift">
            <span className="text-gradient">Earnings</span>
            <span className="text-foreground">Note</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/weekly-earnings" className="text-foreground hover:text-primary transition-colors">
              Weekly Earnings
            </Link>
          </nav>
          <form action={searchStock} className="hidden md:flex flex-1 mx-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              name="symbol"
              placeholder="Search stock symbol..."
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              className="pl-10 w-full max-w-md glassmorphism"
            />
          </form>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <AuthButton />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link href="/weekly-earnings" className="text-lg font-medium hover:text-primary transition-colors">
                    Weekly Earnings
                  </Link>
                  <AuthButtonMobile />
                  <form action={searchStock} className="flex flex-col space-y-2">
                    <Input
                      type="text"
                      name="symbol"
                      placeholder="Search stock symbol..."
                      value={symbol}
                      onChange={(e) => setSymbol(e.target.value)}
                    />
                    <Button type="submit" size="sm" className="w-full">
                      Search
                    </Button>
                  </form>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => signOut()}
        className="flex items-center gap-2"
      >
        <LogOut className="h-4 w-4" />
        Sign Out
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => signIn("google")}
        className="flex items-center gap-2"
    >
      <LogIn className="h-4 w-4" />
      Sign In
    </Button>
  )
}

function AuthButtonMobile() {
  const { data: session } = useSession()

  if (session) {
    return (
      <Button
        variant="ghost"
        className="w-full justify-start"
        onClick={() => signOut()}
      >
        <LogOut className="h-4 w-4 mr-2" />
        Sign Out
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      className="w-full justify-start"
      onClick={() => signIn("google")}
    >
      <LogIn className="h-4 w-4 mr-2" />
      Sign In
    </Button>
  )
}

export function Header() {
  return (
    <Suspense fallback={null}>
      <HeaderInner />
    </Suspense>
  )
}
