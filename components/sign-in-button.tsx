"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function SignInButton() {
  return (
    <Button onClick={() => signIn("google", { callbackUrl: "/" })} className="w-full">
      <Mail className="mr-2 h-4 w-4" /> Sign in with Google
    </Button>
  )
}

