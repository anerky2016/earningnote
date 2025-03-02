import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL)
console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID?.slice(0, 5) + "...")
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET ? "Set" : "Not set")

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  debug: process.env.NODE_ENV === "development",
})

export { handler as GET, handler as POST }

