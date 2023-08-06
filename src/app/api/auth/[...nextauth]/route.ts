import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

console.log('process.env.GITHUB_ID', process.env.GITHUB_ID);
console.log('process.env.GITHUB_SECRET', process.env.GITHUB_SECRET);

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    })
  ],
}

const handler = NextAuth(authOptions);


export {
  handler as GET,
  handler as POST,
}