"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"

export function SignInButtons() {
  return (
    <div className="flex flex-col space-y-4">
      <Button onClick={() => signIn("google", { callbackUrl: "/" })}>
        <Mail className="mr-2 h-4 w-4" /> Sign in with Google
      </Button>
      <Button onClick={() => signIn("github", { callbackUrl: "/" })}>
        <Github className="mr-2 h-4 w-4" /> Sign in with GitHub
      </Button>
    </div>
  )
}

