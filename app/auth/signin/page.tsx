import { SignInButton } from "@/components/sign-in-button"

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <div className="p-8 bg-card rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <SignInButton />
      </div>
    </div>
  )
}

