import { SignInButton } from "@/components/sign-in-button"

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <div className="p-8 bg-card rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-center">Welcome to Earnings Note</h1>
        <p className="text-muted-foreground text-center mb-6">Sign in to access your account</p>
        <SignInButton />
      </div>
    </div>
  )
}
